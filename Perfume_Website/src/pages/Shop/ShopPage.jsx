import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { ProductCard } from '../../components/product/ProductCard';
import { productService } from '../../services/productService';
import { fragranceFamilies } from '../../data/products';
import {
  Filter,
  X,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

export const ShopPage = () => {
  const { category: paramCategory, collection: paramCollection } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters state
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(paramCategory || 'all');
  const [selectedCollection, setSelectedCollection] = useState(
    paramCollection ? paramCollection : 'all'
  );
  const [selectedFamily, setSelectedFamily] = useState(searchParams.get('family') || 'all');
  const [priceRange, setPriceRange] = useState(10000);
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Products state
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync route params when URL changes
  useEffect(() => {
    if (paramCategory) {
      setSelectedCategory(paramCategory);
    } else {
      setSelectedCategory('all');
    }

    if (paramCollection) {
      if (paramCollection === 'original-collection') {
        setSelectedCollection('original');
      } else if (paramCollection === 'inspired-collection') {
        setSelectedCollection('inspired');
      } else if (paramCollection === 'new-arrivals') {
        setSortBy('newest');
        setSelectedCollection('all');
      } else if (paramCollection === 'bestsellers') {
        setSortBy('bestseller');
        setSelectedCollection('all');
      }
    } else {
      setSelectedCollection('all');
    }

    if (searchParams.get('family')) {
      setSelectedFamily(searchParams.get('family'));
    }

    if (searchParams.get('q')) {
      setSearch(searchParams.get('q'));
    }
  }, [paramCategory, paramCollection, searchParams]);

  // Fetch filtered products
  useEffect(() => {
    const fetchFiltered = async () => {
      setLoading(true);
      try {
        const results = await productService.filterProducts({
          search,
          category: selectedCategory,
          collectionType: selectedCollection,
          fragranceFamily: selectedFamily,
          maxPrice: priceRange,
          sortBy,
          inStockOnly,
        });
        setProductsList(results);
      } finally {
        setLoading(false);
      }
    };
    fetchFiltered();
  }, [search, selectedCategory, selectedCollection, selectedFamily, priceRange, sortBy, inStockOnly]);

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategory('all');
    setSelectedCollection('all');
    setSelectedFamily('all');
    setPriceRange(10000);
    setSortBy('featured');
    setInStockOnly(false);
    setSearchParams({});
  };

  const getPageTitle = () => {
    if (paramCategory === 'men') return "Men's Haute Parfumerie";
    if (paramCategory === 'women') return "Women's Luxury Fragrances";
    if (paramCategory === 'unisex') return "Unisex Signature Blends";
    if (paramCategory === 'gift-sets') return "Prestige Gift Sets & Coffrets";
    if (paramCollection === 'original-collection') return "AURA Original Formulations";
    if (paramCollection === 'inspired-collection') return "Inspired Fragrance Interpretations";
    if (paramCollection === 'new-arrivals') return "New Season Fragrance Arrivals";
    if (paramCollection === 'bestsellers') return "Bestselling Fragrances";
    if (search) return `Search Results for "${search}"`;
    return "All Fragrances";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs
        items={[
          { label: 'Shop', href: '/shop' },
          { label: getPageTitle() }
        ]}
      />

      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          {getPageTitle()}
        </h1>
        <p className="text-sm text-aura-grey mt-2 font-light">
          Extrait de parfums blended with 30% pure fragrance oils, formulated for captivating projection and enduring memory.
        </p>
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="bg-white p-4 rounded-2xl border border-aura-beige shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search inside catalogue */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-aura-grey absolute left-3 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scents or notes..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-aura-ivory border border-aura-beige rounded-lg focus:outline-none focus:border-aura-gold text-aura-espresso"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-2.5 text-aura-grey hover:text-aura-espresso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Product Count & Sort selector */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <span className="text-xs text-aura-grey">
            Showing <strong className="text-aura-espresso">{productsList.length}</strong> fragrances
          </span>

          <div className="flex items-center space-x-2">
            <label className="text-xs text-aura-grey hidden sm:inline">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-aura-ivory border border-aura-beige rounded-lg px-3 py-2 text-aura-espresso focus:outline-none focus:border-aura-gold font-medium"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">New Arrivals</option>
              <option value="bestseller">Bestsellers</option>
              <option value="name">Alphabetical</option>
            </select>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden px-3 py-2 bg-aura-cream rounded-lg border border-aura-beige text-xs text-aura-espresso font-medium flex items-center space-x-1"
            >
              <Filter className="w-3.5 h-3.5 text-aura-gold" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-aura-beige shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-aura-beige pb-3">
              <h3 className="font-serif text-lg font-medium text-aura-espresso flex items-center">
                <SlidersHorizontal className="w-4 h-4 mr-2 text-aura-gold" />
                <span>Filters</span>
              </h3>
              <button
                onClick={handleClearFilters}
                className="text-xs text-aura-gold hover:underline flex items-center space-x-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear All</span>
              </button>
            </div>

            {/* Category / Gender */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-aura-espresso mb-3">
                Category
              </h4>
              <div className="space-y-2 text-xs">
                {[
                  { id: 'all', label: 'All Categories' },
                  { id: 'men', label: "Men's Collection" },
                  { id: 'women', label: "Women's Collection" },
                  { id: 'unisex', label: 'Unisex Signature' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-2 cursor-pointer text-aura-grey hover:text-aura-espresso">
                    <input
                      type="radio"
                      name="category_filter"
                      checked={selectedCategory === item.id}
                      onChange={() => setSelectedCategory(item.id)}
                      className="accent-aura-gold"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Collection Formulation */}
            <div className="border-t border-aura-beige pt-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-aura-espresso mb-3">
                Formulation Type
              </h4>
              <div className="space-y-2 text-xs">
                {[
                  { id: 'all', label: 'All Formulations' },
                  { id: 'original', label: 'AURA Original Parfumerie' },
                  { id: 'inspired', label: 'Inspired Fragrance Interpretations' },
                  { id: 'gift-sets', label: 'Gift Sets & Coffrets' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-2 cursor-pointer text-aura-grey hover:text-aura-espresso">
                    <input
                      type="radio"
                      name="collection_filter"
                      checked={selectedCollection === item.id}
                      onChange={() => setSelectedCollection(item.id)}
                      className="accent-aura-gold"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fragrance Family */}
            <div className="border-t border-aura-beige pt-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-aura-espresso mb-3">
                Fragrance Family
              </h4>
              <div className="space-y-2 text-xs">
                {fragranceFamilies.map((fam) => (
                  <label key={fam.id} className="flex items-center space-x-2 cursor-pointer text-aura-grey hover:text-aura-espresso">
                    <input
                      type="radio"
                      name="family_filter"
                      checked={selectedFamily === fam.id}
                      onChange={() => setSelectedFamily(fam.id)}
                      className="accent-aura-gold"
                    />
                    <span>{fam.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="border-t border-aura-beige pt-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="uppercase tracking-wider font-semibold text-aura-espresso">Max Price</span>
                <span className="font-bold text-aura-gold">₹{priceRange.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="10000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-aura-gold cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-aura-grey mt-1">
                <span>₹2,000</span>
                <span>₹10,000</span>
              </div>
            </div>

            {/* Availability */}
            <div className="border-t border-aura-beige pt-4">
              <label className="flex items-center space-x-2 cursor-pointer text-xs text-aura-espresso font-medium">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-aura-gold focus:ring-aura-gold"
                />
                <span>In Stock Flacons Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-aura-espresso/50 backdrop-blur-xs animate-fadeIn lg:hidden">
            <div className="w-full max-w-xs bg-white h-full p-6 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between border-b border-aura-beige pb-3">
                <h3 className="font-serif text-lg font-medium text-aura-espresso">Filter Fragrances</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
                  <X className="w-5 h-5 text-aura-espresso" />
                </button>
              </div>

              {/* Mobile filter controls */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-2">Category</h4>
                <div className="space-y-2 text-xs">
                  {['all', 'men', 'women', 'unisex'].map((cat) => (
                    <label key={cat} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-aura-gold"
                      />
                      <span className="capitalize">{cat === 'all' ? 'All' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-aura-beige pt-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-2">Fragrance Family</h4>
                <div className="space-y-2 text-xs max-h-48 overflow-y-auto">
                  {fragranceFamilies.map((fam) => (
                    <label key={fam.id} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={selectedFamily === fam.id}
                        onChange={() => setSelectedFamily(fam.id)}
                        className="accent-aura-gold"
                      />
                      <span>{fam.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <button
                  onClick={handleClearFilters}
                  className="w-1/2 py-2 border border-aura-beige text-xs font-semibold rounded-lg"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-1/2 py-2 bg-aura-espresso text-white text-xs font-semibold rounded-lg"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="py-24 text-center text-sm text-aura-grey">
              Consulting atelier archives...
            </div>
          ) : productsList.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-aura-beige p-8">
              <h3 className="font-serif text-xl font-medium text-aura-espresso mb-2">
                No matching fragrances found
              </h3>
              <p className="text-xs text-aura-grey max-w-sm mx-auto mb-6">
                Try widening your search terms or clearing active category filters.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-2.5 bg-aura-espresso text-white text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-aura-espresso-light transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {productsList.slice(0, visibleCount).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {visibleCount < productsList.length && (
                <div className="text-center pt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-8 py-3 bg-white border border-aura-espresso/20 hover:border-aura-gold text-aura-espresso text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-xs hover:shadow-md"
                  >
                    Load More Fragrances ({productsList.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
