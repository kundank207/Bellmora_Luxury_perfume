import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { DEMO_CREDENTIALS } from '../../data/demoUsers';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  User,
} from 'lucide-react';

export const LoginPage = () => {
  const { login, quickDemoLogin, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || '/account';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message || 'Authentication error.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await quickDemoLogin();
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleDemo = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message);
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
          Welcome Back
        </h1>
        <p className="text-xs text-aura-grey mt-1">
          Sign in to access your curated private reserve, orders, and saved addresses.
        </p>
      </div>

      {/* 1-Click Demo Login Box */}
      <div className="mb-6 p-4 bg-aura-cream/70 border border-aura-gold/40 rounded-2xl shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-aura-espresso flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-aura-gold" />
            <span>Client Evaluation Credentials</span>
          </span>
          <span className="text-[10px] bg-aura-gold text-white font-bold px-1.5 py-0.5 rounded">
            Demo
          </span>
        </div>
        <p className="text-[11px] text-aura-grey mb-3">
          Click below to instantly authenticate using the seeded VIP evaluator account:
        </p>
        <button
          type="button"
          onClick={handleQuickLogin}
          disabled={loading}
          className="w-full py-2.5 bg-aura-gold hover:bg-aura-gold-light text-aura-espresso text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center justify-center space-x-1"
        >
          <span>1-Click VIP Demo Login</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </button>
      </div>

      {/* Main Login Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-luxury space-y-6">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elena.vance@aurafragrance.demo"
                className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso">
                Password
              </label>
              <Link to="/forgot-password" className="text-[11px] text-aura-gold hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center space-x-2 cursor-pointer text-aura-grey">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded text-aura-gold focus:ring-aura-gold"
              />
              <span>Remember this session</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
          </button>
        </form>

        <div className="relative flex items-center justify-center border-t border-aura-beige pt-4">
          <span className="bg-white px-3 text-[11px] text-aura-grey uppercase tracking-wider">
            Or continue with
          </span>
        </div>

        {/* Google Demo Login Button */}
        <button
          type="button"
          onClick={handleGoogleDemo}
          disabled={loading}
          className="w-full py-2.5 border border-aura-beige hover:border-aura-espresso/40 bg-white text-aura-espresso text-xs font-medium rounded-xl transition-all flex items-center justify-center space-x-2 shadow-xs"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google (Simulated Demo)</span>
        </button>

        <p className="text-center text-xs text-aura-grey">
          New to AURA?{' '}
          <Link to="/signup" className="font-semibold text-aura-espresso hover:text-aura-gold underline">
            Create an Account
          </Link>
        </p>
      </div>

      <p className="text-[10px] text-center text-aura-grey mt-6 flex items-center justify-center space-x-1">
        <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
        <span>Frontend state simulated authentication • Safe client prototype</span>
      </p>
    </div>
  );
};
