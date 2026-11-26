export const products = [
  {
    id: 'prod_01',
    slug: 'santal-ethereal',
    name: 'Santal Ethereal',
    subtitle: 'Extrait de Parfum',
    collectionType: 'original', // 'original' | 'inspired'
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex', // 'men' | 'women' | 'unisex'
    fragranceFamily: 'Woody',
    shortDescription: 'A sublime blend of creamy Australian sandalwood, warm cardamom, and golden amber enveloped in smoky papyrus.',
    description: 'Santal Ethereal is an intoxicating homage to sacred woods and warm desert winds. Opening with crisp violet leaf and sparkling green cardamom, it seamlessly unfolds into an opulent heart of iris and cedarwood before resting upon a warm, hypnotic base of Australian sandalwood, leather, and sensual cashmeran.',
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
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
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
    relatedIds: ['prod_02', 'prod_05', 'prod_08', 'prod_12']
  },
  {
    id: 'prod_02',
    slug: 'velvet-oud-noir',
    name: 'Velvet Oud Noir',
    subtitle: 'Pure Parfum Elixir',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Oud',
    shortDescription: 'Aristocratic Cambodian oud intertwined with Damascus rose petals, dark saffron, and smoky leather.',
    description: 'An evocative olfactory masterpiece capturing midnight in an oriental palace. Velvet Oud Noir wraps precious aged agarwood in rich velvety crimson roses and smoky benzoin drops, leaving an unmistakable trail of supreme sophistication and royal mystery.',
    price: 4299,
    comparePrice: 5199,
    sizes: [
      { size: '50ml', price: 4299, comparePrice: 5199 },
      { size: '100ml', price: 6899, comparePrice: 7999 }
    ],
    notes: {
      top: ['Kashmiri Saffron', 'Wild Raspberry', 'Incense Mist'],
      heart: ['Damascus Rose', 'Birch Tar', 'Labdanum'],
      base: ['Cambodian Oud', 'Ambergris Accord', 'Benzoin Siam', 'Smoked Vetiver']
    },
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
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
    relatedIds: ['prod_01', 'prod_07', 'prod_14', 'prod_19']
  },
  {
    id: 'prod_03',
    slug: 'soleil-de-grasse',
    name: 'Soleil de Grasse',
    subtitle: 'Eau de Parfum Lumière',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Golden morning sunlight breaking over blooming jasmine fields in Grasse, kissed by radiant orange blossom.',
    description: 'Bathed in warm golden brilliance, Soleil de Grasse sparkles with dewy neroli, white magnolia, and hand-picked May roses. Creamy vanilla orchid and sunlit sandalwood lend this floral creation an air of effortless Parisian luxury.',
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
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80'
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
    relatedIds: ['prod_06', 'prod_09', 'prod_15', 'prod_22']
  },
  {
    id: 'prod_04',
    slug: 'ambre-imperiale',
    name: 'Ambre Impériale',
    subtitle: 'Extrait de Parfum',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Amber',
    shortDescription: 'Golden liquid amber infused with roasted tonka bean, pink pepper, and velvety Madagascar vanilla.',
    description: 'Ambre Impériale is an opulent tribute to regal elegance. Golden, creamy resinous amber fuses with delicate spice, dry cedarwood, and caramelised benzoin to produce a cocooning, rich scent that is both comforting and profoundly sophisticated.',
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
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
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
    relatedIds: ['prod_01', 'prod_02', 'prod_17', 'prod_21']
  },
  {
    id: 'prod_05',
    slug: 'cuir-sublime',
    name: 'Cuir Sublime',
    subtitle: 'Eau de Parfum Intense',
    collectionType: 'inspired',
    collectionTitle: 'Inspired Fragrance Interpretation',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Independent interpretation celebrating Tuscan leather, crushed thyme, and wild raspberry sweetness.',
    description: 'An independent artistic interpretation celebrating the timeless charisma of supple black leather, herbal wild thyme, and luscious red berries. A signature statement for the discerning modern gentleman.',
    price: 2799,
    comparePrice: 3499,
    sizes: [
      { size: '50ml', price: 2799, comparePrice: 3499 },
      { size: '100ml', price: 4299, comparePrice: 5199 }
    ],
    notes: {
      top: ['Thyme', 'Wild Saffron', 'Raspberry'],
      heart: ['Night Jasmine', 'Olibanum', 'Suede Accord'],
      base: ['Fine Italian Leather', 'Black Amber', 'Smoky Birch']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80'
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
    relatedIds: ['prod_01', 'prod_10', 'prod_12', 'prod_18']
  },
  {
    id: 'prod_06',
    slug: 'iris-celesta',
    name: 'Iris Celesta',
    subtitle: 'Eau de Parfum Nude',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Powdery Florentine orris root combined with white suede, subtle pear, and crystalline musk.',
    description: 'A whisper of pure refinement. Iris Celesta captures the silky grace of noble Florentine butter orris, accented with crisp conference pear and soft cashmere wraps. Like a bespoke cashmere coat draped over bare shoulders.',
    price: 3399,
    comparePrice: 4099,
    sizes: [
      { size: '50ml', price: 3399, comparePrice: 4099 },
      { size: '100ml', price: 5299, comparePrice: 6299 }
    ],
    notes: {
      top: ['Crisp Pear', 'Ambrette Seed', 'White Freesia'],
      heart: ['Florentine Orris Root', 'Mimosa Blossom', 'Heliotrope'],
      base: ['White Suede', 'Skin Musk', 'Cedarwood Flakes']
    },
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 22,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Intimate to Moderate',
    intensity: 'Light',
    occasions: ['Office', 'Everyday', 'Gifting'],
    seasons: ['Spring', 'Summer', 'Autumn'],
    relatedIds: ['prod_03', 'prod_08', 'prod_11', 'prod_16']
  },
  {
    id: 'prod_07',
    slug: 'oud-royaliste',
    name: 'Oud Royaliste',
    subtitle: 'Extrait de Parfum',
    collectionType: 'inspired',
    collectionTitle: 'Inspired Fragrance Interpretation',
    category: 'men',
    fragranceFamily: 'Oud',
    shortDescription: 'Independent interpretation evoking noble oud wood, pink peppercorns, cardamom, and tonka bean.',
    description: 'An independent artistic interpretation reflecting the prestigious aura of smoky rare oud, angelica root, and exotic woods. Designed for commanding presence and stately confidence.',
    price: 2999,
    comparePrice: 3699,
    sizes: [
      { size: '50ml', price: 2999, comparePrice: 3699 },
      { size: '100ml', price: 4699, comparePrice: 5699 }
    ],
    notes: {
      top: ['Pink Peppercorn', 'Lemon Verbena', 'Cardamom Pod'],
      heart: ['Cedar Needles', 'Angelica Root', 'Smoky Gaiacwood'],
      base: ['Precious Oud Accord', 'Sandalwood', 'Crystalline Amber']
    },
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 16,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Strong',
    intensity: 'Intense',
    occasions: ['Wedding', 'Party', 'Office'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_02', 'prod_05', 'prod_10', 'prod_14']
  },
  {
    id: 'prod_08',
    slug: 'musc-infini',
    name: 'Musc Infini',
    subtitle: 'Eau de Parfum Pur',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Musk',
    shortDescription: 'A clean second-skin fragrance with crisp white linen, aldehydes, solar amber, and pure musk.',
    description: 'The epitome of clean minimalism and quiet luxury. Musc Infini smells like fresh morning sun pouring through white silk curtains, fresh skin bathed in pure thermal spring water, and soft golden cashmeran.',
    price: 2899,
    comparePrice: 3499,
    sizes: [
      { size: '50ml', price: 2899, comparePrice: 3499 },
      { size: '100ml', price: 4499, comparePrice: 5399 }
    ],
    notes: {
      top: ['Clean Aldehydes', 'White Peach', 'Linden Blossom'],
      heart: ['Lily of the Valley', 'Cotton Accord', 'Blonde Cedar'],
      base: ['White Musk Macrocyclique', 'Dry Amber', 'Ambrette']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 40,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Intimate to Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Office'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_06', 'prod_11', 'prod_20']
  },
  {
    id: 'prod_09',
    slug: 'rose-majestueuse',
    name: 'Rose Majestueuse',
    subtitle: 'Extrait de Parfum',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Centifolia roses harvested at sunrise, drizzled with golden honey and warm pink pepper.',
    description: 'A deep, dimensional celebration of the queen of flowers. Rose Majestueuse escapes tired conventions by blending dewy Bulgarian rose with smoky tea leaves, patchouli heart, and decadent spun honey.',
    price: 3599,
    comparePrice: 4299,
    sizes: [
      { size: '50ml', price: 3599, comparePrice: 4299 },
      { size: '100ml', price: 5599, comparePrice: 6599 }
    ],
    notes: {
      top: ['Pink Peppercorn', 'Dewy Lychee', 'Sparkling Mandarin'],
      heart: ['Bulgarian Rose Absolute', 'Rose Centifolia', 'Black Tea Infusion'],
      base: ['Patchouli Coeur', 'Liquid Amber', 'Honeycomb Nectar']
    },
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 25,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Wedding', 'Date Night', 'Gifting'],
    seasons: ['Spring', 'Autumn', 'Winter'],
    relatedIds: ['prod_02', 'prod_03', 'prod_13', 'prod_23']
  },
  {
    id: 'prod_10',
    slug: 'vetiver-mythique',
    name: 'Vetiver Mythique',
    subtitle: 'Eau de Parfum Terre',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Earthy Haitian vetiver sharpened with bitter grapefruit, pink peppercorns, and flint minerality.',
    description: 'A tribute to raw elemental majesty. Vetiver Mythique weaves green smoky Haitian vetiver roots with crushed flint stone, crisp pink pomelo, and cedar shavings for a scent that exudes intellectual authority and timeless poise.',
    price: 3299,
    comparePrice: 3999,
    sizes: [
      { size: '50ml', price: 3299, comparePrice: 3999 },
      { size: '100ml', price: 4999, comparePrice: 5999 }
    ],
    notes: {
      top: ['Pink Grapefruit', 'Crushed Juniper Berries', 'Bitter Orange'],
      heart: ['Flint Stone Accord', 'Geranium Leaf', 'Black Pepper'],
      base: ['Haitian Vetiver', 'Virginian Cedar', 'Benzoin']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 21,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '9 - 11 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Office', 'Everyday'],
    seasons: ['Spring', 'Summer', 'Autumn'],
    relatedIds: ['prod_01', 'prod_05', 'prod_12', 'prod_16']
  },
  {
    id: 'prod_11',
    slug: 'bergamote-lumineuse',
    name: 'Bergamote Lumineuse',
    subtitle: 'Eau de Cologne Sublime',
    collectionType: 'inspired',
    collectionTitle: 'Inspired Fragrance Interpretation',
    category: 'unisex',
    fragranceFamily: 'Citrus',
    shortDescription: 'Independent interpretation celebrating sun-drenched sunlit Calabrian bergamot, pettigrain, and amber.',
    description: 'An independent artistic interpretation reflecting the sparkling radiance of sunny Mediterranean groves. Crisp citrus oils dance with petitgrain, herbaceous rosemary, and soft white amber.',
    price: 2499,
    comparePrice: 3199,
    sizes: [
      { size: '50ml', price: 2499, comparePrice: 3199 },
      { size: '100ml', price: 3899, comparePrice: 4699 }
    ],
    notes: {
      top: ['Calabrian Bergamot', 'Green Mandarin', 'Bitter Orange Peel'],
      heart: ['Petitgrain Bigarade', 'Rosemary Oil', 'Orange Blossom'],
      base: ['Clean Amber', 'Driftwood', 'Soft Musk']
    },
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 35,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '7 - 9 Hours',
    sillage: 'Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Office'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_03', 'prod_08', 'prod_16', 'prod_24']
  },
  {
    id: 'prod_12',
    slug: 'tabac-sauvage',
    name: 'Tabac Sauvage',
    subtitle: 'Extrait de Parfum',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Warm cured golden tobacco leaves folded into plum compote, bourbon vanilla, and blonde woods.',
    description: 'An intimate, intoxicating aroma reminiscent of a private club library. Fragrant Virginia tobacco leaves, sweet spiced plum, dark rum nuances, and velvety tonka create a deeply captivating and warm masculine presence.',
    price: 3699,
    comparePrice: 4499,
    sizes: [
      { size: '50ml', price: 3699, comparePrice: 4499 },
      { size: '100ml', price: 5699, comparePrice: 6799 }
    ],
    notes: {
      top: ['Spiced Rum', 'Cinnamon Bark', 'Dark Plum'],
      heart: ['Virginia Tobacco Leaves', 'Cacao Pod', 'Tonka Bean'],
      base: ['Bourbon Vanilla', 'Guaiac Wood', 'Dry Amber']
    },
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 18,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Strong',
    intensity: 'Intense',
    occasions: ['Date Night', 'Party', 'Wedding'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_01', 'prod_04', 'prod_05', 'prod_17']
  },
  {
    id: 'prod_13',
    slug: 'vanille-precieuse',
    name: 'Vanille Précieuse',
    subtitle: 'Nectar de Parfum',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Gourmand',
    shortDescription: 'Madagascar bourbon vanilla caviar infused with salted caramel, roasted almonds, and white cedar.',
    description: 'Far removed from simple confectionary scents, Vanille Précieuse is a complex, adult celebration of vanilla caviar. Infused with toasted almonds, fleur de sel caramel, and smoky sandalwood.',
    price: 3499,
    comparePrice: 4199,
    sizes: [
      { size: '50ml', price: 3499, comparePrice: 4199 },
      { size: '100ml', price: 5399, comparePrice: 6399 }
    ],
    notes: {
      top: ['Toasted Almond', 'Fleur de Sel', 'Orgeat Accord'],
      heart: ['Bourbon Vanilla Caviar', 'Caramel Resins', 'Orchid Petals'],
      base: ['White Cedar', 'Golden Benzoin', 'Cashmere Musk']
    },
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 20,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '11 - 13 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Date Night', 'Everyday', 'Gifting'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_04', 'prod_09', 'prod_17', 'prod_21']
  },
  {
    id: 'prod_14',
    slug: 'fumee-d-encens',
    name: "Fumée d'Encens",
    subtitle: 'Extrait Sacré',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Oud',
    shortDescription: 'Sacred Frankincense from Oman surrounded by crushed myrrh, smoldering cypress, and dark agarwood.',
    description: 'An evocative spiritual temple of scent. Silver frankincense resin, balsamic myrrh, and cold stone nuances combine with fiery pepper and noble aged oud.',
    price: 3999,
    comparePrice: 4899,
    sizes: [
      { size: '50ml', price: 3999, comparePrice: 4899 },
      { size: '100ml', price: 6199, comparePrice: 7299 }
    ],
    notes: {
      top: ['Silver Frankincense', 'Elemi Gum', 'Black Pepper'],
      heart: ['Omani Myrrh', 'Cypress Needles', 'Labdanum'],
      base: ['Dark Agarwood', 'Ebony Woods', 'Smoked Vetiver']
    },
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 12,
    stockStatus: 'limited_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '12+ Hours',
    sillage: 'Strong',
    intensity: 'Intense',
    occasions: ['Wedding', 'Party'],
    seasons: ['Winter', 'Autumn'],
    relatedIds: ['prod_02', 'prod_04', 'prod_07', 'prod_12']
  },
  {
    id: 'prod_15',
    slug: 'jasmin-nocturne',
    name: 'Jasmin Nocturne',
    subtitle: 'Eau de Parfum Sombre',
    collectionType: 'inspired',
    collectionTitle: 'Inspired Fragrance Interpretation',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Independent interpretation evoking blooming night jasmine, bitter green almond, and liquorice wood.',
    description: 'An independent artistic interpretation reflecting the dark glamour of night-blooming jasmine flowers, sweetened with delicate almond paste and deep precious woods.',
    price: 2699,
    comparePrice: 3399,
    sizes: [
      { size: '50ml', price: 2699, comparePrice: 3399 },
      { size: '100ml', price: 4199, comparePrice: 4999 }
    ],
    notes: {
      top: ['Green Sap', 'Bitter Almond', 'Gardenia Mist'],
      heart: ['Sambac Jasmine Noir', 'Orange Blossom', 'Tonka Bean'],
      base: ['Precious Amber', 'Licorice Woods', 'Patchouli']
    },
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 24,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '9 - 11 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Date Night', 'Party'],
    seasons: ['Autumn', 'Spring'],
    relatedIds: ['prod_03', 'prod_06', 'prod_09', 'prod_13']
  },
  {
    id: 'prod_16',
    slug: 'aqua-di-riviera',
    name: 'Aqua Di Riviera',
    subtitle: 'Eau de Parfum Marine',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'men',
    fragranceFamily: 'Fresh',
    shortDescription: 'Salty Mediterranean sea spray, crushed rosemary, wild sage, and sun-bleached coastal cedar.',
    description: 'A crisp dive into azure crystalline waters along the Amalfi coast. Saline oceanic breezes mingle with mineral cliffs, Italian lemon zest, and aquatic herbs for an invigorating all-day signature.',
    price: 2999,
    comparePrice: 3699,
    sizes: [
      { size: '50ml', price: 2999, comparePrice: 3699 },
      { size: '100ml', price: 4599, comparePrice: 5499 }
    ],
    notes: {
      top: ['Amalfi Lemon', 'Crushed Mint', 'Marine Salt Spray'],
      heart: ['Wild Coastal Sage', 'Rosemary', 'Geranium Petals'],
      base: ['Sun-bleached Driftwood', 'Grey Ambergris', 'Oakmoss']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 30,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Office'],
    seasons: ['Summer', 'Spring'],
    relatedIds: ['prod_10', 'prod_11', 'prod_18', 'prod_24']
  },
  {
    id: 'prod_17',
    slug: 'cafe-tenebreux',
    name: 'Café Ténébreux',
    subtitle: 'Extrait de Parfum',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Gourmand',
    shortDescription: 'Dark roasted espresso beans laced with dark chocolate, hazelnut liquor, and Indonesian patchouli.',
    description: 'An atmospheric Parisian salon at dusk. Deep notes of freshly pressed espresso and roasted hazelnuts harmonize with melting cacao and warm amber for an addictive, velvety warmth.',
    price: 3399,
    comparePrice: 4199,
    sizes: [
      { size: '50ml', price: 3399, comparePrice: 4199 },
      { size: '100ml', price: 5299, comparePrice: 6399 }
    ],
    notes: {
      top: ['Dark Roasted Espresso', 'Hazelnut Syrup', 'Bitter Orange'],
      heart: ['Dark Cocoa 85%', 'Nutmeg', 'Heliotrope'],
      base: ['Indonesian Patchouli', 'Madagascar Vanilla Caviar', 'Blonde Tobacco']
    },
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 17,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '11 - 13 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Date Night', 'Everyday', 'Gifting'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_04', 'prod_12', 'prod_13', 'prod_21']
  },
  {
    id: 'prod_18',
    slug: 'cedre-magnifique',
    name: 'Cèdre Magnifique',
    subtitle: 'Eau de Parfum Boisée',
    collectionType: 'inspired',
    collectionTitle: 'Inspired Fragrance Interpretation',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'Independent interpretation celebrating crisp cedar forests, crushed needles, and incense smoke.',
    description: 'An independent artistic interpretation reflecting the stillness and majesty of ancient Himalayan cedar groves. Crisp pine needles blend with smoky olibanum and warm ambergris.',
    price: 2599,
    comparePrice: 3299,
    sizes: [
      { size: '50ml', price: 2599, comparePrice: 3299 },
      { size: '100ml', price: 3999, comparePrice: 4899 }
    ],
    notes: {
      top: ['Pine Needles', 'Italian Bergamot', 'Pink Pepper'],
      heart: ['Atlas Cedarwood', 'Incense Smoke', 'Nutmeg'],
      base: ['Amber Crystals', 'White Vetiver', 'Oakmoss']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 29,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '9 - 11 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Office', 'Everyday'],
    seasons: ['Autumn', 'Winter', 'Spring'],
    relatedIds: ['prod_01', 'prod_05', 'prod_10', 'prod_16']
  },
  {
    id: 'prod_19',
    slug: 'bois-de-cachemire',
    name: 'Bois de Cachemire',
    subtitle: 'Extrait de Parfum',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Woody',
    shortDescription: 'Spun cashmere wood intertwined with iris pallida, milky sandalwood, and white musk.',
    description: 'Subtle elegance captured in scent form. Bois de Cachemire evokes the silky tactile pleasure of pure cashmere touching warmed skin. Soft, woody, and irresistibly intimate.',
    price: 3599,
    comparePrice: 4399,
    sizes: [
      { size: '50ml', price: 3599, comparePrice: 4399 },
      { size: '100ml', price: 5499, comparePrice: 6599 }
    ],
    notes: {
      top: ['Freesia Petals', 'White Thyme', 'Cardamom'],
      heart: ['Iris Pallida', 'Cashmere Accord', 'Cedar Flakes'],
      base: ['Sandalwood Mysore Accord', 'White Musk', 'Silky Amber']
    },
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 23,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate',
    intensity: 'Moderate',
    occasions: ['Office', 'Date Night', 'Everyday'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_06', 'prod_08', 'prod_18']
  },
  {
    id: 'prod_20',
    slug: 'fleur-blanche',
    name: 'Fleur Blanche',
    subtitle: 'Eau de Parfum Pure',
    collectionType: 'inspired',
    collectionTitle: 'Inspired Fragrance Interpretation',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Independent interpretation evoking tuberose, creamy gardenia, and tender peach blossom.',
    description: 'An independent artistic interpretation celebrating narcotic white blossoms under moonlight. Opulent tuberose and velvety gardenia petals melt into warm coconut nectar and solar woods.',
    price: 2799,
    comparePrice: 3499,
    sizes: [
      { size: '50ml', price: 2799, comparePrice: 3499 },
      { size: '100ml', price: 4299, comparePrice: 5199 }
    ],
    notes: {
      top: ['Green Leaves', 'Peach Blossom', 'Mandarin'],
      heart: ['Tuberose of India', 'Gardenia Grandiflora', 'Ylang-Ylang'],
      base: ['Coconut Nectar', 'Sandalwood', 'Golden Amber']
    },
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 27,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '9 - 11 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Wedding', 'Date Night', 'Party'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_03', 'prod_09', 'prod_15', 'prod_22']
  },
  {
    id: 'prod_21',
    slug: 'nectar-d-or',
    name: "Nectar d'Or",
    subtitle: 'Extrait Précieux',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'women',
    fragranceFamily: 'Amber',
    shortDescription: 'Liquid golden honey laced with saffron, candied orange rind, and benzoin resin.',
    description: 'A decadent, sun-drenched gourmand amber. Rich acacia honey dripped over toasted almonds, candied blood orange, and velvety benzoin tears that radiate pure warmth on the skin.',
    price: 3499,
    comparePrice: 4299,
    sizes: [
      { size: '50ml', price: 3499, comparePrice: 4299 },
      { size: '100ml', price: 5499, comparePrice: 6499 }
    ],
    notes: {
      top: ['Candied Blood Orange', 'Saffron Stigmas', 'Davana'],
      heart: ['Acacia Honey Nectar', 'Toasted Almond', 'Orange Blossom'],
      base: ['Siam Benzoin', 'Madagascar Vanilla', 'Solar Amber']
    },
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 18,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: false,
    longevity: '11 - 13 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Date Night', 'Party', 'Wedding'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_04', 'prod_13', 'prod_17', 'prod_23']
  },
  {
    id: 'prod_22',
    slug: 'matcha-serenite',
    name: 'Matcha Sérénité',
    subtitle: 'Eau de Parfum Zen',
    collectionType: 'original',
    collectionTitle: 'AURA Original Haute Parfumerie',
    category: 'unisex',
    fragranceFamily: 'Fresh',
    shortDescription: 'Japanese ceremonial grade matcha tea, steamed rice accord, fig milk, and blonde cedar.',
    description: 'A meditative breath of tranquility. Finely whisked green tea powders meet soft fig milk, hints of white floral petals, and calming cedar for an airy, deeply soothing scent.',
    price: 3199,
    comparePrice: 3899,
    sizes: [
      { size: '50ml', price: 3199, comparePrice: 3899 },
      { size: '100ml', price: 4899, comparePrice: 5799 }
    ],
    notes: {
      top: ['Uji Matcha Tea', 'Bergamot Zest', 'Cardamom Mist'],
      heart: ['Fig Milk', 'Steamed Rice Accord', 'White Jasmine Petals'],
      base: ['Blonde Cedar', 'Clean Skin Musk', 'Ambergris Accord']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 26,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: false,
    longevity: '8 - 10 Hours',
    sillage: 'Intimate to Moderate',
    intensity: 'Light',
    occasions: ['Everyday', 'Office', 'Gifting'],
    seasons: ['Spring', 'Summer'],
    relatedIds: ['prod_08', 'prod_11', 'prod_16', 'prod_19']
  },
  {
    id: 'prod_23',
    slug: 'le-coffret-discovery',
    name: 'Le Coffret Discovery Set',
    subtitle: '5 x 10ml Miniature Parfumerie Flacons',
    collectionType: 'original',
    collectionTitle: 'AURA Luxury Gift Sets',
    category: 'unisex',
    fragranceFamily: 'Woody',
    shortDescription: 'The ultimate olfactory journey: Santal Ethereal, Velvet Oud Noir, Soleil de Grasse, Ambre Impériale, and Musc Infini.',
    description: 'An exquisitely presented velvet-lined presentation coffret housing five of AURA’s most iconic creations in travel-friendly 10ml spray atomizers. Includes an exclusive redeemable privilege voucher for a full 100ml flacon.',
    price: 3999,
    comparePrice: 4999,
    sizes: [
      { size: '5 x 10ml Set', price: 3999, comparePrice: 4999 }
    ],
    notes: {
      top: ['Discovery Assortment of Notes'],
      heart: ['Curated by Master Perfumers'],
      base: ['Signature AURA Sillage Base']
    },
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 35,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: true,
    isNewArrival: false,
    isGiftSet: true,
    longevity: 'Varies by Fragrance',
    sillage: 'Curated Range',
    intensity: 'Moderate',
    occasions: ['Gifting', 'Everyday', 'Wedding'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_01', 'prod_02', 'prod_03', 'prod_04']
  },
  {
    id: 'prod_24',
    slug: 'royal-oud-duo-coffret',
    name: 'Royal Oud Connoisseur Duo',
    subtitle: '2 x 50ml Luxury Presentation Box',
    collectionType: 'original',
    collectionTitle: 'AURA Luxury Gift Sets',
    category: 'unisex',
    fragranceFamily: 'Oud',
    shortDescription: 'Velvet Oud Noir & Oud Royaliste paired in an opulent gold-embossed presentation casket.',
    description: 'Two legendary expressions of precious agarwood side by side. Velvet Oud Noir’s floral crimson rose nuance paired with the smoky noble spices of Oud Royaliste. Handcrafted presentation box with magnetic closure.',
    price: 6999,
    comparePrice: 8499,
    sizes: [
      { size: '2 x 50ml Duo', price: 6999, comparePrice: 8499 }
    ],
    notes: {
      top: ['Cambodian & Assamese Ouds'],
      heart: ['Damascus Rose & Kashmiri Saffron'],
      base: ['Smoked Amber & Balsamic Resins']
    },
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 15,
    stockStatus: 'in_stock',
    isFeatured: true,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: true,
    longevity: '14+ Hours',
    sillage: 'Intense & Enveloping',
    intensity: 'Intense',
    occasions: ['Gifting', 'Wedding', 'Party'],
    seasons: ['Autumn', 'Winter'],
    relatedIds: ['prod_02', 'prod_07', 'prod_14', 'prod_23']
  },
  {
    id: 'prod_25',
    slug: 'solstice-d-or-coffret',
    name: "Solstice d'Or Floral Coffret",
    subtitle: '2 x 50ml Floral Haute Parfumerie',
    collectionType: 'original',
    collectionTitle: 'AURA Luxury Gift Sets',
    category: 'women',
    fragranceFamily: 'Floral',
    shortDescription: 'Soleil de Grasse & Rose Majestueuse paired for daytime luminosity and twilight romance.',
    description: 'The definitive feminine perfume duo. Soleil de Grasse for dewy daytime grace and radiant optimism, accompanied by Rose Majestueuse for unforgettable evening elegance.',
    price: 6299,
    comparePrice: 7699,
    sizes: [
      { size: '2 x 50ml Duo', price: 6299, comparePrice: 7699 }
    ],
    notes: {
      top: ['Neroli & Grasse Roses'],
      heart: ['Grasse Jasmine & Lychee'],
      base: ['White Silk Musk & Honeycomb']
    },
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 20,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: true,
    isGiftSet: true,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Gifting', 'Wedding', 'Date Night'],
    seasons: ['Spring', 'Summer', 'Autumn'],
    relatedIds: ['prod_03', 'prod_09', 'prod_23', 'prod_20']
  },
  {
    id: 'prod_26',
    slug: 'vetiver-et-cuir-duo',
    name: 'Gentleman Signature Duo',
    subtitle: '2 x 50ml Cuir Sublime & Vetiver Mythique',
    collectionType: 'original',
    collectionTitle: 'AURA Luxury Gift Sets',
    category: 'men',
    fragranceFamily: 'Woody',
    shortDescription: 'The pinnacle of masculine sophistication: supple Tuscan leather and mineral Haitian vetiver.',
    description: 'Curated for the modern tastemaker. Combines the timeless masculine allure of Cuir Sublime with the crisp intellectual freshness of Vetiver Mythique.',
    price: 5799,
    comparePrice: 6999,
    sizes: [
      { size: '2 x 50ml Duo', price: 5799, comparePrice: 6999 }
    ],
    notes: {
      top: ['Wild Thyme & Grapefruit'],
      heart: ['Flint Stone & Night Jasmine'],
      base: ['Italian Leather & Haitian Vetiver']
    },
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 18,
    stockStatus: 'in_stock',
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
    isGiftSet: true,
    longevity: '10 - 12 Hours',
    sillage: 'Moderate to Strong',
    intensity: 'Moderate',
    occasions: ['Gifting', 'Office', 'Date Night'],
    seasons: ['All Seasons'],
    relatedIds: ['prod_05', 'prod_10', 'prod_12', 'prod_23']
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
  { id: 'Gourmand', name: 'Velvet Gourmand', description: 'Dark espresso, salted caramel, toasted almonds, and cocoa' }
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
