export const products = [
  {
    id: 'prod_01',
    slug: 'bellmora-santal-ethereal',
    name: 'Bellmora Santal Ethereal',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Woody',
    shortDescription: 'A sublime blend of creamy Australian sandalwood, warm cardamom, and golden amber enveloped in smoky papyrus.',
    description: 'Bellmora Santal Ethereal is an intoxicating homage to sacred woods and warm desert winds. Opening with crisp violet leaf and sparkling green cardamom, it seamlessly unfolds into an opulent heart of iris and cedarwood before resting upon a warm, hypnotic base of Australian sandalwood, leather, and sensual cashmeran.',
    price: 3499,
    comparePrice: 4299,
    sizes: [
      { size: '50ml', price: 3499, comparePrice: 4299 },
      { size: '100ml', price: 5499, comparePrice: 6499 },
      { size: 'Sample 10ml', price: 999, comparePrice: 1299 }
    ],
    notes: {
      top: ['Cardamom', 'Violet Leaf', 'Italian Bergamot'],
      heart: ['Tuscan Iris', 'Papyrus', 'Atlas Cedar'],
      base: ['Australian Sandalwood', 'Amber Resins', 'Cashmere Wood', 'White Leather']
    },
    images: [
      '/images/products/unisex/bellmora-santal-ethereal.jpg',
      '/images/editorial/bellmora-editorial-landscape-1.jpg'
    ],
    stock: 24,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Date Night', 'Everyday', 'Office'],
    seasons: ['Autumn', 'Winter', 'Spring'],
    relatedIds: ['prod_02', 'prod_05', 'prod_07', 'prod_12']
  },
  {
    id: 'prod_02',
    slug: 'bellmora-velvet-rose',
    name: 'Bellmora Velvet Rose',
    subtitle: 'Pure Parfum Elixir',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Aristocratic Damascus rose petals wrapped in warm crimson saffron, smoky benzoin, and golden amber.',
    description: 'An evocative olfactory masterpiece capturing midnight in a royal garden. Bellmora Velvet Rose wraps precious petals in rich velvety ambers and warm benzoin drops, leaving an unmistakable trail of supreme sophistication.',
    price: 4299,
    comparePrice: 5199,
    sizes: [
      { size: '50ml', price: 4299, comparePrice: 5199 },
      { size: '100ml', price: 6899, comparePrice: 7999 }
    ],
    notes: {
      top: ['Kashmiri Saffron', 'Wild Raspberry', 'Incense Mist'],
      heart: ['Damascus Rose', 'Turkish Rose Absolute', 'Labdanum'],
      base: ['Ambergris Accord', 'Benzoin Siam', 'Smoked Vetiver', 'Vanilla Resin']
    },
    images: [
      '/images/products/women/bellmora-velvet-bloom.jpg',
      '/images/editorial/bellmora-editorial-landscape-2.jpg'
    ],
    stock: 14,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '14+ Hours',
    sillage: 'Intense & Enveloping',
    intensity: 'Intense',
    occasions: ['Wedding', 'Party', 'Date Night'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_01', 'prod_03', 'prod_06', 'prod_15']
  },
  {
    id: 'prod_03',
    slug: 'bellmora-soleil-dore',
    name: 'Bellmora Soleil Doré',
    subtitle: 'Eau de Parfum Lumière',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Golden morning sunlight breaking over blooming Grasse jasmine fields, kissed by radiant orange blossom.',
    description: 'Bathed in warm golden brilliance, Bellmora Soleil Doré sparkles with dewy neroli, white magnolia, and hand-picked May roses. Creamy vanilla orchid and sunlit sandalwood lend this floral creation an air of effortless luxury.',
    price: 3199,
    comparePrice: 3899,
    sizes: [
      { size: '50ml', price: 3199, comparePrice: 3899 },
      { size: '100ml', price: 4999, comparePrice: 5899 }
    ],
    notes: {
      top: ['Calabrian Neroli', 'Mandarin Zest', 'Morning Dew'],
      heart: ['Grasse Jasmine Sambac', 'May Rose Centifolia', 'Orange Blossom'],
      base: ['Solar Woods', 'Bourbon Vanilla Bean', 'White Silk Musk']
    },
    images: [
      '/images/products/women/bellmora-soleil-dore.jpg',
      '/images/editorial/bellmora-editorial-landscape-3.jpg'
    ],
    stock: 32,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Everyday', 'Wedding', 'Gifting'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_06', 'prod_09', 'prod_15', 'prod_20']
  },
  {
    id: 'prod_04',
    slug: 'bellmora-amber-mystique',
    name: 'Bellmora Amber Mystique',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Amber',
    shortDescription: 'Golden liquid amber infused with roasted tonka bean, pink pepper, and velvety Madagascar vanilla.',
    description: 'Bellmora Amber Mystique is an opulent tribute to regal elegance. Resinous amber fuses with delicate spice, dry cedarwood, and caramelized benzoin to produce a cocooning, rich scent that is both comforting and profoundly sophisticated.',
    price: 3699,
    comparePrice: 4499,
    sizes: [
      { size: '50ml', price: 3699, comparePrice: 4499 },
      { size: '100ml', price: 5799, comparePrice: 6799 }
    ],
    notes: {
      top: ['Pink Peppercorn', 'Bergamot Essence', 'Nutmeg'],
      heart: ['Golden Amber Resins', 'Roasted Tonka Bean', 'Cacao Pod'],
      base: ['Madagascar Vanilla', 'Atlas Cedar', 'Smoked Benzoin']
    },
    images: [
      '/images/products/unisex/bellmora-amber-mystique.jpg',
      '/images/editorial/bellmora-editorial-portrait.jpg'
    ],
    stock: 19,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Intense',
    occasions: ['Date Night', 'Party', 'Wedding'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_01', 'prod_02', 'prod_07', 'prod_17']
  },
  {
    id: 'prod_05',
    slug: 'bellmora-noir-intense',
    name: 'Bellmora Noir Intense',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Smoked birch, black pepper, and aged cedarwood enveloped in rare vetiver and dark leather.',
    description: 'A commanding presence born in shadow. Bellmora Noir Intense pairs smoky birch tar with crisp black pepper and roasted coffee accords, anchored by mineral vetiver and dark saddle leather.',
    price: 3899,
    comparePrice: 4699,
    sizes: [
      { size: '50ml', price: 3899, comparePrice: 4699 },
      { size: '100ml', price: 5999, comparePrice: 6999 }
    ],
    notes: {
      top: ['Crushed Black Pepper', 'Smoked Bergamot', 'Elemi Gum'],
      heart: ['Aged Cedarwood', 'Dark Roasted Coffee', 'Tobacco Leaf'],
      base: ['Smoked Birch Tar', 'Haitian Vetiver', 'Dark Saddle Leather']
    },
    images: [
      '/images/products/unisex/bellmora-amber-mystique.jpg',
      '/images/editorial/bellmora-editorial-landscape-1.jpg'
    ],
    stock: 21,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '14+ Hours',
    sillage: 'Commanding',
    intensity: 'Intense',
    occasions: ['Date Night', 'Party', 'Office'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_07', 'prod_10', 'prod_12', 'prod_13']
  },
  {
    id: 'prod_06',
    slug: 'bellmora-rose-elegance',
    name: 'Bellmora Rose Élégance',
    subtitle: 'Eau de Parfum Nude',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Powdery Centifolia rose combined with white suede, subtle champagne pear, and crystalline skin musk.',
    description: 'A whisper of pure refinement. Bellmora Rose Élégance captures the silky grace of noble May rose, accented with crisp conference pear and soft cashmere wraps. Like a bespoke silk shawl draped over bare shoulders.',
    price: 3399,
    comparePrice: 4099,
    sizes: [
      { size: '50ml', price: 3399, comparePrice: 4099 },
      { size: '100ml', price: 5299, comparePrice: 6299 }
    ],
    notes: {
      top: ['Crisp Pear', 'Ambrette Seed', 'White Freesia'],
      heart: ['Centifolia Rose', 'Florentine Orris', 'Mimosa Blossom'],
      base: ['White Suede', 'Skin Musk', 'Cedarwood Flakes']
    },
    images: [
      '/images/products/women/bellmora-rose-elegance.jpg',
      '/images/editorial/bellmora-editorial-landscape-2.jpg'
    ],
    stock: 22,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Intimate to Moderate',
    intensity: 'Light',
    occasions: ['Office', 'Everyday', 'Gifting'],
    seasons: ['Spring', 'Summer', 'Autumn'],
    relatedIds: ['prod_02', 'prod_03', 'prod_11', 'prod_16']
  },
  {
    id: 'prod_07',
    slug: 'bellmora-oud-royale',
    name: 'Bellmora Oud Royale',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Oud',
    shortDescription: 'Noble aged Cambodian oud, pink peppercorns, cardamom pod, and balsamic tonka resin.',
    description: 'Reflecting the prestigious stature of smoky agarwood, wild angelica root, and exotic woods. Bellmora Oud Royale is composed for commanding presence and timeless authority.',
    price: 4499,
    comparePrice: 5299,
    sizes: [
      { size: '50ml', price: 4499, comparePrice: 5299 },
      { size: '100ml', price: 6999, comparePrice: 8199 }
    ],
    notes: {
      top: ['Pink Peppercorn', 'Lemon Verbena', 'Cardamom Pod'],
      heart: ['Cedar Needles', 'Angelica Root', 'Smoky Gaiacwood'],
      base: ['Precious Cambodian Oud', 'Creamy Sandalwood', 'Crystalline Amber']
    },
    images: [
      '/images/products/unisex/bellmora-santal-ethereal.jpg',
      '/images/editorial/bellmora-editorial-portrait.jpg'
    ],
    stock: 16,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '14+ Hours',
    sillage: 'Strong',
    intensity: 'Intense',
    occasions: ['Wedding', 'Party', 'Office'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_05', 'prod_10', 'prod_12', 'prod_17']
  },
  {
    id: 'prod_08',
    slug: 'bellmora-musk-infini',
    name: 'Bellmora Musk Infini',
    subtitle: 'Eau de Parfum Pur',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Musk',
    shortDescription: 'A clean second-skin fragrance with crisp white linen, solar aldehydes, and pure botanical musk.',
    description: 'The epitome of clean minimalism and quiet luxury. Bellmora Musk Infini smells like fresh morning sun pouring through white silk curtains, washed pebbles, and soft golden cashmeran.',
    price: 2899,
    comparePrice: 3499,
    sizes: [
      { size: '50ml', price: 2899, comparePrice: 3499 },
      { size: '100ml', price: 4499, comparePrice: 5399 }
    ],
    notes: {
      top: ['Clean Aldehydes', 'White Peach', 'Linden Blossom'],
      heart: ['Lily of the Valley', 'Cotton Accord', 'Blonde Cedar'],
      base: ['White Silk Musk', 'Dry Amber', 'Ambrette Seed']
    },
    images: [
      '/images/products/unisex/bellmora-santal-ethereal.jpg',
      '/images/editorial/bellmora-editorial-landscape-3.jpg'
    ],
    stock: 27,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Subtle to Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Office'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_04', 'prod_18', 'prod_19']
  },
  {
    id: 'prod_09',
    slug: 'bellmora-jasmin-nocturne',
    name: 'Bellmora Jasmin Nocturne',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Hypnotic nocturnal jasmine blossoms blooming beneath moonlit arches, enriched with white tuberose.',
    description: 'Intoxicating, romantic, and magnetically seductive. Bellmora Jasmin Nocturne harnesses twilight-harvested night jasmine, Indian tuberose petals, and smoky golden benzoin to create an irresistible spell of pure allure.',
    price: 3699,
    comparePrice: 4499,
    sizes: [
      { size: '50ml', price: 3699, comparePrice: 4499 },
      { size: '100ml', price: 5799, comparePrice: 6799 }
    ],
    notes: {
      top: ['Green Sap', 'Bitter Almond', 'Star Anise'],
      heart: ['Night-Blooming Jasmine', 'Indian Tuberose', 'Ylang-Ylang Extra'],
      base: ['Golden Benzoin', 'Sandalwood Paste', 'Bourbon Vanilla']
    },
    images: [
      '/images/products/women/bellmora-jasmin-nocturne.jpg',
      '/images/editorial/bellmora-editorial-landscape-1.jpg'
    ],
    stock: 18,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Enveloping',
    intensity: 'Intense',
    occasions: ['Date Night', 'Party', 'Wedding'],
    seasons: ['Autumn', 'Spring', 'Winter'],
    relatedIds: ['prod_02', 'prod_03', 'prod_06', 'prod_16']
  },
  {
    id: 'prod_10',
    slug: 'bellmora-cuir-sublime',
    name: 'Bellmora Cuir Sublime',
    subtitle: 'Eau de Parfum Intense',
    brand: 'BELLMORA LUXURY',
    collectionType: 'inspired',
    collectionTitle: 'BELLMORA Inspired Interpretation',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Independent interpretation celebrating Tuscan leather, crushed wild thyme, and luscious red berries.',
    description: 'An independent artistic interpretation celebrating the timeless charisma of supple leather, herbal thyme, and sweet berries. A signature statement for the discerning modern gentleman.',
    price: 2799,
    comparePrice: 3499,
    sizes: [
      { size: '50ml', price: 2799, comparePrice: 3499 },
      { size: '100ml', price: 4299, comparePrice: 5199 }
    ],
    notes: {
      top: ['Wild Thyme', 'Kashmiri Saffron', 'Raspberry'],
      heart: ['Night Jasmine', 'Olibanum', 'Suede Accord'],
      base: ['Fine Italian Leather', 'Black Amber', 'Smoky Birch']
    },
    images: [
      '/images/products/unisex/bellmora-amber-mystique.jpg',
      '/images/editorial/bellmora-editorial-landscape-2.jpg'
    ],
    stock: 28,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '10 - 12 Hours',
    sillage: 'Strong',
    intensity: 'Intense',
    occasions: ['Office', 'Date Night', 'Party'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_05', 'prod_07', 'prod_12', 'prod_13']
  },
  {
    id: 'prod_11',
    slug: 'bellmora-iris-celeste',
    name: 'Bellmora Iris Celeste',
    subtitle: 'Eau de Parfum Lumière',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Florentine orris root softened by white violet, crisp morning pear, and silky skin musk.',
    description: 'A luminous celebration of the noble iris. Bellmora Iris Celeste blends cool orris butter with sparkling bergamot and powdery violet petals for an aura of quiet regal elegance.',
    price: 3499,
    comparePrice: 4199,
    sizes: [
      { size: '50ml', price: 3499, comparePrice: 4199 },
      { size: '100ml', price: 5499, comparePrice: 6499 }
    ],
    notes: {
      top: ['Italian Bergamot', 'Crisp Pear', 'Violet Leaf'],
      heart: ['Florentine Orris Root', 'White Violet', 'Mimosa'],
      base: ['Cashmeran', 'White Musk', 'Blonde Cedar']
    },
    images: [
      '/images/products/women/bellmora-velvet-bloom.jpg',
      '/images/editorial/bellmora-editorial-landscape-3.jpg'
    ],
    stock: 20,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Office', 'Everyday', 'Gifting'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_03', 'prod_06', 'prod_15', 'prod_16']
  },
  {
    id: 'prod_12',
    slug: 'bellmora-imperial-woods',
    name: 'Bellmora Imperial Woods',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Smoked cedar, royal sandalwood, dry vetiver, and black cardamom pod.',
    description: 'Majestic and enduring. Bellmora Imperial Woods brings together centuries-old cedar groves with smoky papyrus, rich amber, and spicy black cardamom.',
    price: 3799,
    comparePrice: 4599,
    sizes: [
      { size: '50ml', price: 3799, comparePrice: 4599 },
      { size: '100ml', price: 5899, comparePrice: 6899 }
    ],
    notes: {
      top: ['Black Cardamom', 'Grapefruit Zest', 'Elemi'],
      heart: ['Atlas Cedarwood', 'Smoked Papyrus', 'Nutmeg'],
      base: ['Royal Sandalwood', 'Haitian Vetiver', 'Golden Amber']
    },
    images: [
      '/images/products/unisex/bellmora-santal-ethereal.jpg',
      '/images/editorial/bellmora-editorial-landscape-1.jpg'
    ],
    stock: 25,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Strong',
    intensity: 'Intense',
    occasions: ['Office', 'Date Night', 'Everyday'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_05', 'prod_07', 'prod_10', 'prod_13']
  },
  {
    id: 'prod_13',
    slug: 'bellmora-midnight-reserve',
    name: 'Bellmora Midnight Reserve',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'A private reserve elixir of dark spiced rum, cured tobacco leaf, roasted tonka, and dark amber.',
    description: 'An exclusive blend formulated for evening allure. Bellmora Midnight Reserve combines warm spiced rum with aged Cuban tobacco leaves, smoky vanilla, and dark ambergris.',
    price: 4199,
    comparePrice: 4999,
    sizes: [
      { size: '50ml', price: 4199, comparePrice: 4999 },
      { size: '100ml', price: 6599, comparePrice: 7699 }
    ],
    notes: {
      top: ['Spiced Rum', 'Bitter Orange Peel', 'Nutmeg'],
      heart: ['Cured Tobacco Leaf', 'Tonka Bean', 'Cinnamon Bark'],
      base: ['Dark Ambergris', 'Smoked Benzoin', 'Aged Cedar']
    },
    images: [
      '/images/products/unisex/bellmora-amber-mystique.jpg',
      '/images/editorial/bellmora-editorial-portrait.jpg'
    ],
    stock: 15,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '14+ Hours',
    sillage: 'Intense',
    intensity: 'Intense',
    occasions: ['Party', 'Date Night', 'Wedding'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_05', 'prod_07', 'prod_10', 'prod_12']
  },
  {
    id: 'prod_14',
    slug: 'bellmora-blue-horizon',
    name: 'Bellmora Blue Horizon',
    subtitle: 'Eau de Parfum Fraîche',
    brand: 'BELLMORA LUXURY',
    collectionType: 'inspired',
    collectionTitle: 'BELLMORA Inspired Interpretation',
    category: 'men',
    fragranceFamily: 'Fresh',
    shortDescription: 'Independent interpretation evoking marine salt breeze, Calabrian lemon, crisp sage, and mineral vetiver.',
    description: 'Crisp, invigorating, and impeccably polished. Bellmora Blue Horizon captures the breathless thrill of Mediterranean coastal winds and sun-warmed sea rocks.',
    price: 2699,
    comparePrice: 3299,
    sizes: [
      { size: '50ml', price: 2699, comparePrice: 3299 },
      { size: '100ml', price: 3999, comparePrice: 4799 }
    ],
    notes: {
      top: ['Calabrian Lemon', 'Sea Salt', 'Crisp Mint'],
      heart: ['Clary Sage', 'Geranium Leaf', 'Pink Pepper'],
      base: ['Mineral Vetiver', 'Amberwood', 'Clean Cedar']
    },
    images: [
      '/images/products/unisex/bellmora-santal-ethereal.jpg',
      '/images/editorial/bellmora-editorial-landscape-2.jpg'
    ],
    stock: 35,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Everyday', 'Office'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_05', 'prod_10', 'prod_12', 'prod_18']
  },
  {
    id: 'prod_15',
    slug: 'bellmora-amber-grace',
    name: 'Bellmora Amber Grace',
    subtitle: 'Eau de Parfum Sensuelle',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Amber',
    shortDescription: 'A luminous feminine amber caressed by vanilla orchid, candied mandarin, and creamy sandalwood.',
    description: 'Golden radiance poured into glass. Bellmora Amber Grace surrounds the wearer with warm solar amber, sweet mandarin peel, and sumptuous Madagascar vanilla.',
    price: 3299,
    comparePrice: 3999,
    sizes: [
      { size: '50ml', price: 3299, comparePrice: 3999 },
      { size: '100ml', price: 5199, comparePrice: 6099 }
    ],
    notes: {
      top: ['Candied Mandarin', 'Pink Peppercorn', 'Pear Nectar'],
      heart: ['Vanilla Orchid', 'Solar Amber', 'Golden Jasmine'],
      base: ['Creamy Sandalwood', 'Benzoin', 'Skin Musk']
    },
    images: [
      '/images/products/women/bellmora-soleil-dore.jpg',
      '/images/editorial/bellmora-editorial-landscape-3.jpg'
    ],
    stock: 24,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Date Night', 'Everyday', 'Wedding'],
    seasons: ['Autumn', 'Winter', 'Spring'],
    relatedIds: ['prod_02', 'prod_03', 'prod_04', 'prod_16']
  },
  {
    id: 'prod_16',
    slug: 'bellmora-velvet-bloom',
    name: 'Bellmora Velvet Bloom',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Velvety peonies, Turkish rose petals, dewy lychee, and soft cashmere wood.',
    description: 'The height of romance. Bellmora Velvet Bloom marries lush pink peonies with dewy lychee and Turkish rose absolutes, grounded by soft white cashmere.',
    price: 3599,
    comparePrice: 4299,
    sizes: [
      { size: '50ml', price: 3599, comparePrice: 4299 },
      { size: '100ml', price: 5699, comparePrice: 6699 }
    ],
    notes: {
      top: ['Dewy Lychee', 'Italian Bergamot', 'Rhubarb'],
      heart: ['Pink Peony', 'Turkish Rose', 'Petalia'],
      base: ['Cashmere Wood', 'Vanilla', 'White Musk']
    },
    images: [
      '/images/products/women/bellmora-velvet-bloom.jpg',
      '/images/editorial/bellmora-editorial-landscape-1.jpg'
    ],
    stock: 19,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Wedding', 'Date Night', 'Gifting'],
    seasons: ['Spring', 'Summer', 'Autumn'],
    relatedIds: ['prod_02', 'prod_03', 'prod_06', 'prod_09']
  },
  {
    id: 'prod_17',
    slug: 'bellmora-oud-signature',
    name: 'Bellmora Oud Signature',
    subtitle: 'Pure Parfum Elixir',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Oud',
    shortDescription: 'Smoked agarwood blended with golden saffron, royal ambergris, and cured dates.',
    description: 'A timeless unisex masterpiece celebrating Arabian perfumery traditions. Bellmora Oud Signature balances smoky agarwood with sweet dates and warm ambergris resins.',
    price: 4699,
    comparePrice: 5499,
    sizes: [
      { size: '50ml', price: 4699, comparePrice: 5499 },
      { size: '100ml', price: 7299, comparePrice: 8499 }
    ],
    notes: {
      top: ['Kashmiri Saffron', 'Medjool Dates', 'Nutmeg'],
      heart: ['Aged Agarwood', 'Smoked Birch', 'Benzoin'],
      base: ['Royal Ambergris', 'Sandalwood', 'Labdanum']
    },
    images: [
      '/images/products/unisex/bellmora-amber-mystique.jpg',
      '/images/editorial/bellmora-editorial-portrait.jpg'
    ],
    stock: 12,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '16+ Hours',
    sillage: 'Intense',
    intensity: 'Intense',
    occasions: ['Wedding', 'Party', 'Date Night'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_01', 'prod_04', 'prod_07', 'prod_13']
  },
  {
    id: 'prod_18',
    slug: 'bellmora-citrus-eclat',
    name: 'Bellmora Citrus Éclat',
    subtitle: 'Eau de Parfum Lumière',
    brand: 'BELLMORA LUXURY',
    collectionType: 'inspired',
    collectionTitle: 'BELLMORA Inspired Interpretation',
    category: 'unisex',
    fragranceFamily: 'Citrus',
    shortDescription: 'Independent interpretation celebrating sun-drenched Sicilian mandarin, basil leaf, and crisp vetiver.',
    description: 'Zesty, buoyant, and joyful. Bellmora Citrus Éclat bursts with vibrant sunlit citrus, aromatic basil leaves, and clean vetiver root.',
    price: 2599,
    comparePrice: 3199,
    sizes: [
      { size: '50ml', price: 2599, comparePrice: 3199 },
      { size: '100ml', price: 3899, comparePrice: 4699 }
    ],
    notes: {
      top: ['Sicilian Mandarin', 'Calabrian Bergamot', 'Clementine'],
      heart: ['Sweet Basil Leaf', 'Orange Blossom', 'Green Tea'],
      base: ['Clean Vetiver', 'White Cedar', 'Solar Musk']
    },
    images: [
      '/images/products/unisex/bellmora-santal-ethereal.jpg',
      '/images/editorial/bellmora-editorial-landscape-2.jpg'
    ],
    stock: 30,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Office'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_01', 'prod_08', 'prod_14', 'prod_19']
  },
  {
    id: 'prod_19',
    slug: 'bellmora-essence-no-01',
    name: 'Bellmora Essence No. 01',
    subtitle: 'Extrait de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Woody',
    shortDescription: 'The house signature blend of creamy cedar, dry ambergris, violet leaf, and skin musk.',
    description: 'The foundation of the Bellmora house aesthetic. Essence No. 01 is an understated, deeply magnetic accord of cedarwood, soft iris butter, and translucent musk.',
    price: 3599,
    comparePrice: 4299,
    sizes: [
      { size: '50ml', price: 3599, comparePrice: 4299 },
      { size: '100ml', price: 5599, comparePrice: 6599 }
    ],
    notes: {
      top: ['Violet Leaf', 'Ambrette Seed', 'Sparkling Cardamom'],
      heart: ['Tuscan Iris', 'Atlas Cedar', 'Papyrus'],
      base: ['Skin Musk', 'Dry Ambergris', 'Australian Sandalwood']
    },
    images: [
      '/images/products/unisex/bellmora-amber-mystique.jpg',
      '/images/editorial/bellmora-editorial-landscape-3.jpg'
    ],
    stock: 26,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Everyday', 'Office', 'Date Night'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_04', 'prod_08', 'prod_17']
  },
  {
    id: 'prod_20',
    slug: 'bellmora-white-jasmine',
    name: 'Bellmora White Jasmine',
    subtitle: 'Eau de Parfum',
    brand: 'BELLMORA LUXURY',
    collectionType: 'inspired',
    collectionTitle: 'BELLMORA Inspired Interpretation',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Independent interpretation celebrating crystalline Grasse jasmine, gardenia petals, and white musk.',
    description: 'An elegant interpretation honoring pure white petals. Bellmora White Jasmine radiates with dewy morning jasmine blossoms, fresh gardenia, and gossamer silk musk.',
    price: 2799,
    comparePrice: 3399,
    sizes: [
      { size: '50ml', price: 2799, comparePrice: 3399 },
      { size: '100ml', price: 4199, comparePrice: 4999 }
    ],
    notes: {
      top: ['Green Leaves', 'Morning Dew', 'Neroli Petals'],
      heart: ['Grasse Jasmine', 'Gardenia', 'White Lily'],
      base: ['White Musk', 'Blonde Woods', 'Crystalline Amber']
    },
    images: [
      '/images/products/women/bellmora-jasmin-nocturne.jpg',
      '/images/editorial/bellmora-editorial-portrait.jpg'
    ],
    stock: 22,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Wedding', 'Gifting'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_03', 'prod_06', 'prod_09', 'prod_16']
  },
  {
    id: 'prod_21',
    slug: 'bellmora-discovery-collection',
    name: 'Bellmora Discovery Collection',
    subtitle: '5 x 10ml Miniature Extrait Coffret',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Luxury Gift Sets',
    category: 'unisex',
    fragranceFamily: 'Woody',
    shortDescription: 'The quintessential collection of five bestselling Bellmora creations in velvet-lined travel atomizers.',
    description: 'The definitive introduction to BELLMORA LUXURY. Features five signature extrait de parfum miniatures: Santal Ethereal, Velvet Rose, Soleil Doré, Noir Intense, and Amber Mystique.',
    price: 3999,
    comparePrice: 4899,
    sizes: [
      { size: '5 x 10ml Set', price: 3999, comparePrice: 4899 }
    ],
    notes: {
      top: ['Discovery Accord'],
      heart: ['Master Extrait Formulations'],
      base: ['Precious Woods & Resins']
    },
    images: [
      '/images/gift-sets/bellmora-prestige-coffret.jpg',
      '/images/editorial/bellmora-editorial-landscape-1.jpg'
    ],
    stock: 20,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: true,
    longevity: '12+ Hours Each',
    sillage: 'Varies by Fragrance',
    intensity: 'Moderate to Intense',
    occasions: ['Gifting', 'Everyday'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_22', 'prod_23', 'prod_24', 'prod_01']
  },
  {
    id: 'prod_22',
    slug: 'bellmora-royal-oud-duo',
    name: 'Bellmora Royal Oud Duo',
    subtitle: '2 x 50ml Oud Royale & Velvet Rose',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Luxury Gift Sets',
    category: 'unisex',
    fragranceFamily: 'Oud',
    shortDescription: 'A magnificent paired presentation of Bellmora Oud Royale and Bellmora Velvet Rose.',
    description: 'Presented in a bespoke gilded lacquer casket with commemorative parchment. The perfect his-and-hers or personal layering connoisseur set.',
    price: 7499,
    comparePrice: 8999,
    sizes: [
      { size: '2 x 50ml Duo Set', price: 7499, comparePrice: 8999 }
    ],
    notes: {
      top: ['Kashmiri Saffron & Pink Pepper'],
      heart: ['Damascus Rose & Aged Agarwood'],
      base: ['Cambodian Oud & Resinous Amber']
    },
    images: [
      '/images/gift-sets/bellmora-prestige-coffret.jpg',
      '/images/editorial/bellmora-editorial-landscape-2.jpg'
    ],
    stock: 10,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: true,
    longevity: '14+ Hours',
    sillage: 'Intense',
    intensity: 'Intense',
    occasions: ['Wedding', 'Gifting', 'Party'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_02', 'prod_07', 'prod_21', 'prod_23']
  },
  {
    id: 'prod_23',
    slug: 'bellmora-signature-gift-box',
    name: 'Bellmora Signature Gift Box',
    subtitle: '100ml Flacon + 2 x 10ml Travel Atomizers',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Luxury Gift Sets',
    category: 'unisex',
    fragranceFamily: 'Amber',
    shortDescription: 'Full 100ml Bellmora Santal Ethereal flacon complemented by two pocket discovery atomizers.',
    description: 'An immaculate luxury gesture. Contains a complete 100ml heavy crystal flacon of Santal Ethereal alongside two matching travel atomizers and a gold funnel.',
    price: 6499,
    comparePrice: 7799,
    sizes: [
      { size: '100ml + 2x10ml Coffret', price: 6499, comparePrice: 7799 }
    ],
    notes: {
      top: ['Cardamom & Bergamot'],
      heart: ['Tuscan Iris & Papyrus'],
      base: ['Sandalwood & Golden Amber']
    },
    images: [
      '/images/gift-sets/bellmora-prestige-coffret.jpg',
      '/images/editorial/bellmora-editorial-landscape-3.jpg'
    ],
    stock: 14,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: true,
    longevity: '12+ Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Gifting', 'Wedding', 'Date Night'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_21', 'prod_22', 'prod_24']
  },
  {
    id: 'prod_24',
    slug: 'bellmora-luxury-trio',
    name: 'Bellmora Luxury Trio',
    subtitle: '3 x 30ml Bespoke Coffret (Men, Women, Unisex)',
    brand: 'BELLMORA LUXURY',
    collectionType: 'original',
    collectionTitle: 'BELLMORA Luxury Gift Sets',
    category: 'unisex',
    fragranceFamily: 'Woody',
    shortDescription: 'Three distinct 30ml expressions representing Men, Women, and Unisex Bellmora masterpieces.',
    description: 'Curated for the diverse collector. Showcases Bellmora Noir Intense (Men), Bellmora Rose Élégance (Women), and Bellmora Santal Ethereal (Unisex) in three sculpted glass bottles.',
    price: 5999,
    comparePrice: 7299,
    sizes: [
      { size: '3 x 30ml Trio Set', price: 5999, comparePrice: 7299 }
    ],
    notes: {
      top: ['Bergamot, Cardamom & Lychee'],
      heart: ['Centifolia Rose, Iris & Coffee Accord'],
      base: ['Smoked Birch, Sandalwood & Amber']
    },
    images: [
      '/images/gift-sets/bellmora-prestige-coffret.jpg',
      '/images/editorial/bellmora-editorial-portrait.jpg'
    ],
    stock: 16,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: true,
    longevity: '12+ Hours Each',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Gifting', 'Office', 'Date Night'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_05', 'prod_06', 'prod_21']
  }
];

export const fragranceFamilies = [
  { id: 'all', name: 'All Families', description: 'Explore the complete olfactory spectrum' },
  { id: 'Woody', name: 'Woody & Earthy', description: 'Sandalwood, cedar, vetiver, and smoky papyrus' },
  { id: 'Amber', name: 'Amber & Resinous', description: 'Golden amber, vanilla caviar, benzoin, and warm tonka' },
  { id: 'Floral', name: 'Haute Floral', description: 'Grasse jasmine, Centifolia rose, orris butter, and tuberose' },
  { id: 'Oud', name: 'Precious Oud', description: 'Cambodian agarwood, frankincense, saffron, and smoked birch' },
  { id: 'Fresh', name: 'Fresh & Aquatic', description: 'Amalfi lemon, sea salt breeze, matcha tea, and coastal herbs' },
  { id: 'Citrus', name: 'Sparkling Citrus', description: 'Calabrian bergamot, bitter orange, and sunlit neroli' },
  { id: 'Musk', name: 'Clean Silk & Musk', description: 'White aldehydes, skin musk, and ambrette seed' },
  { id: 'Gourmand', name: 'Velvet Gourmand', description: 'Dark espresso, roasted tonka, toasted almonds, and cacao' }
];

export const occasionsList = [
  'Everyday',
  'Office',
  'Date Night',
  'Party',
  'Wedding',
  'Gifting'
];

export const categoriesList = [
  { id: 'all', name: 'All Fragrances' },
  { id: 'men', name: "Men's Collection" },
  { id: 'women', name: "Women's Collection" },
  { id: 'unisex', name: 'Unisex Signature' }
];
