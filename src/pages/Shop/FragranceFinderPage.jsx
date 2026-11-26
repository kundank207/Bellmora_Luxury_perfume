import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { ProductCard } from '../../components/product/ProductCard';
import { productService } from '../../services/productService';
import { fragranceFamilies, occasionsList } from '../../data/products';
import { Compass, Sparkles, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export const FragranceFinderPage = () => {
  const [step, setStep] = useState(1);
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedIntensity, setSelectedIntensity] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const intensities = [
    { id: 'Light', label: 'Light & Ethereal', description: 'Subtle second-skin sillage for close intimacy and delicate daily grace.' },
    { id: 'Moderate', label: 'Moderate & Elegant', description: 'Noticeable yet refined trail that effortlessly commands respect without overpowering.' },
    { id: 'Intense', label: 'Intense & Enveloping', description: 'Deep, room-filling sillage with extraordinary projection and enduring nighttime aura.' }
  ];

  const handleCalculateMatches = async () => {
    setLoading(true);
    setStep(4);
    try {
      const results = await productService.matchFragranceFinder({
        family: selectedFamily?.id || 'any',
        occasion: selectedOccasion || 'any',
        intensity: selectedIntensity?.id || 'any'
      });
      setMatches(results);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedFamily(null);
    setSelectedOccasion(null);
    setSelectedIntensity(null);
    setMatches([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Fragrance Sommelier Finder' }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-aura-gold/20 text-aura-gold-dark text-xs uppercase tracking-widest font-semibold mb-3">
          <Compass className="w-4 h-4" />
          <span>Atelier Olfactory Diagnostic</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          The Fragrance Finder
        </h1>
        <p className="text-sm text-aura-grey mt-3 leading-relaxed">
          Allow our olfactory algorithms to discover the precise extrait de parfum formula tailored to your aesthetic, mood, and personal presence.
        </p>

        {/* Stepper indicators */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          {[
            { num: 1, label: 'Fragrance Family' },
            { num: 2, label: 'Occasion' },
            { num: 3, label: 'Intensity' },
            { num: 4, label: 'Your Scent Match' }
          ].map((s) => (
            <div key={s.num} className="flex items-center space-x-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                  step === s.num
                    ? 'bg-aura-gold text-white shadow-md'
                    : step > s.num
                    ? 'bg-aura-espresso text-white'
                    : 'bg-aura-beige/80 text-aura-grey'
                }`}
              >
                {step > s.num ? '✓' : s.num}
              </div>
              <span className="hidden md:inline text-xs font-medium text-aura-espresso">
                {s.label}
              </span>
              {s.num < 4 && <div className="hidden md:block w-6 h-0.5 bg-aura-beige" />}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Fragrance Family */}
      {step === 1 && (
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-aura-beige shadow-sm animate-fadeIn">
          <h2 className="font-serif text-2xl text-aura-espresso text-center font-medium mb-2">
            Which scent profile moves your spirit?
          </h2>
          <p className="text-xs text-aura-grey text-center mb-8">
            Select the dominant olfactive family that resonates with your taste.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {fragranceFamilies.filter((f) => f.id !== 'all').map((fam) => (
              <button
                key={fam.id}
                onClick={() => setSelectedFamily(fam)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedFamily?.id === fam.id
                    ? 'border-aura-gold bg-aura-cream/60 shadow-md ring-2 ring-aura-gold/40'
                    : 'border-aura-beige hover:border-aura-gold/60 bg-aura-ivory/30'
                }`}
              >
                <div>
                  <h3 className="font-serif text-lg font-medium text-aura-espresso">{fam.name}</h3>
                  <p className="text-[11px] text-aura-grey mt-1 leading-snug">{fam.description}</p>
                </div>
                {selectedFamily?.id === fam.id && (
                  <CheckCircle2 className="w-4 h-4 text-aura-gold self-end mt-3" />
                )}
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setStep(2)}
              disabled={!selectedFamily}
              className={`px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all ${
                selectedFamily
                  ? 'bg-aura-espresso text-white hover:bg-aura-espresso-light shadow-md'
                  : 'bg-aura-beige text-aura-grey cursor-not-allowed'
              }`}
            >
              <span>Continue to Occasion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Occasion */}
      {step === 2 && (
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-aura-beige shadow-sm animate-fadeIn">
          <h2 className="font-serif text-2xl text-aura-espresso text-center font-medium mb-2">
            Where do you envision wearing this scent?
          </h2>
          <p className="text-xs text-aura-grey text-center mb-8">
            Family chosen: <strong className="text-aura-espresso">{selectedFamily?.name}</strong>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {occasionsList.map((occ) => (
              <button
                key={occ}
                onClick={() => setSelectedOccasion(occ)}
                className={`p-5 rounded-xl border text-center transition-all ${
                  selectedOccasion === occ
                    ? 'border-aura-gold bg-aura-cream font-bold text-aura-espresso shadow-md ring-2 ring-aura-gold/40'
                    : 'border-aura-beige hover:border-aura-gold/60 bg-aura-ivory/30 text-aura-espresso'
                }`}
              >
                <span className="font-serif text-base block">{occ}</span>
                <span className="text-[10px] text-aura-grey uppercase tracking-wider block mt-1">
                  Signature Setting
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep(1)}
              className="text-xs text-aura-grey hover:text-aura-espresso underline"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!selectedOccasion}
              className={`px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all ${
                selectedOccasion
                  ? 'bg-aura-espresso text-white hover:bg-aura-espresso-light shadow-md'
                  : 'bg-aura-beige text-aura-grey cursor-not-allowed'
              }`}
            >
              <span>Continue to Intensity</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Intensity & Sillage */}
      {step === 3 && (
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-aura-beige shadow-sm animate-fadeIn">
          <h2 className="font-serif text-2xl text-aura-espresso text-center font-medium mb-2">
            Select Your Desired Sillage & Projection
          </h2>
          <p className="text-xs text-aura-grey text-center mb-8">
            Tailoring concentration to your presence and personality.
          </p>

          <div className="space-y-4 mb-8">
            {intensities.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedIntensity(item)}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                  selectedIntensity?.id === item.id
                    ? 'border-aura-gold bg-aura-cream/70 shadow-md ring-2 ring-aura-gold/40'
                    : 'border-aura-beige hover:border-aura-gold/60 bg-aura-ivory/30'
                }`}
              >
                <div>
                  <h3 className="font-serif text-lg font-semibold text-aura-espresso">{item.label}</h3>
                  <p className="text-xs text-aura-grey mt-0.5">{item.description}</p>
                </div>
                {selectedIntensity?.id === item.id && (
                  <CheckCircle2 className="w-5 h-5 text-aura-gold flex-shrink-0 ml-4" />
                )}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep(2)}
              className="text-xs text-aura-grey hover:text-aura-espresso underline"
            >
              ← Back
            </button>
            <button
              onClick={handleCalculateMatches}
              disabled={!selectedIntensity}
              className={`px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all ${
                selectedIntensity
                  ? 'bg-aura-gold text-aura-espresso hover:bg-aura-gold-light font-bold shadow-md'
                  : 'bg-aura-beige text-aura-grey cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-4 h-4 mr-1" />
              <span>Reveal My Scent Matches</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && (
        <div className="animate-fadeIn">
          <div className="bg-aura-cream/50 p-6 rounded-2xl border border-aura-beige mb-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-aura-gold font-bold block mb-1">
                Your Diagnosed Scent Profile
              </span>
              <p className="text-sm text-aura-espresso">
                Family: <strong>{selectedFamily?.name}</strong> • Occasion: <strong>{selectedOccasion}</strong> • Intensity: <strong>{selectedIntensity?.label}</strong>
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 border border-aura-espresso text-aura-espresso text-xs font-semibold rounded-lg hover:bg-white transition-colors flex items-center space-x-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retake Finder</span>
            </button>
          </div>

          {loading ? (
            <div className="py-20 text-center text-sm text-aura-grey">
              Distilling matching flacons from our master catalogue...
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {matches.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
