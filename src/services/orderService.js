import { initialDemoOrders } from '../data/demoOrders';
import { cartService } from './cartService';

const ORDERS_STORAGE_KEY = 'aura_demo_orders_store';

const getOrdersStore = () => {
  const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      // fallback
    }
  }
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(initialDemoOrders));
  return [...initialDemoOrders];
};

export const orderService = {
  async getAllOrders() {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return getOrdersStore();
  },

  async getOrderById(orderId) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const orders = getOrdersStore();
    const cleanId = orderId ? orderId.trim().toUpperCase() : '';
    const order = orders.find((o) => o.id.toUpperCase() === cleanId);
    if (!order) throw new Error(`Demo order "${orderId}" not found in prototype registry.`);
    return order;
  },

  async getUserOrders(email) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const orders = getOrdersStore();
    if (!email) return orders;
    const cleanEmail = email.toLowerCase().trim();
    return orders.filter((o) => o.customer?.email?.toLowerCase() === cleanEmail);
  },

  async createDemoOrder(orderPayload) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Generate readable demo order reference
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const orderId = `AUR-${randomDigits}`;

    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      customer: orderPayload.customer,
      items: orderPayload.items,
      pricing: orderPayload.pricing,
      shippingAddress: orderPayload.shippingAddress,
      deliveryMethod: orderPayload.deliveryMethod || 'Standard Luxury White-Glove (Sample)',
      paymentMethod: orderPayload.paymentMethod || 'Simulated Payment (Demo Only)',
      paymentStatus: 'Simulated Demo Approved',
      isDemo: true,
      status: 'Order Confirmed',
      courier: 'AURA Concierge Delivery (Sample)',
      trackingNumber: `AURA-EXP-${randomDigits}-IN`,
      estimatedDelivery: 'Estimated within 3-5 business days (Demo)',
      timeline: [
        {
          stage: 'Order Confirmed',
          time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
          completed: true,
          detail: 'Demo order recorded in presentation test environment'
        },
        { stage: 'Processing', time: 'Pending fulfillment', completed: false, detail: 'Handcrafted bottling & serialized quality check' },
        { stage: 'Packed', time: 'Pending packaging', completed: false, detail: 'Signature gilded packaging & seal' },
        { stage: 'Shipped', time: 'Pending dispatch', completed: false, detail: 'Carrier collection from atelier' },
        { stage: 'Out for Delivery', time: 'Pending dispatch', completed: false, detail: 'White-glove dispatch to destination' },
        { stage: 'Delivered', time: 'Pending completion', completed: false, detail: 'Demo recipient signature' }
      ]
    };

    const orders = getOrdersStore();
    orders.unshift(newOrder);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

    // Clear cart upon successful demo order placement
    cartService.clearCart();

    window.dispatchEvent(new CustomEvent('aura-order-placed', { detail: newOrder }));
    return newOrder;
  },

  async updateOrderStatus(orderId, newStatus) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const orders = getOrdersStore();
    const order = orders.find((o) => o.id === orderId);
    if (!order) throw new Error('Order not found');

    const stages = ['Order Confirmed', 'Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
    const targetIdx = stages.indexOf(newStatus);

    order.status = newStatus;
    order.timeline = stages.map((stageName, idx) => ({
      stage: stageName,
      time: idx <= targetIdx ? (idx === targetIdx ? 'Just Now (Demo Test)' : 'Completed Stage') : 'Pending',
      completed: idx <= targetIdx,
      detail: `Demo stage progression updated to ${stageName}`
    }));

    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent('aura-orders-updated', { detail: orders }));
    return order;
  },

  resetDemoOrders() {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(initialDemoOrders));
    window.dispatchEvent(new CustomEvent('aura-orders-updated', { detail: initialDemoOrders }));
    return initialDemoOrders;
  }
};
