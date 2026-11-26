import React, { useState, useEffect } from 'react';
import { useDemo } from '../../context/DemoContext';
import { useAuth } from '../../context/AuthContext';
import { orderService } from '../../services/orderService';
import { demoUsers, DEMO_CREDENTIALS } from '../../data/demoUsers';
import { X, RefreshCw, Truck, UserCheck, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export const DemoPresentationModal = () => {
  const { isDemoBarOpen, setIsDemoBarOpen, resetAllDemoData, showDemoNotice } = useDemo();
  const { quickDemoLogin, currentUser, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [selectedStage, setSelectedStage] = useState('Shipped');
  const [updating, setUpdating] = useState(false);

  const stages = ['Order Confirmed', 'Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];

  useEffect(() => {
    if (isDemoBarOpen) {
      orderService.getAllOrders().then((res) => {
        setOrders(res);
        if (res.length > 0 && !selectedOrderId) {
          setSelectedOrderId(res[0].id);
          setSelectedStage(res[0].status);
        }
      });
    }
  }, [isDemoBarOpen]);

  if (!isDemoBarOpen) return null;

  const handleStageChange = async () => {
    if (!selectedOrderId) return;
    setUpdating(true);
    try {
      await orderService.updateOrderStatus(selectedOrderId, selectedStage);
      const updated = await orderService.getAllOrders();
      setOrders(updated);
      showDemoNotice(`Demo order ${selectedOrderId} stage transitioned to "${selectedStage}"`);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aura-espresso/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-aura-ivory border border-aura-gold/40 rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-aura-beige pb-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-aura-gold/20 text-aura-gold rounded-md">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-medium text-aura-espresso">Presentation Demo Controls</h3>
              <p className="text-xs text-aura-grey">For evaluator review and interactive journey demonstration</p>
            </div>
          </div>
          <button
            onClick={() => setIsDemoBarOpen(false)}
            className="p-1.5 text-aura-grey hover:text-aura-espresso rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Warning banner */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs flex items-start space-x-2 mb-6">
          <ShieldAlert className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
          <span>
            <strong>Evaluation Mode Only:</strong> All actions here manipulate frontend client state and browser storage.
            No live banking, backend database, or production services are contacted.
          </span>
        </div>

        {/* Section 1: Quick Auth Demo */}
        <div className="mb-6 bg-white p-4 rounded-lg border border-aura-beige">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-aura-espresso mb-3 flex items-center">
            <UserCheck className="w-4 h-4 mr-2 text-aura-gold" /> Demo Customer Account
          </h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-aura-grey">
            <div>
              <p>Email: <span className="font-mono font-medium text-aura-espresso">{DEMO_CREDENTIALS.email}</span></p>
              <p>Password: <span className="font-mono font-medium text-aura-espresso">{DEMO_CREDENTIALS.password}</span></p>
              <p>Status: <span className="font-medium text-aura-espresso">{currentUser ? `Logged in as ${currentUser.fullName}` : 'Guest session'}</span></p>
            </div>
            <div className="flex gap-2">
              {!currentUser ? (
                <button
                  onClick={async () => {
                    await quickDemoLogin();
                    showDemoNotice('Logged in as Elena Vance (Demo Account)');
                  }}
                  className="px-3 py-1.5 bg-aura-gold text-white text-xs font-medium rounded hover:bg-aura-gold-dark transition-colors"
                >
                  1-Click Demo Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    showDemoNotice('Logged out from demo session');
                  }}
                  className="px-3 py-1.5 border border-aura-espresso/20 text-aura-espresso text-xs font-medium rounded hover:bg-aura-cream transition-colors"
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Order Tracking Simulator */}
        <div className="mb-6 bg-white p-4 rounded-lg border border-aura-beige">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-aura-espresso mb-3 flex items-center">
            <Truck className="w-4 h-4 mr-2 text-aura-gold" /> Live Tracking Stage Simulator
          </h4>
          <p className="text-xs text-aura-grey mb-3">
            Change an active demo order status to demonstrate real-time timeline progressions on the Tracking and Account pages.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-medium text-aura-grey mb-1">Select Demo Order</label>
              <select
                value={selectedOrderId}
                onChange={(e) => {
                  setSelectedOrderId(e.target.value);
                  const matched = orders.find((o) => o.id === e.target.value);
                  if (matched) setSelectedStage(matched.status);
                }}
                className="w-full text-xs p-2 bg-aura-ivory border border-aura-beige rounded focus:outline-none focus:border-aura-gold"
              >
                {orders.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.id} — ₹{o.pricing?.total?.toLocaleString('en-IN')} ({o.status})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-aura-grey mb-1">New Fulfillment Stage</label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full text-xs p-2 bg-aura-ivory border border-aura-beige rounded focus:outline-none focus:border-aura-gold"
              >
                {stages.map((stg) => (
                  <option key={stg} value={stg}>
                    {stg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleStageChange}
            disabled={updating || !selectedOrderId}
            className="w-full py-2 bg-aura-espresso text-white text-xs font-medium rounded hover:bg-aura-espresso-light transition-colors flex items-center justify-center space-x-1"
          >
            <CheckCircle2 className="w-4 h-4 mr-1 text-aura-gold" />
            <span>{updating ? 'Updating Demo Pipeline...' : 'Apply Stage Progression'}</span>
          </button>
        </div>

        {/* Section 3: Reset Demo Storage */}
        <div className="bg-white p-4 rounded-lg border border-aura-beige flex items-center justify-between">
          <div>
            <h4 className="text-xs font-semibold uppercase text-aura-espresso">Reset Prototype Environment</h4>
            <p className="text-xs text-aura-grey">Restores original seeded orders, cart, addresses & catalog state</p>
          </div>
          <button
            onClick={() => {
              if (window.confirm('Reset all demo cart, orders, and addresses back to initial clean state?')) {
                resetAllDemoData();
              }
            }}
            className="px-3 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded transition-colors flex items-center space-x-1"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};
