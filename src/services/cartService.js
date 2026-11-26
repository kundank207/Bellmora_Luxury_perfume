const CART_STORAGE_KEY = 'aura_demo_shopping_cart';
const COUPON_STORAGE_KEY = 'aura_demo_active_coupon';

export const cartService = {
  getCart() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  getActiveCoupon() {
    try {
      const raw = localStorage.getItem(COUPON_STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  setActiveCoupon(coupon) {
    if (coupon) {
      localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
    } else {
      localStorage.removeItem(COUPON_STORAGE_KEY);
    }
    this.notifyUpdate();
  },

  saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    this.notifyUpdate();
  },

  notifyUpdate() {
    window.dispatchEvent(new CustomEvent('aura-cart-updated', {
      detail: {
        cart: this.getCart(),
        totals: this.getTotals()
      }
    }));
  },

  addToCart(product, selectedSize = null, quantity = 1) {
    const cart = this.getCart();
    
    // Determine size and price
    const sizeObj = selectedSize || (product.sizes && product.sizes[0]) || { size: '50ml', price: product.price };
    const cartItemKey = `${product.id}_${sizeObj.size}`;

    const existingIndex = cart.findIndex((item) => item.key === cartItemKey);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        key: cartItemKey,
        id: product.id,
        slug: product.slug,
        name: product.name,
        subtitle: product.subtitle,
        fragranceFamily: product.fragranceFamily,
        size: sizeObj.size,
        price: sizeObj.price,
        comparePrice: sizeObj.comparePrice || product.comparePrice,
        image: (product.images && product.images[0]) || '',
        collectionTitle: product.collectionTitle,
        quantity: Math.max(1, quantity),
      });
    }

    this.saveCart(cart);
    return cart;
  },

  updateQuantity(key, newQuantity) {
    let cart = this.getCart();
    if (newQuantity <= 0) {
      cart = cart.filter((item) => item.key !== key);
    } else {
      cart = cart.map((item) => (item.key === key ? { ...item, quantity: newQuantity } : item));
    }
    this.saveCart(cart);
    return cart;
  },

  updateItemSize(oldKey, product, newSizeObj) {
    let cart = this.getCart();
    const item = cart.find((i) => i.key === oldKey);
    if (!item) return cart;

    const newKey = `${product.id}_${newSizeObj.size}`;
    
    // Check if newKey already exists
    const existingWithNewKey = cart.find((i) => i.key === newKey && i.key !== oldKey);
    if (existingWithNewKey) {
      existingWithNewKey.quantity += item.quantity;
      cart = cart.filter((i) => i.key !== oldKey);
    } else {
      item.key = newKey;
      item.size = newSizeObj.size;
      item.price = newSizeObj.price;
      item.comparePrice = newSizeObj.comparePrice;
    }

    this.saveCart(cart);
    return cart;
  },

  removeItem(key) {
    const cart = this.getCart().filter((item) => item.key !== key);
    this.saveCart(cart);
    return cart;
  },

  clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(COUPON_STORAGE_KEY);
    this.notifyUpdate();
  },

  getTotals() {
    const cart = this.getCart();
    if (!Array.isArray(cart)) {
      return {
        subtotal: 0,
        discount: 0,
        shipping: 0,
        total: 0,
        totalItems: 0,
        coupon: null,
        isFreeShippingQualified: false,
        amountNeededForFreeShipping: 2500,
      };
    }

    const subtotal = cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
    const totalItems = cart.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0);

    const coupon = this.getActiveCoupon();
    let discount = 0;
    if (coupon) {
      if (coupon.discountAmount) {
        discount = Number(coupon.discountAmount) || 0;
      } else if (coupon.discountPercent) {
        discount = Math.round((subtotal * (Number(coupon.discountPercent) || 0)) / 100);
      }
    }

    let shipping = 0;
    if (subtotal > 0 && subtotal < 2500 && !(coupon && coupon.freeShipping)) {
      shipping = 199;
    }

    const total = Math.max(0, subtotal - discount + shipping);

    return {
      subtotal,
      discount,
      shipping,
      total,
      totalItems,
      coupon,
      isFreeShippingQualified: subtotal >= 2500 || (coupon && coupon.freeShipping),
      amountNeededForFreeShipping: Math.max(0, 2500 - subtotal),
    };
  }
};
