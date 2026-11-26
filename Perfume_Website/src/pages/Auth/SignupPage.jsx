import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import {
  Lock,
  Mail,
  User,
  Phone,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password.length < 6) {
      return setError('Password must be at least 6 characters long.');
    }
    if (form.password !== form.confirmPassword) {
      return setError('Passwords do not match.');
    }
    if (!form.termsAccepted) {
      return setError('Please accept the terms and conditions.');
    }

    setLoading(true);
    try {
      await signup({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      navigate('/account');
    } catch (err) {
      setError(err.message || 'Unable to create demo account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 animate-fadeIn">
      <div className="text-center mb-8">
        <span className="font-cinzel text-2xl font-medium tracking-[0.25em] text-aura-espresso block mb-1">
          AURA
        </span>
        <h1 className="font-serif text-3xl text-aura-espresso font-medium">
          Create an Account
        </h1>
        <p className="text-xs text-aura-grey mt-1">
          Join our circle of fragrance connoisseurs and enjoy private reserve privileges.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-luxury space-y-6">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Elena Vance"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="elena@example.com"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
              Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-2.5 text-aura-grey hover:text-aura-espresso"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
              />
            </div>
          </div>

          <div className="pt-1">
            <label className="flex items-start space-x-2 text-xs text-aura-grey cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.termsAccepted}
                onChange={(e) => setForm({ ...form, termsAccepted: e.target.checked })}
                className="rounded text-aura-gold focus:ring-aura-gold mt-0.5"
              />
              <span>
                I agree to the <Link to="/terms" className="text-aura-espresso underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-aura-espresso underline">Privacy Policy</Link>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <span>{loading ? 'Creating Demo Account...' : 'Create Account'}</span>
          </button>
        </form>

        <p className="text-center text-xs text-aura-grey border-t border-aura-beige pt-4">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-aura-espresso hover:text-aura-gold underline">
            Sign In
          </Link>
        </p>
      </div>

      <p className="text-[10px] text-center text-aura-grey mt-6 flex items-center justify-center space-x-1">
        <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
        <span>Demonstration signup persists in localStorage for presentation testing.</span>
      </p>
    </div>
  );
};
