import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { ProductCard } from '../../components/product/ProductCard';
import { productService } from '../../services/productService';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import {
  Heart,
  ShoppingBag,
  Check,
  Truck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Layers,
  Clock,
  Wind,
  Maximize2,
  X,
  Share2,
} from 'lucide-react';

export const ProductDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const found = await productService.getProductBySlug(slug);
        setProduct(found);
        setSelectedSize(found.sizes[0]);
        setQuantity(1);
        setActiveImageIndex(0);

        // Fetch related products
        if (found.relatedIds) {
          const rel = await productService.getRelatedProducts(found.relatedIds);
          setRelatedProducts(rel);
        }

        // Manage recently viewed in localStorage
        const storedRecent = localStorage.getItem('aura_recently_viewed');
        let recList = storedRecent ? JSON.parse(storedRecent) : [];
        recList = recList.filter((item) => item.id !== found.id);
        recList.unshift(found);
        recList = recList.slice(0, 4);
        localStorage.setItem('aura_recently_viewed', JSON.stringify(recList));
        setRecentlyViewed(recList.filter((p) => p.id !== found.id));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center text-sm text-aura-grey">
        Consulting master perfumer dossier...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-2xl text-aura-espresso mb-2">Fragrance not found</h2>
        <Link to="/shop" className="text-xs text-aura-gold underline">Return to Catalogue</Link>
      </div>
    );
  }

  const galleryImages = product.images.filter((image) => !image.includes('/editorial/'));
  const inWish = isInWishlist(product.id);
  const currentSizeObj = selectedSize || product.sizes[0];

  const handleAddToCart = () => {
    addToCart(product, currentSizeObj, quantity, true);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  const handleBuyNow = () => {
    addToCart(product, currentSizeObj, quantity, false);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs
        items={[
          { label: 'Shop', href: '/shop' },
          { label: product.fragranceFamily, href: `/shop?family=${encodeURIComponent(product.fragranceFamily)}` },
          { label: product.name }
        ]}
      />

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 pb-16">
        {/* Left: Image Gallery & Lightbox */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/5] bg-aura-cream/40 rounded-3xl overflow-hidden border border-aura-beige shadow-luxury">
            <img
              src={galleryImages[activeImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover object-center cursor-zoom-in transition-all duration-300"
              onClick={() => setLightboxOpen(true)}
            />

            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 text-aura-espresso shadow-md hover:bg-white transition-colors"
              aria-label="Enlarge image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-wider font-semibold text-aura-gold rounded-full border border-aura-gold/30">
                {product.collectionType === 'original' ? 'BELLMORA Original Haute Parfumerie' : 'BELLMORA Inspired Interpretation'}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-aura-gold shadow-md scale-95'
                      : 'border-aura-beige/80 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Olfactory Dossier & Purchasing Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-aura-grey mb-1">
                <span className="uppercase tracking-widest font-semibold text-aura-gold-dark">
                  {product.fragranceFamily} Olfactive Family
                </span>
                <span className="capitalize">{product.category} Formulation</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-medium text-aura-espresso">
                {product.name}
              </h1>

              <p className="font-serif italic text-base text-aura-grey mt-1">
                {product.subtitle}
              </p>

              {/* Price display */}
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="text-3xl font-bold text-aura-espresso font-sans">
                  ₹{currentSizeObj.price.toLocaleString('en-IN')}
                </span>
                {currentSizeObj.comparePrice && (
                  <span className="text-base text-aura-grey line-through font-sans">
                    ₹{currentSizeObj.comparePrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium">
                  Inclusive of all taxes
                </span>
              </div>
            </div>

            <p className="text-sm text-aura-espresso/80 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-aura-espresso">
                Flacon Size: <span className="text-aura-gold font-bold">{currentSizeObj.size}</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSize(s)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      currentSizeObj.size === s.size
                        ? 'border-aura-gold bg-aura-cream font-bold text-aura-espresso shadow-xs ring-2 ring-aura-gold/30'
                        : 'border-aura-beige text-aura-grey hover:border-aura-gold/60 bg-white'
                    }`}
                  >
                    <div className="text-xs font-semibold">{s.size}</div>
                    <div className="text-[11px] text-aura-gold-dark mt-0.5">₹{s.price.toLocaleString('en-IN')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Stock Indicator */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-aura-espresso">Quantity:</span>
                <div className="flex items-center border border-aura-beige rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-aura-grey hover:text-aura-espresso"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold text-aura-espresso">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-aura-grey hover:text-aura-espresso"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Stock status indicator */}
              <div className="flex items-center space-x-1.5 text-xs text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>In Stock • Ready for dispatch</span>
              </div>
            </div>

            {/* Purchase CTA Buttons */}
            <div className="space-y-3 pt-4">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-aura-gold" />
                      <span>Add to Shopping Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-xl border transition-colors ${
                    inWish
                      ? 'border-red-300 bg-red-50 text-red-500'
                      : 'border-aura-beige hover:border-aura-gold text-aura-espresso bg-white'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWish ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 bg-aura-gold hover:bg-aura-gold-light text-aura-espresso text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-xs"
              >
                Instant Checkout (Demo)
              </button>
            </div>

            {/* Value Guarantees list */}
            <div className="pt-4 border-t border-aura-beige/80 space-y-2 text-xs text-aura-grey">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-aura-gold flex-shrink-0" />
                <span>Complimentary white-glove shipping on orders above ₹2,500</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-aura-gold flex-shrink-0" />
                <span>Includes 2 complimentary tester discovery vials with full flacons</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-aura-gold flex-shrink-0" />
                <span>Simulated demo store • No real card charges applied</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fragrance Notes Pyramid Section */}
      <section className="my-16 bg-white p-8 sm:p-12 rounded-3xl border border-aura-beige shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
            Olfactory Architecture
          </span>
          <h3 className="font-serif text-3xl text-aura-espresso font-medium">
            The Fragrance Notes Pyramid
          </h3>
          <p className="text-xs text-aura-grey mt-1 font-light">
            A harmonious tri-phase composition unfolding across the hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Top Notes */}
          <div className="p-6 bg-aura-ivory/60 rounded-2xl border border-aura-beige text-center space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-aura-gold font-bold block">
              Phase 1: Initial 0–30 Mins
            </span>
            <h4 className="font-serif text-xl font-medium text-aura-espresso">Top Notes</h4>
            <div className="pt-2 flex flex-wrap justify-center gap-1.5">
              {product.notes.top.map((note) => (
                <span key={note} className="px-3 py-1 bg-white rounded-full text-xs text-aura-espresso border border-aura-beige font-medium">
                  {note}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-aura-grey pt-2">The luminous opening awakening the senses.</p>
          </div>

          {/* Heart Notes */}
          <div className="p-6 bg-aura-cream/60 rounded-2xl border border-aura-gold/40 text-center space-y-2 shadow-xs">
            <span className="text-[10px] uppercase tracking-wider text-aura-gold-dark font-bold block">
              Phase 2: 1–5 Hours
            </span>
            <h4 className="font-serif text-xl font-medium text-aura-espresso">Heart Notes</h4>
            <div className="pt-2 flex flex-wrap justify-center gap-1.5">
              {product.notes.heart.map((note) => (
                <span key={note} className="px-3 py-1 bg-white rounded-full text-xs text-aura-espresso border border-aura-gold/30 font-medium">
                  {note}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-aura-grey pt-2">The emotional core defining the sillage.</p>
          </div>

          {/* Base Notes */}
          <div className="p-6 bg-aura-ivory/60 rounded-2xl border border-aura-beige text-center space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-aura-gold font-bold block">
              Phase 3: 5–14+ Hours
            </span>
            <h4 className="font-serif text-xl font-medium text-aura-espresso">Base Notes</h4>
            <div className="pt-2 flex flex-wrap justify-center gap-1.5">
              {product.notes.base.map((note) => (
                <span key={note} className="px-3 py-1 bg-white rounded-full text-xs text-aura-espresso border border-aura-beige font-medium">
                  {note}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-aura-grey pt-2">Rich enduring resins, woods, and ambers.</p>
          </div>
        </div>

        {/* Technical Dossier specifications */}
        <div className="mt-12 pt-8 border-t border-aura-beige grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-3xl mx-auto">
          <div>
            <Clock className="w-5 h-5 mx-auto text-aura-gold mb-1" />
            <span className="text-xs text-aura-grey block">Longevity</span>
            <strong className="text-xs text-aura-espresso">{product.longevity || '10-12 Hours'}</strong>
          </div>
          <div>
            <Wind className="w-5 h-5 mx-auto text-aura-gold mb-1" />
            <span className="text-xs text-aura-grey block">Sillage</span>
            <strong className="text-xs text-aura-espresso">{product.sillage || 'Moderate to Strong'}</strong>
          </div>
          <div>
            <Layers className="w-5 h-5 mx-auto text-aura-gold mb-1" />
            <span className="text-xs text-aura-grey block">Concentration</span>
            <strong className="text-xs text-aura-espresso">30% Pure Extrait</strong>
          </div>
          <div>
            <Sparkles className="w-5 h-5 mx-auto text-aura-gold mb-1" />
            <span className="text-xs text-aura-grey block">Best Occasion</span>
            <strong className="text-xs text-aura-espresso">{product.occasions?.[0] || 'Signature'}</strong>
          </div>
        </div>
      </section>

      {/* Related Products Carousel */}
      {relatedProducts.length > 0 && (
        <section className="my-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-aura-espresso font-medium">
              Complementary Olfactory Creations
            </h3>
            <Link to="/shop" className="text-xs uppercase tracking-wider font-semibold text-aura-espresso hover:text-aura-gold">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-aura-gold p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[activeImageIndex]}
            alt={product.name}
            className="max-w-4xl max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
