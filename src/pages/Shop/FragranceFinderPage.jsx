import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { useCart } from '../../context/CartContext';
import { productService } from '../../services/productService';
import { ArrowRight, CheckCircle2, Compass, RefreshCw, ShoppingBag, Sparkles } from 'lucide-react';

const questions = [
  {
    key: 'occasion',
    title: 'When would you like to wear your fragrance?',
    options: ['Office', 'Daily Wear', 'Party', 'Date Night', 'Wedding', 'Special Occasion'],
  },
  {
    key: 'family',
    title: 'Which fragrance family do you prefer?',
    options: ['Woody', 'Oud', 'Floral', 'Fresh', 'Citrus', 'Sweet', 'Amber'],
  },
  {
    key: 'intensity',
    title: 'What intensity feels right for you?',
    options: ['Light', 'Moderate', 'Strong'],
  },
  {
    key: 'gender',
    title: 'Which collection would you like to explore?',
    options: ['Men', 'Women', 'Unisex', 'No Preference'],
  },
];

const optionDescriptions = {
  Office: 'Polished and considered for the workday.',
  'Daily Wear': 'An effortless signature for everyday moments.',
  Party: 'A memorable trail for a lively evening.',
  'Date Night': 'A captivating scent for an intimate occasion.',
  Wedding: 'An elegant fragrance for a milestone celebration.',
  'Special Occasion': 'A distinctive choice for celebrations and events.',
  Woody: 'Warm woods, polished cedar and earthy depth.',
  Oud: 'Rich, resinous character with a luxurious presence.',
  Floral: 'Expressive petals, from luminous to richly romantic.',
  Fresh: 'Airy, clean notes with a bright, easy character.',
  Citrus: 'Sparkling citrus accords with a refreshing lift.',
  Sweet: 'Comforting gourmand notes, vanilla and warm accords.',
  Amber: 'Golden resins and enveloping warmth.',
  Light: 'A delicate, close-to-skin presence.',
  Moderate: 'A balanced, noticeable everyday trail.',
  Strong: 'A confident presence with lasting impact.',
  Men: 'Explore fragrances in the men’s collection.',
  Women: 'Explore fragrances in the women’s collection.',
  Unisex: 'Explore fragrances in the unisex collection.',
  'No Preference': 'Let your scent preferences lead the way.',
};

export const FragranceFinderPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    occasion: '',
    family: '',
    intensity: '',
    gender: '',
  });
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  const selectAnswer = (key, value) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setStep(questions.length);
    try {
      const results = await productService.matchFragranceFinder(answers);
      setMatches(results);
    } catch (requestError) {
      setError(requestError.message || 'We could not find a fragrance match. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({ occasion: '', family: '', intensity: '', gender: '' });
    setMatches([]);
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isResultsStep = step === questions.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Fragrance Finder' }]} />

      <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aura-gold/20 text-aura-gold-dark text-xs uppercase tracking-widest font-semibold mb-3">
          <Compass className="w-4 h-4" />
          <span>BELLMORA LUXURY — FIND YOUR SIGNATURE</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-aura-espresso font-medium">
          The Fragrance Finder
        </h1>
        <p className="text-sm sm:text-base text-aura-grey mt-3 leading-relaxed">
          Tell us what you love. We’ll match your preferences to fragrances in the BELLMORA LUXURY collection.
        </p>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8" aria-label="Quiz progress">
          {questions.map((question, index) => (
            <React.Fragment key={question.key}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                  step === index
                    ? 'bg-aura-gold text-white shadow-md'
                    : step > index
                    ? 'bg-aura-espresso text-white'
                    : 'bg-aura-beige/80 text-aura-grey'
                }`}
                aria-label={`Question ${index + 1}${answers[question.key] ? ', answered' : ''}`}
              >
                {step > index ? '✓' : index + 1}
              </div>
              {index < questions.length - 1 && (
                <div className={`h-0.5 w-5 sm:w-10 ${step > index ? 'bg-aura-gold' : 'bg-aura-beige'}`} />
              )}
            </React.Fragment>
          ))}
          {isResultsStep && <Sparkles className="w-5 h-5 text-aura-gold ml-1" aria-label="Recommendations" />}
        </div>
      </header>

      {!isResultsStep && (
        <section className="max-w-4xl mx-auto bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-aura-beige shadow-sm">
          <div className="text-center mb-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-aura-gold font-semibold mb-2">
              Question {step + 1} of {questions.length}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-aura-espresso font-medium">
              {questions[step].title}
            </h2>
          </div>

          <div className={`grid gap-3 sm:gap-4 mb-8 ${
            questions[step].key === 'occasion' || questions[step].key === 'family'
              ? 'grid-cols-2 md:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-3'
          }`}>
            {questions[step].options.map((option) => {
              const selected = answers[questions[step].key] === option;
              return (
                <button
                  type="button"
                  key={option}
                  aria-pressed={selected}
                  onClick={() => selectAnswer(questions[step].key, option)}
                  className={`min-h-24 p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    selected
                      ? 'border-aura-gold bg-aura-cream/60 shadow-md ring-2 ring-aura-gold/30'
                      : 'border-aura-beige hover:border-aura-gold/60 bg-aura-ivory/30'
                  }`}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-aura-espresso">{option}</span>
                  <span className="text-[11px] text-aura-grey mt-2 leading-snug">{optionDescriptions[option]}</span>
                  {selected && <CheckCircle2 className="w-4 h-4 text-aura-gold self-end mt-2" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              disabled={step === 0}
              className="text-xs sm:text-sm text-aura-grey hover:text-aura-espresso underline disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Back
            </button>
            {step < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((current) => current + 1)}
                disabled={!answers[questions[step].key]}
                className="px-6 sm:px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all bg-aura-espresso text-white hover:bg-aura-espresso-light disabled:bg-aura-beige disabled:text-aura-grey disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!answers[questions[step].key] || loading}
                className="px-6 sm:px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all bg-aura-gold text-aura-espresso hover:bg-aura-gold-light disabled:bg-aura-beige disabled:text-aura-grey disabled:cursor-not-allowed"
              >
                <Sparkles className="w-4 h-4" />
                Find My Fragrance
              </button>
            )}
          </div>
        </section>
      )}

      {isResultsStep && (
        <section aria-live="polite">
          <div className="max-w-5xl mx-auto bg-aura-cream/50 p-5 sm:p-6 rounded-2xl border border-aura-beige mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-aura-gold font-bold block mb-2">
                Your fragrance profile
              </span>
              <p className="text-sm text-aura-espresso leading-relaxed">
                {answers.occasion} <span aria-hidden="true">·</span> {answers.family} <span aria-hidden="true">·</span> {answers.intensity} <span aria-hidden="true">·</span> {answers.gender}
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="shrink-0 px-4 py-2.5 border border-aura-espresso text-aura-espresso text-xs font-semibold rounded-lg hover:bg-white transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Find Another Fragrance
            </button>
          </div>

          {loading ? (
            <div className="py-16 text-center text-sm text-aura-grey" role="status">
              Finding fragrances that fit your preferences…
            </div>
          ) : error ? (
            <div className="max-w-2xl mx-auto p-6 text-center bg-white rounded-2xl border border-red-200 text-red-700" role="alert">
              {error}
            </div>
          ) : matches.length === 0 ? (
            <div className="max-w-2xl mx-auto p-8 text-center bg-white rounded-2xl border border-aura-beige">
              <h2 className="font-serif text-2xl text-aura-espresso mb-2">No close matches just yet</h2>
              <p className="text-sm text-aura-grey mb-5">
                Try another combination to discover fragrances that match more of your preferences.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider"
              >
                Find Another Fragrance
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {matches.map(({ product, reasons }) => {
                const defaultSize = product.sizes?.[0];
                const fragranceNotes = Object.values(product.notes || {}).flat();
                return (
                  <article key={product.id} className="bg-white rounded-2xl border border-aura-beige overflow-hidden shadow-sm flex flex-col sm:flex-row">
                    <Link to={`/product/${product.slug}`} className="block sm:w-2/5 sm:shrink-0 aspect-[4/3] sm:aspect-auto sm:min-h-64 bg-aura-cream/40">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-col p-5 sm:p-6 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-widest text-aura-gold-dark font-semibold">
                          {product.fragranceFamily} · {product.category}
                        </span>
                        {product.isBestseller && (
                          <span className="text-[9px] uppercase tracking-wider bg-aura-cream px-2 py-1 rounded text-aura-espresso">Bestseller</span>
                        )}
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl text-aura-espresso font-medium">
                        <Link to={`/product/${product.slug}`} className="hover:text-aura-gold transition-colors">
                          {product.name}
                        </Link>
                      </h2>
                      <p className="text-sm text-aura-grey mt-1">{product.subtitle}</p>
                      <p className="text-lg font-semibold text-aura-espresso mt-3">
                        ₹{(defaultSize?.price ?? product.price).toLocaleString('en-IN')}
                        {defaultSize?.size && <span className="text-xs font-normal text-aura-grey ml-2">{defaultSize.size}</span>}
                      </p>

                      <div className="mt-4">
                        <h3 className="text-[10px] uppercase tracking-widest text-aura-gold-dark font-semibold mb-1">Fragrance notes</h3>
                        <p className="text-xs text-aura-grey leading-relaxed">{fragranceNotes.slice(0, 6).join(' · ') || product.shortDescription}</p>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-[10px] uppercase tracking-widest text-aura-gold-dark font-semibold mb-1">Why it suits you</h3>
                        <p className="text-xs text-aura-grey leading-relaxed">
                          A considered fit for your selections: {reasons.join(', ').replace(/, ([^,]*)$/, ' and $1')}.
                        </p>
                      </div>

                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Link
                          to={`/product/${product.slug}`}
                          className="px-4 py-3 rounded-lg border border-aura-espresso text-aura-espresso text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-center hover:bg-aura-cream transition-colors"
                        >
                          View Product
                        </Link>
                        <button
                          type="button"
                          onClick={() => addToCart(product, defaultSize, 1, true)}
                          className="px-4 py-3 rounded-lg bg-aura-espresso text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-aura-espresso-light transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4 text-aura-gold" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
};
