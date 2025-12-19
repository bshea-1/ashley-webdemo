import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout';

// Pages
import WelcomeScreen from './pages/WelcomeScreen';
import AssociateLogin from './pages/AssociateLogin';
import AssociateDashboard from './pages/AssociateDashboard';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import CartScreen from './pages/CartScreen';
import CheckoutScreen from './pages/CheckoutScreen';
import ConfirmationScreen from './pages/ConfirmationScreen';
import CustomerLookup from './pages/CustomerLookup';
import CustomerProfile from './pages/CustomerProfile';
import MyCarts from './pages/MyCarts';
import Settings from './pages/Settings';

function App() {
  return (
    <SettingsProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/associate-login" element={<AssociateLogin />} />
              <Route path="/associate-dashboard" element={<AssociateDashboard />} />
              <Route path="/self-service" element={<ProductCatalog />} />
              <Route path="/associate-catalog" element={<ProductCatalog />} />
              <Route path="/product-detail" element={<ProductDetail />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route path="/confirmation" element={<ConfirmationScreen />} />

              <Route path="/customer-lookup" element={<CustomerLookup />} />
              <Route path="/customer/:id" element={<CustomerProfile />} />
              <Route path="/my-carts" element={<MyCarts />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </SettingsProvider>
  );
}

export default App;
