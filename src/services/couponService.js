import { coupons } from '../data/coupons';

export const couponService = {
  async applyCoupon(code, subtotal) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!code || !code.trim()) {
      throw new Error('Please enter a privilege code.');
    }

    const cleanCode = code.trim().toUpperCase();
    const matched = coupons.find((c) => c.code === cleanCode);

    if (!matched) {
      throw new Error('Invalid coupon code. Try BELLMORA10 or LUXE15.');
    }

    if (subtotal < matched.minOrderAmount) {
      throw new Error(`Code ${cleanCode} requires a minimum order amount of ₹${matched.minOrderAmount.toLocaleString('en-IN')}`);
    }

    let discountAmount = 0;
    if (matched.discountPercent > 0) {
      discountAmount = Math.round((subtotal * matched.discountPercent) / 100);
    }

    return {
      success: true,
      coupon: {
        code: matched.code,
        discountPercent: matched.discountPercent,
        discountAmount,
        freeShipping: !!matched.freeShipping,
        description: matched.description
      }
    };
  },

  getAvailableCoupons() {
    return coupons;
  }
};
