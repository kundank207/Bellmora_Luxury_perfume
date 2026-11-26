import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { DemoProvider } from './context/DemoContext';
import { Layout } from './components/layout/Layout';
import { ProtectedRoute } from './routes/ProtectedRoute';

// Public & Shop Pages
import { HomePage } from './pages/Home/HomePage';
import { ShopPage } from './pages/Shop/ShopPage';
import { FragranceFinderPage } from './pages/Shop/FragranceFinderPage';
import { ProductDetailsPage } from './pages/Product/ProductDetailsPage';

// Shopping Journey Pages
import { WishlistPage } from './pages/Shopping/WishlistPage';
import { CartPage } from './pages/Shopping/CartPage';
import { CheckoutPage } from './pages/Shopping/CheckoutPage';
import { OrderConfirmationPage } from './pages/Shopping/OrderConfirmationPage';
import { TrackOrderPage } from './pages/Tracking/TrackOrderPage';

// Authentication Pages
import { LoginPage } from './pages/Auth/LoginPage';
import { SignupPage } from './pages/Auth/SignupPage';
import { ForgotPasswordPage } from './pages/Auth/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/Auth/ResetPasswordPage';

// Customer Account Pages
import { AccountLayout } from './pages/Account/AccountLayout';
import { AccountDashboardPage } from './pages/Account/AccountDashboardPage';
import { AccountProfilePage } from './pages/Account/AccountProfilePage';
import { AccountOrdersPage } from './pages/Account/AccountOrdersPage';
import { AccountOrderDetailsPage } from './pages/Account/AccountOrderDetailsPage';
import { AccountAddressesPage } from './pages/Account/AccountAddressesPage';
import { AccountSecurityPage } from './pages/Account/AccountSecurityPage';

// Static & Policy Pages
import { OurStoryPage } from './pages/Static/OurStoryPage';
import { ContactPage } from './pages/Static/ContactPage';
import { FAQPage } from './pages/Static/FAQPage';
import { ShippingPolicyPage } from './pages/Static/ShippingPolicyPage';
import { ReturnsPolicyPage } from './pages/Static/ReturnsPolicyPage';
import { PrivacyPolicyPage } from './pages/Static/PrivacyPolicyPage';
import { TermsPage } from './pages/Static/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <DemoProvider>
              <Layout>
                <Routes>
                  {/* Public Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/search" element={<ShopPage />} />
                  <Route path="/category/:category" element={<ShopPage />} />
                  <Route path="/collection/:collection" element={<ShopPage />} />
                  <Route path="/fragrance-finder" element={<FragranceFinderPage />} />
                  <Route path="/product/:slug" element={<ProductDetailsPage />} />

                  {/* Institutional / Static Pages */}
                  <Route path="/our-story" element={<OurStoryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
                  <Route path="/returns-policy" element={<ReturnsPolicyPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />

                  {/* Shopping Pages */}
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                  <Route path="/track-order" element={<TrackOrderPage />} />

                  {/* Auth Pages */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/reset-password" element={<ResetPasswordPage />} />

                  {/* Protected Customer Account Routes */}
                  <Route
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <AccountLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<AccountDashboardPage />} />
                    <Route path="profile" element={<AccountProfilePage />} />
                    <Route path="orders" element={<AccountOrdersPage />} />
                    <Route path="orders/:id" element={<AccountOrderDetailsPage />} />
                    <Route path="addresses" element={<AccountAddressesPage />} />
                    <Route path="wishlist" element={<Navigate to="/wishlist" replace />} />
                    <Route path="security" element={<AccountSecurityPage />} />
                  </Route>

                  {/* Catch-all redirect to Home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            </DemoProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
