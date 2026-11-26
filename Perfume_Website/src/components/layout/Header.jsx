import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { SearchOverlay } from './SearchOverlay';
import { MiniCartDrawer } from '../cart/MiniCartDrawer';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  LogOut,
  Package,
  Shield,
  Compass,
} from 'lucide-react';

export const Header = () => {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopMegaOpen, setShopMegaOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const closeAll = () => {
    setMobileMenuOpen(false);
    setShopMegaOpen(false);
    setAccountMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }) =>
    `text-xs tracking-widest uppercase transition-all duration-200 py-2 border-b-2 font-medium ${
      isActive
        ? 'border-aura-gold text-aura-gold font-semibold'
        : 'border-transparent text-aura-espresso hover:text-aura-gold'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-aura-ivory/95 backdrop-blur-md shadow-sm border-b border-aura-beige'
            : 'bg-aura-ivory border-b border-aura-beige/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-aura-espresso hover:text-aura-gold transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
              <Link to="/" onClick={closeAll} className="group text-center lg:text-left">
                <span className="font-cinzel text-2xl sm:text-3xl font-medium tracking-[0.28em] text-aura-espresso block group-hover:text-aura-gold transition-colors">
                  AURA
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-aura-grey block font-light">
                  Haute Parfumerie
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <NavLink to="/" onClick={closeAll} className={navLinkClasses}>
                Home
              </NavLink>

              {/* Shop with Mega Menu dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShopMegaOpen(true)}
                onMouseLeave={() => setShopMegaOpen(false)}
              >
                <NavLink
                  to="/shop"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    `text-xs tracking-widest uppercase transition-all duration-200 py-2 border-b-2 font-medium flex items-center space-x-1 ${
                      isActive
                        ? 'border-aura-gold text-aura-gold font-semibold'
                        : 'border-transparent text-aura-espresso hover:text-aura-gold'
                    }`
                  }
                >
                  <span>Shop</span>
                  <ChevronDown className="w-3 h-3 ml-0.5" />
                </NavLink>

                {/* Mega Menu Dropdown */}
                {shopMegaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-aura-beige p-6 grid grid-cols-3 gap-6 animate-fadeIn">
                    <div>
                      <h4 className="font-cinzel text-xs tracking-wider text-aura-espresso font-semibold mb-3 border-b border-aura-beige pb-1">
                        By Category
                      </h4>
                      <ul className="space-y-2 text-xs text-aura-grey">
                        <li>
                          <Link to="/shop" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Shop All Fragrances
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/men" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Men's Collection
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/women" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Women's Collection
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/unisex" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Unisex Signature
                          </Link>
                        </li>
                        <li>
                          <Link to="/collection/new-arrivals" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            New Arrivals
                          </Link>
                        </li>
                        <li>
                          <Link to="/collection/bestsellers" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Bestselling Creations
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-cinzel text-xs tracking-wider text-aura-espresso font-semibold mb-3 border-b border-aura-beige pb-1">
                        Collections
                      </h4>
                      <ul className="space-y-2 text-xs text-aura-grey">
                        <li>
                          <Link to="/collection/original-collection" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            AURA Original Formulations
                          </Link>
                        </li>
                        <li>
                          <Link to="/collection/inspired-collection" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Inspired Fragrance Interpretations
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/gift-sets" onClick={closeAll} className="hover:text-aura-gold block py-0.5">
                            Prestige Gift Sets & Coffrets
                          </Link>
                        </li>
                        <li className="pt-2 border-t border-aura-beige/50">
                          <Link to="/fragrance-finder" onClick={closeAll} className="text-aura-gold font-medium hover:underline flex items-center space-x-1">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Fragrance Finder Quiz</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-aura-cream/50 rounded-xl p-4 border border-aura-beige flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-aura-gold font-semibold block mb-1">
                          Featured Creation
                        </span>
                        <h5 className="font-serif text-base text-aura-espresso font-medium">
                          Santal Ethereal
                        </h5>
                        <p className="text-[11px] text-aura-grey line-clamp-2 mt-1">
                          Creamy Australian sandalwood, iris, and smoky amber papyrus.
                        </p>
                      </div>
                      <Link
                        to="/product/santal-ethereal"
                        onClick={closeAll}
                        className="mt-3 inline-block text-xs font-semibold text-aura-espresso underline hover:text-aura-gold"
                      >
                        Discover Fragrance →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/category/men" onClick={closeAll} className={navLinkClasses}>
                Men
              </NavLink>
              <NavLink to="/category/women" onClick={closeAll} className={navLinkClasses}>
                Women
              </NavLink>
              <NavLink to="/category/unisex" onClick={closeAll} className={navLinkClasses}>
                Unisex
              </NavLink>
              <NavLink to="/collection/original-collection" onClick={closeAll} className={navLinkClasses}>
                Originals
              </NavLink>
              <NavLink to="/collection/inspired-collection" onClick={closeAll} className={navLinkClasses}>
                Inspired
              </NavLink>
              <NavLink to="/category/gift-sets" onClick={closeAll} className={navLinkClasses}>
                Gift Sets
              </NavLink>
              <NavLink to="/our-story" onClick={closeAll} className={navLinkClasses}>
                Our Story
              </NavLink>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-aura-espresso hover:text-aura-gold rounded-full hover:bg-aura-cream transition-colors"
                aria-label="Search Fragrances"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAccountMenuOpen(true)}
                onMouseLeave={() => setAccountMenuOpen(false)}
              >
                <button
                  onClick={() => {
                    if (isAuthenticated) {
                      navigate('/account');
                    } else {
                      navigate('/login');
                    }
                  }}
                  className="p-2 text-aura-espresso hover:text-aura-gold rounded-full hover:bg-aura-cream transition-colors flex items-center space-x-1"
                  aria-label="Customer Account"
                >
                  <User className="w-5 h-5" />
                  {isAuthenticated && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-2 right-2 border-2 border-white" />
                  )}
                </button>

                {accountMenuOpen && (
                  <div className="absolute right-0 top-full w-56 bg-white rounded-xl shadow-xl border border-aura-beige p-2 text-xs animate-fadeIn z-50">
                    {isAuthenticated ? (
                      <>
                        <div className="px-3 py-2 border-b border-aura-beige mb-1">
                          <p className="font-semibold text-aura-espresso truncate">{currentUser.fullName}</p>
                          <p className="text-[11px] text-aura-grey truncate">{currentUser.email}</p>
                        </div>
                        <Link
                          to="/account"
                          onClick={closeAll}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-aura-ivory text-aura-espresso"
                        >
                          <User className="w-3.5 h-3.5 text-aura-gold" />
                          <span>My Account</span>
                        </Link>
                        <Link
                          to="/account/orders"
                          onClick={closeAll}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-aura-ivory text-aura-espresso"
                        >
                          <Package className="w-3.5 h-3.5 text-aura-gold" />
                          <span>My Orders</span>
                        </Link>
                        <Link
                          to="/account/security"
                          onClick={closeAll}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-aura-ivory text-aura-espresso"
                        >
                          <Shield className="w-3.5 h-3.5 text-aura-gold" />
                          <span>Security & Settings</span>
                        </Link>
                        <Link
                          to="/track-order"
                          onClick={closeAll}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-aura-ivory text-aura-espresso"
                        >
                          <Compass className="w-3.5 h-3.5 text-aura-gold" />
                          <span>Track Demo Order</span>
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            closeAll();
                          }}
                          className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 border-t border-aura-beige mt-1"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="px-3 py-2 border-b border-aura-beige mb-1">
                          <p className="font-semibold text-aura-espresso">Welcome to AURA</p>
                          <p className="text-[11px] text-aura-grey">Explore luxury bespoke scents</p>
                        </div>
                        <Link
                          to="/login"
                          onClick={closeAll}
                          className="block w-full py-2 px-3 text-center bg-aura-espresso text-white rounded-lg font-medium hover:bg-aura-espresso-light mb-1.5"
                        >
                          Log In
                        </Link>
                        <Link
                          to="/signup"
                          onClick={closeAll}
                          className="block w-full py-2 px-3 text-center border border-aura-espresso text-aura-espresso rounded-lg font-medium hover:bg-aura-cream"
                        >
                          Create Account
                        </Link>
                        <Link
                          to="/track-order"
                          onClick={closeAll}
                          className="block text-center text-[11px] text-aura-grey hover:text-aura-gold pt-2"
                        >
                          Track a Demo Order
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist Icon with badge */}
              <Link
                to="/wishlist"
                onClick={closeAll}
                className="p-2 text-aura-espresso hover:text-aura-gold rounded-full hover:bg-aura-cream transition-colors relative"
                aria-label="Saved Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-aura-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag / Cart Drawer toggle with badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-aura-espresso hover:text-aura-gold rounded-full hover:bg-aura-cream transition-colors relative"
                aria-label="Shopping Cart Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-aura-espresso text-aura-ivory text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-aura-ivory border-t border-aura-beige px-6 pt-4 pb-8 space-y-4 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium">
              <Link to="/" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Home
              </Link>
              <Link to="/shop" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Shop All Fragrances
              </Link>
              <Link to="/category/men" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Men's Collection
              </Link>
              <Link to="/category/women" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Women's Collection
              </Link>
              <Link to="/category/unisex" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Unisex Signature
              </Link>
              <Link to="/collection/original-collection" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                AURA Original Parfumerie
              </Link>
              <Link to="/collection/inspired-collection" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Inspired Fragrance Collection
              </Link>
              <Link to="/category/gift-sets" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Gift Sets & Coffrets
              </Link>
              <Link to="/fragrance-finder" onClick={closeAll} className="py-2 border-b border-aura-beige/60 text-aura-gold flex items-center space-x-1.5">
                <Compass className="w-4 h-4" />
                <span>Fragrance Finder Quiz</span>
              </Link>
              <Link to="/our-story" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Our Story
              </Link>
              <Link to="/track-order" onClick={closeAll} className="py-2 border-b border-aura-beige/60">
                Track Order
              </Link>
            </div>

            <div className="pt-4 flex flex-col space-y-2">
              {isAuthenticated ? (
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-aura-espresso font-semibold">{currentUser.fullName}</span>
                  <button
                    onClick={() => {
                      logout();
                      closeAll();
                    }}
                    className="text-xs text-red-600 underline"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    onClick={closeAll}
                    className="py-2 text-center text-xs font-semibold bg-aura-espresso text-white rounded-lg"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeAll}
                    className="py-2 text-center text-xs font-semibold border border-aura-espresso text-aura-espresso rounded-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Global Mini Cart Drawer */}
      <MiniCartDrawer />
    </>
  );
};
