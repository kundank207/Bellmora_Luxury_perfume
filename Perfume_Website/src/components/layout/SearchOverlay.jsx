import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { productService } from '../../services/productService';

export const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const matches = await productService.filterProducts({ search: query });
        setResults(matches.slice(0, 6));
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onClose();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectProduct = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-aura-espresso/50 backdrop-blur-md flex flex-col items-center pt-20 px-4 animate-fadeIn">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-aura-beige overflow-hidden">
        {/* Search Input Bar */}
        <form onSubmit={handleSubmit} className="flex items-center px-6 py-4 border-b border-aura-beige bg-aura-ivory/50">
          <Search className="w-5 h-5 text-aura-gold mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by scent name, notes (oud, amber, iris), or fragrance family..."
            className="w-full bg-transparent text-aura-espresso placeholder-aura-grey text-base focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-aura-grey hover:text-aura-espresso transition-colors mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-aura-grey hover:text-aura-espresso rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </form>

        {/* Popular searches suggestions */}
        <div className="p-6">
          {!query && (
            <div>
              <p className="text-xs uppercase tracking-wider text-aura-grey font-medium mb-3 flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-aura-gold" /> Popular Fragrance Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Santal Ethereal', 'Velvet Oud', 'Floral', 'Woody', 'Discovery Set', 'Amber', 'Men Eau de Parfum'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 bg-aura-cream hover:bg-aura-gold/20 text-xs text-aura-espresso rounded-full border border-aura-beige transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Live Search Results */}
          {loading ? (
            <div className="py-12 text-center text-xs text-aura-grey">
              Consulting master fragrance archives...
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-aura-grey font-medium">Matching Fragrances ({results.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="flex items-center space-x-3 p-2.5 rounded-xl border border-aura-beige/80 hover:border-aura-gold bg-aura-ivory/30 hover:bg-white cursor-pointer transition-all group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-aura-gold font-medium block">
                        {product.fragranceFamily} • {product.collectionType === 'original' ? 'Original' : 'Inspired'}
                      </span>
                      <h4 className="font-serif text-base text-aura-espresso truncate group-hover:text-aura-gold transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs font-medium text-aura-espresso">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-3 py-2.5 bg-aura-cream hover:bg-aura-gold/20 text-aura-espresso text-xs font-medium rounded-xl border border-aura-beige transition-all flex items-center justify-center space-x-2"
              >
                <span>View all results for "{query}"</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : query && !loading ? (
            <div className="py-8 text-center">
              <p className="text-sm text-aura-espresso">No perfumes matched "{query}"</p>
              <p className="text-xs text-aura-grey mt-1">Try searching for floral, woody, vanilla, or discovery set</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
