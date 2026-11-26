import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BuildBundleDemo } from '../../components/home/BuildBundleDemo';
import { ProductCard } from '../../components/product/ProductCard';
import { productService } from '../../services/productService';
import { fragranceFamilies } from '../../data/products';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
  Compass,
  Gift,
} from 'lucide-react';

export const HomePage = () => {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [bestsellers, setBestsellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [originalCollection, setOriginalCollection] = useState([]);
  const [inspiredCollection, setInspiredCollection] = useState([]);
  const [giftSets, setGiftSets] = useState([]);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreferenceChange = (event) => {
      if (event.matches) {
        videoRef.current?.pause();
        setVideoReady(false);
      }
      setPrefersReducedMotion(event.matches);
    };

    motionPreference.addEventListener('change', handleMotionPreferenceChange);
    return () => motionPreference.removeEventListener('change', handleMotionPreferenceChange);
  }, []);

  useEffect(() => {
    productService.getBestsellers().then((res) => setBestsellers(res.slice(0, 4)));
    productService.getNewArrivals().then((res) => setNewArrivals(res.slice(0, 4)));
    productService.filterProducts({ collectionType: 'original' }).then((res) => setOriginalCollection(res.slice(0, 4)));
    productService.filterProducts({ collectionType: 'inspired' }).then((res) => setInspiredCollection(res.slice(0, 4)));
    productService.getGiftSets().then((res) => setGiftSets(res.slice(0, 4)));
  }, []);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Full-Width Cinematic Video Hero Section (No 3D Bottle) */}
      <section className="relative overflow-hidden w-full min-h-[700px] md:min-h-[75vh] lg:min-h-[85vh] flex items-center border-b border-aura-beige/80">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#E9DDCA]">
          <img
            src="/videos/bellmora-poster.jpg"
            alt=""
            aria-hidden="true"
            className="bellmora-hero-poster absolute inset-0 w-full h-full"
          />

          {!prefersReducedMotion && !videoFailed && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/videos/bellmora-poster.jpg"
              aria-hidden="true"
              tabIndex="-1"
              onCanPlay={(event) => {
                const playback = event.currentTarget.play();
                if (playback) {
                  playback.then(() => setVideoReady(true)).catch(() => {
                    setVideoReady(false);
                    setVideoFailed(true);
                  });
                }
              }}
              onPlaying={() => setVideoReady(true)}
              onError={() => {
                setVideoReady(false);
                setVideoFailed(true);
              }}
              className={`bellmora-hero-video absolute inset-0 w-full h-full transition-opacity duration-500 ${
                videoReady ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src="/videos/bellmora-hero.mp4" type="video/mp4" />
            </video>
          )}

          {/* Left-side subtle ivory/warm gradient overlay for text readability without obscuring right-side perfume bottle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(248, 245, 239, 0.97) 0%, rgba(248, 245, 239, 0.90) 38%, rgba(248, 245, 239, 0.45) 60%, rgba(248, 245, 239, 0.1) 75%, transparent 100%)',
            }}
          />

          {/* Soft top & bottom fades to smoothly blend into the page */}
          <div
            className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(248, 245, 239, 0.6), transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #F8F5EF)' }}
          />
        </div>

        {/* Hero Narrative on the LEFT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-xl text-center lg:text-left space-y-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-aura-gold/15 text-aura-gold-dark text-xs uppercase tracking-widest font-semibold border border-aura-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
              <span>BELLMORA LUXURY — THE ART OF PERFUMERY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal text-aura-espresso leading-[1.08] tracking-tight">
              The Essence <br />
              of <span className="italic font-light text-aura-gold">Timeless Luxury.</span>
            </h1>

            {/* Subtle Gold Decorative Line */}
            <div className="w-16 h-0.5 bg-aura-gold/60 mx-auto lg:mx-0" />

            {/* Description */}
            <p className="text-base sm:text-lg text-aura-grey max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Discover an exquisite world of captivating fragrances, crafted to leave an unforgettable impression.
            </p>

            {/* Two Functional Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-4 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-luxury hover:shadow-luxury-hover flex items-center justify-center space-x-2 group"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 text-aura-gold group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/fragrance-finder"
                className="w-full sm:w-auto px-8 py-4 border border-aura-espresso/30 hover:border-aura-gold text-aura-espresso bg-white/70 hover:bg-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center space-x-2 shadow-xs"
              >
                <Compass className="w-4 h-4 text-aura-gold" />
                <span>FRAGRANCE FINDER</span>
                <ArrowRight className="w-3.5 h-3.5 text-aura-espresso/60" />
              </Link>
            </div>

            {/* Atelier Accreditations */}
            <div className="pt-8 border-t border-aura-beige/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-aura-espresso block">30%</span>
                <span className="text-[11px] text-aura-grey uppercase tracking-wider block">Extrait de Parfum</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-aura-espresso block">12+ Hrs</span>
                <span className="text-[11px] text-aura-grey uppercase tracking-wider block">Signature Sillage</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-aura-espresso block">100%</span>
                <span className="text-[11px] text-aura-grey uppercase tracking-wider block">IFRA Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category (Men, Women, Unisex) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
            Curated Expressions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
            Shop by Category
          </h2>
          <p className="text-sm text-aura-grey mt-2 font-light">
            Each flacon is composed to capture a distinct dimension of poise and allure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Men's Haute Parfumerie",
              subtitle: 'Smoked Woods, Fine Leathers & Spices',
              link: '/category/men',
              image: '/images/WhatsApp Image 2026-11-25 at 14.48.53 (1).jpeg',
              count: '8 Creations'
            },
            {
              title: "Women's Collection",
              subtitle: 'Luminous Florals, Rare Jasmine & Ambers',
              link: '/category/women',
              image: '/images/products/women/bellmora-rose-elegance.jpg',
              count: '9 Creations'
            },
            {
              title: 'Unisex Signatures',
              subtitle: 'Transcendent Woods, Silky Musks & Sandalwood',
              link: '/category/unisex',
              image: '/images/products/unisex/bellmora-santal-ethereal.jpg',
              count: '9 Creations'
            }
          ].map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-luxury border border-aura-beige/80 transition-all duration-500 hover:shadow-luxury-hover"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aura-espresso/80 via-aura-espresso/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white space-y-1">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-aura-gold block">
                  {cat.count}
                </span>
                <h3 className="font-serif text-2xl font-medium tracking-wide group-hover:text-aura-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-aura-beige/80 font-light">
                  {cat.subtitle}
                </p>
                <div className="pt-2 flex items-center text-xs font-semibold text-white group-hover:text-aura-gold transition-colors">
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. BELLMORA Original Haute Parfumerie Section */}
      <section className="bg-white py-16 border-y border-aura-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
                Artisanal Formulations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
                BELLMORA Original Haute Parfumerie
              </h2>
              <p className="text-sm text-aura-grey mt-1 font-light max-w-xl">
                Bespoke recipes born directly from our master nose's palette. Pure luxury created with rare botanicals and aged resins.
              </p>
            </div>
            <Link
              to="/collection/original-collection"
              className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-aura-espresso hover:text-aura-gold flex items-center space-x-1"
            >
              <span>View All Originals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {originalCollection.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BELLMORA Inspired Interpretations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
                Iconic Interpretations
              </span>
              <span className="px-2 py-0.5 bg-aura-cream text-aura-grey text-[9px] uppercase font-semibold rounded border border-aura-beige">
                Independent Tribute
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
              BELLMORA Inspired Interpretations
            </h2>
            <p className="text-sm text-aura-grey mt-1 font-light max-w-xl">
              Independent luxury artistic tributes to world-renowned signature profiles at 30% extrait concentration.
            </p>
          </div>
          <Link
            to="/collection/inspired-collection"
            className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-aura-espresso hover:text-aura-gold flex items-center space-x-1"
          >
            <span>View All Interpretations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspiredCollection.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 5. Interactive Build Your Own Perfume Bundle Widget */}
      <BuildBundleDemo />

      {/* 6. Bestsellers & New Arrivals Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
              Connoisseur Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
              Bestselling Creations
            </h2>
          </div>
          <Link
            to="/collection/bestsellers"
            className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-aura-espresso hover:text-aura-gold flex items-center space-x-1"
          >
            <span>View All Bestsellers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 7. Shop by Fragrance Family (Anchored for Fragrance Finder button) */}
      <section id="fragrance-finder" className="bg-white py-16 border-y border-aura-beige scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
              The Olfactory Spectrum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
              Discover Your Fragrance Family
            </h2>
            <p className="text-sm text-aura-grey mt-2 font-light">
              Filter our master archives by the elemental accords and notes that move your soul.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {fragranceFamilies.filter((f) => f.id !== 'all').map((fam) => (
              <Link
                key={fam.id}
                to={`/shop?family=${encodeURIComponent(fam.id)}`}
                className="group p-5 bg-aura-ivory/60 hover:bg-aura-cream rounded-2xl border border-aura-beige hover:border-aura-gold/60 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg font-medium text-aura-espresso group-hover:text-aura-gold transition-colors">
                    {fam.name}
                  </h3>
                  <p className="text-[11px] text-aura-grey mt-1 line-clamp-2">
                    {fam.description}
                  </p>
                </div>
                <span className="mt-3 text-[10px] uppercase font-semibold text-aura-gold tracking-wider block">
                  Explore Family →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/fragrance-finder"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-aura-espresso-light transition-all shadow-luxury"
            >
              <Compass className="w-4 h-4 text-aura-gold" />
              <span>Launch Interactive Fragrance Finder Quiz</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Editorial Campaign & Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-aura-cream/60 rounded-3xl p-8 lg:p-14 border border-aura-beige grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block">
              Editorial Campaign
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-aura-espresso leading-snug">
              The Pure Alchemy of Grasse Meets Contemporary Haute Parfumerie
            </h2>
            <p className="text-sm text-aura-grey leading-relaxed font-light">
              At BELLMORA LUXURY, we reject synthetic shortcuts. Each formula is aged in small glass carboys for 60 days before bottling to allow delicate floral absolutes, amber resins, and noble woods to mature into sublime harmony.
            </p>
            <div className="pt-2">
              <Link
                to="/our-story"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors"
              >
                <span>Read Our Atelier Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/images/editorial/bellmora-editorial-landscape-1.jpg"
              alt="BELLMORA LUXURY Fragrance Ingredients & Flacon"
              className="w-full h-80 object-cover rounded-2xl shadow-luxury border-2 border-white"
            />
          </div>
        </div>
      </section>

      {/* 9. Luxury Gift Sets & Coffrets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
              Prestige Presentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
              BELLMORA Prestige Gift Sets & Coffrets
            </h2>
          </div>
          <Link
            to="/category/gift-sets"
            className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-aura-espresso hover:text-aura-gold flex items-center space-x-1"
          >
            <span>View All Gift Sets</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftSets.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 10. Shopping Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-6 bg-white rounded-2xl border border-aura-beige shadow-xs">
          {[
            {
              icon: Truck,
              title: 'Complimentary Shipping',
              description: 'White-glove tracked delivery across India on orders above ₹2,500'
            },
            {
              icon: Award,
              title: '30% Extrait Concentration',
              description: 'Highest pure perfume oil ratio guaranteeing 10-14 hours longevity'
            },
            {
              icon: Gift,
              title: 'Complimentary Samples',
              description: '2x complimentary discovery vials included with every full flacon'
            },
            {
              icon: RotateCcw,
              title: 'The Scent Guarantee',
              description: 'Sample first from the included tester before breaking the box seal'
            }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-aura-cream text-aura-gold flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-aura-espresso">{benefit.title}</h4>
                  <p className="text-xs text-aura-grey mt-0.5 leading-snug">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
