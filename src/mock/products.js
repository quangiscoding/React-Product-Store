const brands = {
  phones: ["Apple", "Samsung", "Xiaomi", "Oppo", "Google"],
  laptops: ["Dell", "HP", "Asus", "Lenovo", "MacBook"],
  headphones: ["Sony", "JBL", "Bose", "Sennheiser", "Razer"],
  screens: ["LG", "Samsung", "AOC", "Asus", "Dell"],
};

const phoneModels = ["Pro", "Plus", "Ultra", "Mini", "Max"];
const laptopTypes = ["Gaming", "Ultrabook", "Office", "Creator"];
const headphoneTypes = ["Wireless", "Noise Cancelling", "Gaming"];
const screenTypes = ["4K", "OLED", "Curved", "144Hz"];

const phones = Array.from({ length: 500 }, (_, i) => {
  const brand = brands.phones[i % brands.phones.length];
  const model = phoneModels[i % phoneModels.length];

  return {
    id: i + 1,
    category: "phone",
    title: `${brand} Phone ${model} ${i + 1}`,
    price: Math.floor(Math.random() * 1000),
    image: `https://picsum.photos/300/200?random=${i + 1}`,
  };
});

const laptops = Array.from({ length: 500 }, (_, i) => {
  const brand = brands.laptops[i % brands.laptops.length];
  const type = laptopTypes[i % laptopTypes.length];

  return {
    id: i + 501,
    category: "laptop",
    title: `${brand} ${type} Laptop ${i + 1}`,
    price: Math.floor(Math.random() * 2000),
    image: `https://picsum.photos/300/200?random=${i + 501}`,
  };
});

const headphones = Array.from({ length: 500 }, (_, i) => {
  const brand = brands.headphones[i % brands.headphones.length];
  const type = headphoneTypes[i % headphoneTypes.length];

  return {
    id: i + 1001,
    category: "headphone",
    title: `${brand} ${type} Headphone ${i + 1}`,
    price: Math.floor(Math.random() * 500),
    image: `https://picsum.photos/300/200?random=${i + 1001}`,
  };
});

const screens = Array.from({ length: 500 }, (_, i) => {
  const brand = brands.screens[i % brands.screens.length];
  const type = screenTypes[i % screenTypes.length];

  return {
    id: i + 1501,
    category: "screen",
    title: `${brand} ${type} Screen ${i + 1}`,
    price: Math.floor(Math.random() * 800),
    image: `https://picsum.photos/300/200?random=${i + 1501}`,
  };
});

const products = [...phones, ...laptops, ...headphones, ...screens];

export default products;
