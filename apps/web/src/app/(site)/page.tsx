"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BadgePercent,
  ChevronDown,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  StarHalf,
  Truck,
  Twitter,
  User,
  Wine,
} from "lucide-react";

type Product = {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  badge?: "hot" | "sale" | "new";
  rating: number;
  categories: string[];
};

type ColumnGroup = {
  title: string;
  items: string[];
};

const heroImages = {
  primaryBottle:
    "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2021/09/shop39-intro-1.png",
  rareWine:
    "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/banner-1.jpg",
  topUnder100:
    "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/banner-2.jpg",
};

const varietalColumns: ColumnGroup[] = [
  {
    title: "Red Wine",
    items: ["Bordeaux Blends", "Cabernet Sauvignon", "Merlot", "Pinot Noir", "Sangiovese"],
  },
  {
    title: "White Wine",
    items: ["Chardonnay", "Pinot Gris/Grigio", "Riesling", "Sauvignon Blanc", "White Bordeaux"],
  },
  {
    title: "Other",
    items: ["Champagne", "Desert & Fortified", "Rose Wine", "Sake", "Sparkling"],
  },
  {
    title: "Selection",
    items: ["From $40 to $60", "From $60 to $100", "From $100 to $200", "From $200 to $500", "Top Sellers"],
  },
];

const regionColumns: ColumnGroup[] = [
  {
    title: "France",
    items: ["Bordeaux", "Burgundy", "Champagne", "Rhone", "Loire Valley"],
  },
  {
    title: "Italy",
    items: ["Piedmont", "Tuscany", "Veneto", "Sicily", "Friuli-Venezia-Giulia"],
  },
  {
    title: "USA",
    items: ["California", "Central Coast", "Napa Valley", "Sonoma County", "Washington"],
  },
  {
    title: "Country",
    items: ["Australia", "Austria", "Germany", "Portugal", "Spain"],
  },
];

const popularProducts: Product[] = [
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-16.jpg",
    price: "$39.00",
    rating: 0,
    categories: ["Bordeaux Blends", "Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-15.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    badge: "sale",
    rating: 5,
    categories: ["Austria", "Sake"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-14.jpg",
    price: "$89.00",
    originalPrice: "$99.00",
    badge: "sale",
    rating: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-13.jpg",
    price: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
];

const featuredProducts: Product[] = [
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-8.jpg",
    price: "$209.00",
    badge: "hot",
    rating: 5,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-7.jpg",
    price: "$49.00",
    badge: "hot",
    rating: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-6.jpg",
    price: "$59.00",
    badge: "hot",
    rating: 5,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-5.jpg",
    price: "$69.00",
    badge: "hot",
    rating: 0,
    categories: ["Champagne", "Sangiovese"],
  },
];

const staffFavorites: Product[] = [
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-16-85x85.jpg",
    price: "$39.00",
    rating: 0,
    categories: ["Bordeaux Blends"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-15-85x85.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    rating: 5,
    categories: ["Austria"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-14-85x85.jpg",
    price: "$89.00",
    originalPrice: "$99.00",
    rating: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-13-85x85.jpg",
    price: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-12-85x85.jpg",
    price: "$29.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-11-85x85.jpg",
    price: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-10-85x85.jpg",
    price: "$79.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-9-85x85.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
];

const blogPosts = [
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/POST-1-322x180.jpg",
    date: "December 7, 2020",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/post-2-322x180.jpg",
    date: "December 7, 2020",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/post-3-322x180.jpg",
    date: "December 7, 2020",
  },
];

const instagramImages = [
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-1.jpg",
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-2.jpg",
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-3.jpg",
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-4.jpg",
];

const footerLinks = {
  "Customer Service": [
    "Help & FAQs",
    "Order Tracking",
    "Shipping & Delivery",
    "Orders History",
    "Advanced Search",
    "Login",
  ],
  "About Us": ["About Us", "Careers", "Our Stores", "Corporate Sales"],
  "More Information": ["Affiliates", "Refer a Friend", "Student Beans Offers", "Gift Vouchers"],
};

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  hot: "bg-[#b6193a]",
  sale: "bg-[#b6193a]",
  new: "bg-slate-900",
};

const headerLinks = ["Track Order", "About", "Our Stores", "Blog", "Contact", "Help & FAQs"];

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={`full-${index}`} className="h-4 w-4 text-yellow-400" fill="currentColor" />
      ))}
      {hasHalf && <StarHalf className="h-4 w-4 text-yellow-400" fill="currentColor" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} className="h-4 w-4 text-slate-300" />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<"varietal" | "region">("varietal");

  const filterGroups = useMemo(
    () => (activeFilter === "varietal" ? varietalColumns : regionColumns),
    [activeFilter],
  );

  return (
    <div className="bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="bg-[#b6193a] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-2 text-xs md:text-[11px]">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span className="tracking-wide">
                Call Us: <span className="font-semibold">800-123-4567</span>
              </span>
            </div>
            <nav className="hidden items-center gap-5 uppercase tracking-[0.25em] md:flex">
              {headerLinks.map((item) => (
                <Link key={item} href="#" className="hover:text-white/80">
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 uppercase tracking-[0.25em]">
                USD
                <ChevronDown className="h-3 w-3" />
              </button>
              <button className="hidden items-center gap-1 uppercase tracking-[0.25em] md:flex">
                <Globe className="h-3.5 w-3.5" />
                Eng
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="flex items-center gap-2">
                <Link href="#" aria-label="Facebook" className="transition hover:text-white/80">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" aria-label="Twitter" className="transition hover:text-white/80">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" aria-label="Instagram" className="transition hover:text-white/80">
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-slate-200">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-4">
            <div className="flex items-center gap-6">
              <button className="p-2 text-slate-700 md:hidden" aria-label="Open navigation">
                <Menu className="h-6 w-6" />
              </button>
              <div className="text-2xl font-extrabold tracking-[0.4em] text-slate-800">PORTO</div>
              <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.25em] md:flex">
                <Link href="#" className="text-[#b6193a]">
                  Home
                </Link>
                <Link href="#">Features</Link>
                <Link href="#">Shop</Link>
                <Link href="#">Products</Link>
                <Link href="#" className="text-[#b6193a]">
                  Elements
                </Link>
                <Link href="#">Buy Porto!</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <button className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] md:flex">
                <Search className="h-4 w-4" />
                Search
              </button>
              <Link href="#" aria-label="My account">
                <User className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Wishlist" className="hidden md:block">
                <Heart className="h-6 w-6" />
              </Link>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs uppercase tracking-[0.25em]">
                <ShoppingCart className="h-5 w-5" />
                <div className="hidden flex-col leading-none md:flex">
                  <span className="text-[10px] text-slate-500">Shopping Cart</span>
                  <span className="font-semibold text-slate-800">$0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1200px] px-4 py-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.35em] text-slate-500">
                    2016 Cabernet Sauvignon
                  </p>
                  <h1 className="text-5xl font-black uppercase tracking-tight text-slate-900 md:text-6xl">
                    Porto Wine
                  </h1>
                </div>
                <p className="max-w-lg text-base leading-7 text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam lacus, et suscipit lectus porta
                  efficitur.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">Only</span>
                  <span className="text-4xl font-black text-[#b6193a]">
                    <sup className="text-xl align-top">$</sup>39<sup className="text-sm align-top">99</sup>
                  </span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 -translate-y-6 rounded-full bg-[#b6193a]/10 blur-3xl" />
                <img src={heroImages.primaryBottle} alt="Porto wine bottle" className="relative z-10 w-full max-w-md" />
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-3xl bg-[#b6193a] px-8 py-10 text-white md:col-span-2">
                <img
                  src={heroImages.rareWine}
                  alt="Rare wines"
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="relative space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">Rare Wines</p>
                  <h2 className="text-3xl font-bold uppercase tracking-tight">Incredible Discounts</h2>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Only</span>
                    <span className="text-4xl font-black">
                      <sup className="text-xl align-top">$</sup>39<sup className="text-sm align-top">99</sup>
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-white/90"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-[#f5f1f2] px-6 py-10 text-slate-900">
                <img
                  src={heroImages.topUnder100}
                  alt="Top under 100"
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="relative space-y-1">
                  <h3 className="text-3xl font-black uppercase leading-tight tracking-[0.15em]">
                    Top <span className="text-[#b6193a]">10+</span>
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Under $100</p>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-slate-900 hover:text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Filter by:</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveFilter("varietal")}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                    activeFilter === "varietal" ? "text-[#b6193a]" : "text-slate-500"
                  }`}
                >
                  Varietal
                </button>
                <button
                  onClick={() => setActiveFilter("region")}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                    activeFilter === "region" ? "text-[#b6193a]" : "text-slate-500"
                  }`}
                >
                  Region
                </button>
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {filterGroups.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h3 className="text-lg font-semibold italic text-slate-900">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="transition hover:text-[#b6193a]">
                        <Link href="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:text-[#b6193a]"
                  >
                    View All
                    <ChevronDown className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Popular Wines</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {popularProducts.map((product) => (
                <article
                  key={product.image}
                  className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {product.badge && (
                    <span
                      className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white ${badgeStyles[product.badge]}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="flex flex-1 flex-col items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-48 object-contain transition duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        {product.categories.join(", ")}
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-[#b6193a]">
                        {product.name}
                      </h3>
                      {renderStars(product.rating)}
                      <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <span>{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm font-normal text-slate-400 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#b6193a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9f1431]">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto grid max-w-[1200px] gap-6 px-4 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f9f5f3] px-6 py-5">
              <Truck className="h-10 w-10 text-[#b6193a]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">
                  Free Shipping & Return
                </p>
                <p className="text-sm text-slate-600">Free shipping on all orders over $99.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f9f5f3] px-6 py-5">
              <ShieldCheck className="h-10 w-10 text-[#b6193a]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">
                  Money Back Guarantee
                </p>
                <p className="text-sm text-slate-600">100% money back guarantee.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f9f5f3] px-6 py-5">
              <MessageCircle className="h-10 w-10 text-[#b6193a]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">
                  Online Support 24/7
                </p>
                <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Featured Wines</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <article
                  key={product.image}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {product.badge && (
                    <span
                      className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white ${badgeStyles[product.badge]}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-52 object-contain transition duration-500 group-hover:scale-105"
                  />
                  <div className="mt-6 flex flex-col items-center gap-3 text-center">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      {product.categories.join(", ")}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-[#b6193a]">
                      {product.name}
                    </h3>
                    {renderStars(product.rating)}
                    <div className="text-lg font-semibold text-slate-900">{product.price}</div>
                    <button className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-slate-900 hover:text-white">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-20">
          <div className="mx-auto max-w-[900px] px-4 text-center">
            <Wine className="mx-auto mb-6 h-10 w-10 text-[#b6193a]" />
            <p className="text-lg italic text-slate-700">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor tempus rhoncus. Sed et magna
              quis nisi iaculis consectetur. Nullam molestie sed dui at volutpat. Morbi porta malesuada tortor, eu
              hendrerit lectus.”
            </p>
            <div className="mt-6 font-semibold uppercase tracking-[0.35em] text-slate-800">Mary Doe</div>
            <div className="mt-2 flex justify-center gap-1">{renderStars(5)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Staff Favorites</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {staffFavorites.map((product) => (
                <div
                  key={product.image}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-[#b6193a]"
                >
                  <img src={product.image} alt={product.name} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="space-y-2">
                    <h3 className="text-sm平台直属 font-semibold text-slate-900">{product.name}</h3>
                    {renderStars(product.rating)}
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <span>{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs font-normal text-slate-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#b6193a] py-12 text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
                Wine Spectator's Top 100
              </p>
              <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.2em]">Check Now This Year’s List</h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:bg-white/90"
            >
              Shop Now
            </Link>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">From the Blog</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.image}
                  className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                  <div className="space-y-3 px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{post.date}</p>
                    <h3 className="text-lg font-semibold text-slate-900 transition hover:text-[#b6193a]">{post.title}</h3>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam...
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:text-[#b6193a]"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">
                From Instagram - <span className="text-slate-900">@portowineshop</span>
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {instagramImages.map((image) => (
                <Link key={image} href="#" className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt="Instagram highlight"
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#b6193a]/0 transition group-hover:bg-[#b6193a]/70">
                    <Instagram className="h-8 w-8 scale-0 text-white transition duration-300 group-hover:scale-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="bg-white py-10">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-900">Newsletter</h3>
              <p className="mt-2 text-sm text-slate-600">
                Get all the latest information on events, sales and offers.
              </p>
            </div>
            <form className="flex w-full max-w-xl items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">
              <input
                type="email"
                placeholder="Email address..."
                className="flex-1 bg-transparent px-5 py-4 text-sm text-slate-700 outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#b6193a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9f1431]"
              >
                Submit
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 py-12">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 md:grid-cols-4">
            <div className="space-y-4">
              <div className="text-2xl font-extrabold tracking-[0.4em] text-slate-800">PORTO</div>
              <p className="text-sm text-slate-600">
                Porto is the best multipurpose WooCommerce theme. Build the fantastic site easily.
              </p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-[#b6193a] hover:text-[#b6193a]"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-[#b6193a] hover:text-[#b6193a]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-[#b6193a] hover:text-[#b6193a]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <BadgePercent className="h-4 w-4 text-[#b6193a]" />
                Payment Methods
              </div>
              <div className="flex gap-2">
                {["visa", "paypal", "stripe", "verisign"].map((method) => (
                  <span
                    key={method}
                    className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold uppercase text-slate-600"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">{title}</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="transition hover:text-[#b6193a]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          Porto eCommerce. (c) 2025. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

