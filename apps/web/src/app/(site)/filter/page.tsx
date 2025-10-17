
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  BadgePercent,
  ChevronDown,
  ChevronRight,
  Heart,
  Instagram,
  Mail,
  Menu,
  Search,
  ShoppingCart,
  Star,
  StarHalf,
  Truck,
  Twitter,
  User,
} from "lucide-react";

type NavigationItem = {
  label: string;
  href: `/${string}` | "/";
  isHighlighted?: boolean;
};

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  badge?: "hot" | "sale" | "new";
  rating: number;
  reviews: number;
  categories: string[];
};

const headerLinks = [
  "Theo dõi đơn hàng",
  "Về chúng tôi",
  "Cửa hàng",
  "Blog",
  "Liên hệ",
  "Trợ trợ & Câu hỏi thường gặp",
];

const mainNavigation: NavigationItem[] = [
  { label: "Trang chủ", href: "/", isHighlighted: true },
  { label: "Tính năng", href: "/features" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Mặt hàng", href: "/items" },
  { label: "Yếu tố", href: "/elements", isHighlighted: true },
  { label: "Mua Porto!", href: "/buy" },
];

const productCategories = [
  { name: "Quốc gia", count: 7 },
  { name: "Pháp", count: 6 },
  { name: "Ý", count: 7 },
  { name: "Khác", count: 7 },
  { name: "Rượu đỏ", count: 16 },
  { name: "Tuyển chọn", count: 5 },
  { name: "Mỹ", count: 7 },
  { name: "Rượu trắng", count: 6 },
];

const productionYearFilters = [
  { label: "1987", count: 1 },
  { label: "1995", count: 1 },
  { label: "2000", count: 3 },
  { label: "2012", count: 4 },
];

const productionCountryFilters = [
  { label: "France", count: 2 },
  { label: "Germany", count: 6 },
  { label: "Italy", count: 4 },
  { label: "Russia", count: 4 },
];

const sortOptions = [
  { label: "Mặc định", value: "default" },
  { label: "Phổ biến", value: "popularity" },
  { label: "Đánh giá cao", value: "rating" },
  { label: "Mới nhất", value: "latest" },
  { label: "Giá: thấp đến cao", value: "price-asc" },
  { label: "Giá: cao đến thấp", value: "price-desc" },
];

const perPageOptions = [12, 24, 36];

const filterBreadcrumb = [
  { label: "Trang chủ", href: "/" },
  { label: "Cửa hàng", href: "/filter" },
];

const featuredProducts: Product[] = [
  {
    id: 201,
    name: "Porto Reserva 2016",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-1.jpg",
    price: "$29.00",
    rating: 0,
    reviews: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 202,
    name: "Cabernet Vintage 2015",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-2.jpg",
    price: "$49.00",
    rating: 5,
    reviews: 12,
    categories: ["Riesling"],
  },
  {
    id: 203,
    name: "Estate Collection 2012",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-3.jpg",
    price: "$89.00",
    rating: 5,
    reviews: 9,
    categories: ["Cabernet Sauvignon"],
  },
];


const products: Product[] = [
  {
    id: 1,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-16.jpg",
    price: "$39.00",
    rating: 0,
    reviews: 0,
    categories: ["Bordeaux Blends", "Burgundy", "Cabernet Sauvignon"],
  },
  {
    id: 2,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-15.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    badge: "sale",
    rating: 5,
    reviews: 6,
    categories: ["Austria", "Riesling", "Sake"],
  },
  {
    id: 3,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-14.jpg",
    price: "$89.00",
    originalPrice: "$99.00",
    badge: "sale",
    rating: 4,
    reviews: 18,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 4,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-13.jpg",
    price: "$59.00",
    rating: 0,
    reviews: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 5,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-12.jpg",
    price: "$29.00",
    rating: 0,
    reviews: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 6,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-11.jpg",
    price: "$59.00",
    rating: 0,
    reviews: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 7,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-10.jpg",
    price: "$79.00",
    rating: 0,
    reviews: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 8,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-9.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    badge: "sale",
    rating: 0,
    reviews: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 9,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-8.jpg",
    price: "$209.00",
    badge: "hot",
    rating: 5,
    reviews: 3,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 10,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-7.jpg",
    price: "$49.00",
    badge: "hot",
    rating: 4,
    reviews: 5,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 11,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-6.jpg",
    price: "$59.00",
    badge: "hot",
    rating: 5,
    reviews: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    id: 12,
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-5.jpg",
    price: "$69.00",
    badge: "hot",
    rating: 0,
    reviews: 0,
    categories: ["Champagne", "Portugal"],
  },
];


function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#b6193a]">
      {Array.from({ length: 5 }).map((_, index) => {
        const value = index + 1;
        if (rating >= value) {
          return <Star key={index} className="h-4 w-4 fill-current" />;
        }
        if (rating > value - 1) {
          return <StarHalf key={index} className="h-4 w-4 fill-current" />;
        }
        return <Star key={index} className="h-4 w-4 text-slate-300" />;
      })}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_22px_60px_-40px_rgba(15,23,42,0.55)]">
      <div className="relative bg-[#f9f5f3] p-6">
        {product.badge && (
          <span
            className={`absolute left-6 top-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
              product.badge === "sale"
                ? "bg-[#b6193a] text-white"
                : product.badge === "hot"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900"
            }`}
          >
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-64 w-full max-w-[260px] rounded-[22px] object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#b6193a] hover:text-[#b6193a]"
          aria-label={`Thêm ${product.name} vào yêu thích`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
          <span>{product.categories[0]}</span>
          <RatingStars rating={product.rating} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-slate-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
          )}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          {product.reviews > 0 ? `${product.reviews} đánh giá` : "Chưa có đánh giá"}
        </p>
        <button
          type="button"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#b6193a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9f1431]"
        >
          Thêm vào giỏ
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}


export default function FilterPage() {
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const paginatedProducts = useMemo(() => products.slice(0, perPage), [perPage]);

  const resultLabel = useMemo(() => {
    const total = products.length;
    const showing = Math.min(perPage, total);
    return `Hiển thị 1–${showing} trong ${total} sản phẩm`;
  }, [perPage]);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="bg-[#b6193a] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-3 text-xs uppercase tracking-[0.3em]">
            <div className="flex flex-wrap items-center gap-6">
              <div className="hidden items-center gap-2 md:flex">
                <span className="font-semibold">Hotline:</span>
                <a href="tel:+18001234567" className="text-white transition hover:text-white/70">
                  800-123-4567
                </a>
              </div>
              <div className="hidden gap-3 md:flex">
                {headerLinks.map((link) => (
                  <a key={link} href="#" className="transition hover:text-white/70">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
              <a href="#" className="transition hover:text-white/70">
                USD
              </a>
              <span className="h-4 w-px bg-white/30" />
              <a href="#" className="transition hover:text-white/70">
                ENG
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-4">
          <div className="flex items-center gap-6">
            <button className="p-2 text-slate-700 md:hidden" aria-label="Mở menu">
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-2xl font-extrabold tracking-[0.4em] text-slate-900">PORTO</div>
            <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.25em] md:flex">
              {mainNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href as any}
                  className={item.isHighlighted ? "text-[#b6193a]" : "text-slate-700 transition hover:text-[#b6193a]"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4 text-slate-700">
            <button className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] md:flex">
              <Search className="h-4 w-4" />
              Tìm kiếm
            </button>
            <Link href="#" aria-label="Tài khoản của tôi">
              <User className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Giỏ hàng">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-6">
          <nav className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
            {filterBreadcrumb.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <Link href={item.href} className="transition hover:text-[#b6193a]">
                  {item.label}
                </Link>
                {index < filterBreadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </div>
            ))}
          </nav>
          <h1 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">Cửa hàng</h1>
        </div>
      </section>


      <main className="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 lg:grid-cols-[296px_1fr]">
        <aside className="space-y-8">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-900">Danh mục</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {productCategories.map((category) => (
                <li key={category.name} className="flex items-center justify-between">
                  <a href="#" className="transition hover:text-[#b6193a]">
                    {category.name}
                  </a>
                  <span className="rounded-full bg-[#f4f4f4] px-2 py-1 text-xs font-semibold text-slate-500">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-900">Lọc theo giá</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>$20</span>
                <span>$210</span>
              </div>
              <div className="relative h-2 rounded-full bg-slate-100">
                <div className="absolute inset-y-0 left-[12%] right-[24%] rounded-full bg-[#b6193a]" />
                <button
                  type="button"
                  className="absolute left-[12%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white bg-[#b6193a] shadow-md"
                  aria-label="Giá tối thiểu"
                />
                <button
                  type="button"
                  className="absolute right-[24%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white bg-[#b6193a] shadow-md"
                  aria-label="Giá tối đa"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span className="font-semibold">Giá:</span>
                <span className="font-semibold text-[#b6193a]">$35 — $180</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-[#b6193a] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9f1431]"
              >
                Lọc
              </button>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-900">Năm sản xuất</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {productionYearFilters.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <a href="#" className="transition hover:text-[#b6193a]">
                    {item.label}
                  </a>
                  <span className="text-xs text-slate-400">({item.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-900">Quốc gia</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {productionCountryFilters.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <a href="#" className="transition hover:text-[#b6193a]">
                    {item.label}
                  </a>
                  <span className="text-xs text-slate-400">({item.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-900">Nổi bật</h2>
            <ul className="mt-6 space-y-5">
              {featuredProducts.map((product) => (
                <li key={product.id} className="flex gap-4">
                  <Link href="#" className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-slate-200 bg-[#f9f5f3]">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </Link>
                  <div>
                    <Link href="#" className="text-sm font-semibold text-slate-900 transition hover:text-[#b6193a]">
                      {product.name}
                    </Link>
                    <div className="mt-1">
                      <RatingStars rating={product.rating} />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">{product.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="space-y-8">
          <div className="rounded-[30px] border border-slate-200 bg-white px-6 py-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div className="flex flex-wrap items-center gap-4">
                <label htmlFor="sort-select" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Sắp xếp theo:
                </label>
                <div className="relative">
                  <select
                    id="sort-select"
                    className="appearance-none rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#b6193a]"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">Hiển thị:</span>
                <div className="relative">
                  <select
                    className="appearance-none rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#b6193a]"
                    value={perPage}
                    onChange={(event) => setPerPage(Number(event.target.value))}
                  >
                    {perPageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                    viewMode === "grid"
                      ? "border-[#b6193a] bg-[#b6193a] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#b6193a] hover:text-[#b6193a]"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  Lưới
                </button>
                <button
                  type="button"
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                    viewMode === "list"
                      ? "border-[#b6193a] bg-[#b6193a] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#b6193a] hover:text-[#b6193a]"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  Danh sách
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>{resultLabel}</span>
              <Link href="#" className="inline-flex items-center gap-2 text-slate-900 transition hover:text-[#b6193a]">
                <span>Tùy chỉnh bộ lọc</span>
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3" : "space-y-6"}>
            {paginatedProducts.map((product) =>
              viewMode === "grid" ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <div
                  key={product.id}
                  className="flex flex-col gap-6 rounded-[28px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_60px_-40px_rgba(15,23,42,0.55)] md:flex-row"
                >
                  <div className="relative w-full max-w-[220px] overflow-hidden rounded-[22px] bg-[#f9f5f3]">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    {product.badge && (
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
                          product.badge === "sale"
                            ? "bg-[#b6193a] text-white"
                            : product.badge === "hot"
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-900"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                      <span>{product.categories.join(", ")}</span>
                      <RatingStars rating={product.rating} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus mauris, porttitor eu lacus
                      vitae, feugiat accumsan ligula.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-slate-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-[#b6193a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9f1431]"
                      >
                        Thêm vào giỏ
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-[#b6193a] hover:text-[#b6193a]"
                      >
                        Thêm yêu thích
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-slate-200 bg-white px-6 py-4 text-sm">
            <span className="text-slate-600">{resultLabel}</span>
            <div className="flex items-center gap-2">
              <button className="h-9 w-9 rounded-full border border-slate-200 text-slate-500 transition hover:border-[#b6193a] hover:text-[#b6193a]">
                1
              </button>
              <button className="h-9 w-9 rounded-full border border-slate-200 text-slate-500 transition hover:border-[#b6193a] hover:text-[#b6193a]">
                2
              </button>
              <button className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-[#b6193a] hover:text-[#b6193a]">
                Tiếp
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>


      <footer className="border-t border-slate-200 bg-white">
        <div className="bg-white py-10">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-900">Bản tin</h3>
              <p className="mt-2 text-sm text-slate-600">
                Nhận tất cả thông tin mới nhất về sự kiện, khuyến mãi và ưu đãi đặc biệt.
              </p>
            </div>
            <form className="flex w-full max-w-xl items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">
              <input
                type="email"
                placeholder="Địa chỉ email..."
                className="flex-1 bg-transparent px-5 py-4 text-sm text-slate-700 outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#b6193a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9f1431]"
              >
                Gửi
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
                Porto là giao diện WooCommerce đa dụng tốt nhất. Xây dựng website tuyệt vời thật dễ dàng.
              </p>
              <div className="flex gap-2">
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
                Phương thức thanh toán
              </div>
              <div className="flex gap-2 text-xs font-semibold uppercase text-slate-600">
                {["Visa", "Paypal", "Stripe", "Verisign"].map((method) => (
                  <span key={method} className="rounded-md bg-slate-200 px-3 py-1">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">Dịch vụ khách hàng</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {["Hỗ trợ & FAQs", "Theo dõi đơn hàng", "Vận chuyển & giao hàng", "Lịch sử đơn hàng"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="transition hover:text-[#b6193a]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">Về chúng tôi</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {["Thông tin", "Cơ hội nghề nghiệp", "Hệ thống cửa hàng", "Bán hàng doanh nghiệp"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="transition hover:text-[#b6193a]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">Thông tin thêm</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {["Affiliates", "Giới thiệu bạn bè", "Ưu đãi sinh viên", "Phiếu quà tặng"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="transition hover:text-[#b6193a]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          Porto eCommerce. © 2025. All Rights Reserved.
        </div>
      </footer>

      <div className="bg-[#f8f1ec] py-10">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: <Truck className="h-10 w-10 text-[#b6193a]" />,
              title: "Miễn phí vận chuyển & trả hàng",
              description: "Miễn phí vận chuyển cho tất cả đơn hàng trên $99.",
            },
            {
              icon: <BadgePercent className="h-10 w-10 text-[#b6193a]" />,
              title: "Ưu đãi hấp dẫn",
              description: "Giảm giá đặc biệt cho thành viên Porto Rewards.",
            },
            {
              icon: <Mail className="h-10 w-10 text-[#b6193a]" />,
              title: "Liên hệ hỗ trợ 24/7",
              description: "Đội ngũ tư vấn luôn sẵn sàng giúp đỡ bạn.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5">
              {item.icon}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
