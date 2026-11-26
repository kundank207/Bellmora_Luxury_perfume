export const initialDemoOrders = [
  {
    id: 'BLM-89241',
    date: '2026-11-18T10:30:00Z',
    customer: {
      name: 'Elena Vance',
      email: 'elena.vance@bellmoraluxury.demo',
      phone: '+91 98765 43210',
    },
    items: [
      {
        id: 'prod_01',
        name: 'Bellmora Santal Ethereal',
        size: '100ml',
        price: 5499,
        quantity: 1,
        image: '/images/products/unisex/bellmora-santal-ethereal.jpg',
        fragranceFamily: 'Woody'
      },
      {
        id: 'prod_03',
        name: 'Bellmora Soleil Doré',
        size: '50ml',
        price: 3199,
        quantity: 1,
        image: '/images/products/women/bellmora-soleil-dore.jpg',
        fragranceFamily: 'Floral'
      }
    ],
    pricing: {
      subtotal: 8698,
      discount: 869.8,
      couponApplied: 'BELLMORA10',
      shipping: 0,
      total: 7828.2
    },
    shippingAddress: {
      name: 'Elena Vance',
      phone: '+91 98765 43210',
      flat: 'Penthouse 14B, Royal Palms Residences',
      street: 'Altamount Road, Cumballa Hill',
      landmark: 'Opposite Ambani Heritage Garden',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400026',
      type: 'Home'
    },
    deliveryMethod: 'Express White-Glove Delivery (Sample Demo)',
    paymentMethod: 'UPI Instant (Simulated Demo)',
    paymentStatus: 'Simulated Paid',
    isDemo: true,
    status: 'Delivered', // 'Order Confirmed' | 'Processing' | 'Packed' | 'Shipped' | 'Out for Delivery' | 'Delivered'
    courier: 'BELLMORA Concierge Express (Sample)',
    trackingNumber: 'BLM-EXP-992014-IN',
    estimatedDelivery: 'Delivered on Nov 21, 2026',
    timeline: [
      { stage: 'Order Confirmed', time: '18 Nov 2026, 10:30 AM', completed: true, detail: 'Order verified and sent to master perfumery packaging' },
      { stage: 'Processing', time: '18 Nov 2026, 02:15 PM', completed: true, detail: 'Flacons inspected and batch serialized' },
      { stage: 'Packed', time: '19 Nov 2026, 11:00 AM', completed: true, detail: 'Sealed in velvet-lined signature BELLMORA presentation box' },
      { stage: 'Shipped', time: '19 Nov 2026, 05:40 PM', completed: true, detail: 'Dispatched via premium temperature-controlled air transit' },
      { stage: 'Out for Delivery', time: '21 Nov 2026, 09:10 AM', completed: true, detail: 'Out for white-glove courier delivery to residence' },
      { stage: 'Delivered', time: '21 Nov 2026, 02:45 PM', completed: true, detail: 'Safely handed over to recipient' }
    ]
  },
  {
    id: 'BLM-92318',
    date: '2026-11-23T14:15:00Z',
    customer: {
      name: 'Elena Vance',
      email: 'elena.vance@bellmoraluxury.demo',
      phone: '+91 98765 43210',
    },
    items: [
      {
        id: 'prod_02',
        name: 'Bellmora Velvet Rose',
        size: '50ml',
        price: 4299,
        quantity: 1,
        image: '/images/products/women/bellmora-velvet-bloom.jpg',
        fragranceFamily: 'Oud'
      }
    ],
    pricing: {
      subtotal: 4299,
      discount: 0,
      couponApplied: null,
      shipping: 0,
      total: 4299
    },
    shippingAddress: {
      name: 'Elena Vance',
      phone: '+91 98765 43210',
      flat: 'Penthouse 14B, Royal Palms Residences',
      street: 'Altamount Road, Cumballa Hill',
      landmark: 'Opposite Ambani Heritage Garden',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400026',
      type: 'Home'
    },
    deliveryMethod: 'Standard Luxury Courier (Sample Demo)',
    paymentMethod: 'Cash on Delivery (Simulated Demo)',
    paymentStatus: 'Pending Verification upon Delivery (Demo)',
    isDemo: true,
    status: 'Shipped',
    courier: 'BlueDart Luxury Express (Sample)',
    trackingNumber: 'BLM-BLU-441209-IN',
    estimatedDelivery: 'Estimated by Nov 27, 2026',
    timeline: [
      { stage: 'Order Confirmed', time: '23 Nov 2026, 02:15 PM', completed: true, detail: 'Order received and logged in laboratory queue' },
      { stage: 'Processing', time: '23 Nov 2026, 04:30 PM', completed: true, detail: 'Fragrance batch hand-bottled & sealed' },
      { stage: 'Packed', time: '24 Nov 2026, 10:00 AM', completed: true, detail: 'Secured with protective gilded ribbon and wax seal' },
      { stage: 'Shipped', time: '24 Nov 2026, 06:15 PM', completed: true, detail: 'In transit via regional express hub' },
      { stage: 'Out for Delivery', time: 'Pending arrival at destination hub', completed: false, detail: 'Courier will notify via SMS' },
      { stage: 'Delivered', time: 'Estimated Nov 27', completed: false, detail: 'Signature delivery' }
    ]
  },
  {
    id: 'BLM-95104',
    date: '2026-11-25T09:00:00Z',
    customer: {
      name: 'Elena Vance',
      email: 'elena.vance@bellmoraluxury.demo',
      phone: '+91 98765 43210',
    },
    items: [
      {
        id: 'prod_23',
        name: 'Bellmora Discovery Collection',
        size: '5 x 10ml Set',
        price: 3999,
        quantity: 1,
        image: '/images/gift-sets/bellmora-prestige-coffret.jpg',
        fragranceFamily: 'Woody'
      }
    ],
    pricing: {
      subtotal: 3999,
      discount: 399.9,
      couponApplied: 'BELLMORA10',
      shipping: 0,
      total: 3599.1
    },
    shippingAddress: {
      name: 'Elena Vance (Studio)',
      phone: '+91 98765 43211',
      flat: 'Suite 402, Signature Atrium',
      street: 'Bandra-Kurla Complex (BKC)',
      landmark: 'Near One International Centre',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400051',
      type: 'Work'
    },
    deliveryMethod: 'Express White-Glove Delivery (Sample Demo)',
    paymentMethod: 'Prepaid NetBanking (Simulated Demo)',
    paymentStatus: 'Simulated Paid',
    isDemo: true,
    status: 'Order Confirmed',
    courier: 'BELLMORA Concierge Express (Sample)',
    trackingNumber: 'BLM-EXP-110294-IN',
    estimatedDelivery: 'Estimated by Nov 28, 2026',
    timeline: [
      { stage: 'Order Confirmed', time: '25 Nov 2026, 09:00 AM', completed: true, detail: 'Demo order successfully recorded' },
      { stage: 'Processing', time: 'Expected 25 Nov, 03:00 PM', completed: false, detail: 'Scheduled for presentation boxing' },
      { stage: 'Packed', time: 'Expected 26 Nov', completed: false, detail: 'Gift ribbon & complimentary scent card' },
      { stage: 'Shipped', time: 'Expected 26 Nov', completed: false, detail: 'Carrier dispatch' },
      { stage: 'Out for Delivery', time: 'Expected 28 Nov', completed: false, detail: 'Final leg delivery' },
      { stage: 'Delivered', time: 'Expected 28 Nov', completed: false, detail: 'Receipt confirmation' }
    ]
  }
];
