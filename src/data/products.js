// Product catalogue. Each entry uses an image from /public/images/<id>.jpg.
// Set `price` to a number (in ₹) to show a price; leave null to show "Price on request".
export const categories = [
  { slug: 'crackers', name: 'Crackers', cover: '/images/14.jpg', blurb: 'Classic bursts, bombs, chakras and gift boxes for every age.' },
  { slug: 'lanterns', name: 'Sky Lanterns', cover: '/images/68.jpg', blurb: 'Colourful paper lanterns that float up into the night sky.' },
  { slug: 'lights', name: 'LED & Lights', cover: '/images/13.jpg', blurb: 'Rope lights, icicle strings and twinkle lights for homes and balconies.' },
  { slug: 'gifts', name: 'Gift Hampers & Sweets', cover: '/images/15.jpg', blurb: 'Festive hampers, chocolates and sweets to share with family.' },
  { slug: 'decor', name: 'Diya & Decor', cover: '/images/66.jpg', blurb: 'Diyas, rangoli designs and festive décor to set the mood.' },
];

// [image id, category, name]
const raw = [
  [6, 'crackers', 'Popping Crackers Box'],
  [9, 'crackers', 'Thread Bomb Spools'],
  [14, 'crackers', 'Cracker Wreath Pack'],
  [24, 'crackers', 'Cone Cracker Candle Pack'],
  [25, 'crackers', 'Assorted Cracker Gift Box'],
  [32, 'crackers', 'Classic Pop Crackers Box'],
  [40, 'crackers', 'Premium Cracker Pack'],
  [41, 'crackers', 'Bullet Bomb Candle Pack'],
  [43, 'crackers', 'Multi-Shot Cracker Bundle'],
  [44, 'crackers', 'Pop Crackers Family Box'],
  [47, 'crackers', 'Pop Crackers Value Box'],
  [50, 'crackers', 'Eco-Friendly Colour Crackers Box'],
  [52, 'crackers', 'Sutli Bomb Lit Candles'],
  [53, 'crackers', 'Cap Gun Toy'],
  [54, 'crackers', 'Sutli Bomb Candle Pack'],
  [65, 'crackers', 'Festival Cracker Combo'],

  [2, 'lanterns', 'Sky Lantern Set (8 Colours)'],
  [5, 'lanterns', 'Sky Lantern Grid Pack'],
  [8, 'lanterns', 'Pink Sky Lantern'],
  [31, 'lanterns', 'Multicolour Sky Lanterns'],
  [34, 'lanterns', 'Sky Lantern Set (5 Pieces)'],
  [48, 'lanterns', 'Sky Lantern Set (9 Pieces)'],
  [55, 'lanterns', 'Sky Lanterns (3 Pieces)'],
  [68, 'lanterns', 'Sky Lantern Party Pack'],
  [69, 'lanterns', 'Sky Lantern Set (10 Pieces)'],

  [1, 'lights', 'LED Rope Strip Light 45 m'],
  [4, 'lights', 'LED Rope Light Reel (Warm White)'],
  [10, 'lights', 'LED Icicle Curtain Lights'],
  [11, 'lights', 'Twinkle Decorative Lights'],
  [13, 'lights', 'Meteor Shower Lights'],
  [17, 'lights', 'Twinkle Lights with Bulbs'],
  [61, 'lights', 'Teardrop String Lights'],
  [70, 'lights', 'LED Rope Strip Light (Pack)'],

  [3, 'gifts', 'Festive Gift Basket'],
  [7, 'gifts', 'Diwali Dry Fruit Hamper'],
  [15, 'gifts', 'Premium Diwali Hamper'],
  [16, 'gifts', 'Festive Snack Gift Boxes'],
  [18, 'gifts', 'Chocolate Almond Tin'],
  [19, 'gifts', 'Diwali Sweets Box'],
  [20, 'gifts', 'Sweet & Savoury Combo'],
  [21, 'gifts', 'Festive Sweet Sampler'],
  [22, 'gifts', 'Dry Fruit & Chocolate Hamper'],
  [23, 'gifts', 'Premium Festive Box'],
  [26, 'gifts', 'Diwali Dry Fruit Box'],
  [27, 'gifts', 'Diwali Mithai Gift Set'],
  [28, 'gifts', 'Festive Chikki Hamper'],
  [29, 'gifts', 'Festive Gift Hamper Set'],
  [33, 'gifts', 'Kaju Katli Sweet Box'],
  [35, 'gifts', 'Diwali Gift Basket'],
  [36, 'gifts', 'Chocolate Crackers Gift Box (Purple)'],
  [37, 'gifts', 'Chocolate Crackers Gift Box (Blue)'],
  [38, 'gifts', 'Festive Snack Hamper'],
  [39, 'gifts', 'Happy Diwali Chocolate Box'],
  [42, 'gifts', 'Diwali Gift Collection'],
  [45, 'gifts', 'Hexagon Chocolate Box'],
  [46, 'gifts', 'Personalised Coffee Gift Set'],
  [57, 'gifts', 'Chocolate Sweets Box with Mini Crackers'],
  [58, 'gifts', 'Hexagon Chocolate & Cracker Box'],
  [59, 'gifts', 'Premium Chocolate Box'],
  [63, 'gifts', 'Chocolate Sutli Bomb Gift'],
  [64, 'gifts', 'Heart Chocolate Box'],
  [67, 'gifts', 'Diwali Chocolate Box with Diya'],

  [12, 'decor', 'Rangoli Diya Design'],
  [30, 'decor', 'Diwali Sticker Sheet'],
  [49, 'decor', 'Hanging Diya Lamps'],
  [51, 'decor', 'Peacock Diya Stand'],
  [56, 'decor', 'Peacock Lamp with Diya'],
  [60, 'decor', 'Decorative Diya Set'],
  [62, 'decor', 'Rangoli Diya Plate'],
  [66, 'decor', 'Hanging Festive Decor Set'],
];

const catName = (slug) => categories.find((c) => c.slug === slug).name;

export const products = raw.map(([id, category, name]) => ({
  id: String(id),
  category,
  name,
  image: `/images/${id}.jpg`,
  price: null,
  description: `${name} from our ${catName(category)} range. Ask us about pack sizes, bulk pricing and availability.`,
}));

export const getProduct = (id) => products.find((p) => p.id === id);
export const getCategory = (slug) => categories.find((c) => c.slug === slug);
