"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface MainNavigationItem {
  label: string;
  href: `/${string}` | "/";
  isHighlighted?: boolean;
}
import {
  BadgePercent,
  ChevronDown,
  ChevronRight,
  Eye,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Search,
  ShieldCheck,
  Star,
  StarHalf,
  Truck,
  Twitter,
  User,
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
  primary:
    "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2021/09/shop39-intro-1.png",
  rareWine:
    "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/banner-1.jpg",
  topUnder100:
    "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/banner-2.jpg",
};

const headerLinks = ["Theo dõi đơn hàng", "Về chúng tôi", "Cửa hàng", "Blog", "Liên hệ", "Trợ trợ & Câu hỏi thường gặp"];

const mainNavigation: MainNavigationItem[] = [
  { label: "Trang chủ", href: "/", isHighlighted: true },
  { label: "Tính năng", href: "/features" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Mặt hàng", href: "/items" },
  { label: "Yếu tố", href: "/elements", isHighlighted: true },
  { label: "Mua Porto!", href: "/buy" },
];

const filterTabs = [
  { id: "varietal", label: "Loại" },
  { id: "region", label: "Vùng" },
] as const;

const varietalColumns: ColumnGroup[] = [
  {
    title: "Rượu Đỏ",
    items: ["Bordeaux Blends", "Cabernet Sauvignon", "Merlot", "Pinot Noir", "Sangiovese"],
  },
  {
    title: "Rượu Trắng",
    items: ["Chardonnay", "Pinot Gris/Grigio", "Riesling", "Sauvignon Blanc", "Hỗn hợp Bordeaux Trắng"],
  },
  {
    title: "Khác",
    items: ["Champagne", "Tráng miệng & Đặc sản", "Rượu Hồng", "Sake", "Rượu có ga"],
  },
  {
    title: "Lựa chọn",
    items: ["Từ $40 đến $60", "Từ $60 đến $100", "Từ $100 đến $200", "Từ $200 đến $500", "Bán chạy nhất"],
  },
];

const regionColumns: ColumnGroup[] = [
  {
    title: "Pháp",
    items: ["Bordeaux", "Burgundy", "Champagne", "Rhone", "Thung lũng Loire"],
  },
  {
    title: "Ý",
    items: ["Piedmont", "Tuscany", "Veneto", "Sicily", "Friuli-Venezia-Giulia"],
  },
  {
    title: "Mỹ",
    items: ["California", "Central Coast", "Napa Valley", "Sonoma County", "Washington"],
  },
  {
    title: "Quốc gia",
    items: ["Úc", "Áo", "Đức", "Bồ Đào Nha", "Tây Ban Nha"],
  },
];

const popularProducts: Product[] = [
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-16.jpg",
    price: "$39.00",
    rating: 0,
    categories: ["Hỗn hợp Bordeaux", "Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-15.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    badge: "sale",
    rating: 5,
    categories: ["Áo", "Sake"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-14.jpg",
    price: "$89.00",
    originalPrice: "$99.00",
    badge: "sale",
    rating: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-13.jpg",
    price: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
];

const featuredProducts: Product[] = [
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-8.jpg",
    price: "$209.00",
    badge: "hot",
    rating: 5,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-7.jpg",
    price: "$49.00",
    badge: "hot",
    rating: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-6.jpg",
    price: "$59.00",
    badge: "hot",
    rating: 5,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-5.jpg",
    price: "$69.00",
    badge: "hot",
    rating: 0,
    categories: ["Cabernet Sauvignon", "Có ga"],
  },
];

const staffFavorites: Product[] = [
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-12.jpg",
    price: "$29.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-11.jpg",
    price: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-10.jpg",
    price: "$79.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-9.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-16.jpg",
    price: "$39.00",
    rating: 0,
    categories: ["Hỗn hợp Bordeaux"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-15.jpg",
    price: "$49.00",
    originalPrice: "$59.00",
    rating: 5,
    categories: ["Áo", "Sake"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-14.jpg",
    price: "$89.00",
    originalPrice: "$99.00",
    rating: 4,
    categories: ["Cabernet Sauvignon"],
  },
  {
    name: "Rượu Vang Đặc biệt",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-13.jpg",
    price: "$59.00",
    rating: 0,
    categories: ["Cabernet Sauvignon"],
  },
];

const blogPosts = [
  {
    title: "Khám phá thế giới rượu vang hảo hạng",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/POST-1.jpg",
    date: "7 tháng 12, 2020",
  },
  {
    title: "Khám phá thế giới rượu vang hảo hạng",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/post-2.jpg",
    date: "7 tháng 12, 2020",
  },
  {
    title: "Khám phá thế giới rượu vang hảo hạng",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/post-3.jpg",
    date: "7 tháng 12, 2020",
  },
];

const instagramImages = [
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-1.jpg",
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-2.jpg",
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-3.jpg",
  "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/instagram-4.jpg",
];

const footerLinks: Record<string, string[]> = {
  "Dịch vụ Khách hàng": [
    "Trợ trợ & Câu hỏi thường gặp",
    "Theo dõi đơn hàng",
    "Vận chuyển & Giao hàng",
    "Lịch sử đơn hàng",
    "Tìm kiếm nâng cao",
    "Đăng nhập",
  ],
  "Về chúng tôi": ["Về chúng tôi", "Sự nghiệp", "Cửa hàng của chúng tôi", "Bán hàng doanh nghiệp"],
  "Thông tin thêm": ["Đối tác", "Giới thiệu bạn bè", "Ưu đãi Student Beans", "Phiếu quà tặng"],
};

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  hot: "bg-[#b6193a]",
  sale: "bg-[#2f6f37]",
  new: "bg-[#1c4eb4]",
};

const testimonial = {
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor tempus rhoncus. Sed et magna quis nisi iaculis consectetur. Nullam molestie sed dui at volutpat.",
  author: "Trần Thị Mai",
  role: "Khách hàng",
  avatar: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/avatar.png",
};
function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={`full-${index}`} className="h-4 w-4 fill-[#f1b856] text-[#f1b856]" strokeWidth={0} />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-[#f1b856] text-[#f1b856]" strokeWidth={0} />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} className="h-4 w-4 text-slate-300" />
      ))}
    </div>
  );
}

function ProductCard({ product, variant = "solid" }: { product: Product; variant?: "solid" | "outline" }) {
  const buttonBase =
    "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] transition";
  const buttonClass =
    variant === "solid"
      ? `${buttonBase} bg-[#b6193a] text-white hover:bg-[#9b1330]`
      : `${buttonBase} border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white`;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white px-6 pb-7 pt-6 shadow-[0_28px_60px_-45px_rgba(30,41,59,0.55)] transition hover:-translate-y-1 hover:shadow-[0_34px_70px_-40px_rgba(30,41,59,0.55)]">
      {product.badge && (
        <span
          className={`absolute left-6 top-6 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white ${badgeStyles[product.badge]}`}
        >
          {product.badge}
        </span>
      )}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-[#b6193a] hover:text-[#b6193a]"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-[#b6193a] hover:text-[#b6193a]"
          aria-label="Quick view"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-2 flex flex-1 flex-col items-center text-center">
        <div className="relative flex h-52 w-full max-w-[230px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-slate-100/80" />
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 h-full w-full max-w-[220px] object-contain transition duration-500 hover:scale-105"
          />
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            {product.categories.join(", ")}
          </p>
          <h3 className="text-base font-semibold text-slate-900 transition hover:text-[#b6193a]">{product.name}</h3>
          <RatingStars rating={product.rating} />
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span>{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm font-medium text-slate-400 line-through">{product.originalPrice}</span>
            )}
          </div>
        </div>
        <a href="#" className={buttonClass}>
          <Eye className="h-4 w-4" />
          Xem chi tiết
        </a>
      </div>
    </article>
  );
}
export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterTabs)[number]["id"]>("varietal");

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
                Gọi chúng tôi: <span className="font-semibold">800-123-4567</span>
              </span>
            </div>
            <nav className="hidden items-center gap-5 uppercase tracking-[0.25em] md:flex">
              {headerLinks.map((item) => (
                <Link key={item} href="#" className="transition hover:text-white/80">
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
                {mainNavigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href as any}
                    className={item.isHighlighted ? "text-[#b6193a]" : "text-slate-700 hover:text-[#b6193a]"}
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
              <Link href="#" aria-label="My account">
                <User className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Wishlist" className="hidden md:block">
                <Heart className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#f4f4f4]">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#b6193a]/10 blur-3xl" />
            <div className="absolute -left-16 top-1/2 hidden -translate-y-1/2 text-[220px] font-black uppercase tracking-[0.06em] text-slate-200/60 md:block">
              PORTO
            </div>
            <div className="absolute right-[-60px] bottom-[-40px] hidden text-[170px] font-black uppercase tracking-[0.08em] text-slate-200/45 md:block">
              WINE
            </div>
          </div>
          <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 py-16 md:grid-cols-[minmax(0,1fr)_420px] md:py-20">
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                <span className="h-[2px] w-10 bg-[#b6193a]" />
                2016 Cabernet Sauvignon
              </span>
              <h1 className="text-5xl font-black uppercase tracking-[0.03em] text-slate-900 md:text-6xl">Rượu Vang Porto</h1>
              <p className="max-w-md text-base leading-7 text-slate-600">
                Khám phá bộ sưu tập rượu vang đặc biệt với hương vị tinh tế và chất lượng vượt trội.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Chỉ với</span>
                <span className="text-5xl font-black text-[#b6193a]">
                  <sup className="text-xl align-top">$</sup>39<sup className="text-sm align-top">99</sup>
                </span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Mua ngay
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] rounded-[36px] bg-white/85 p-8 shadow-[0_40px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
                <img src={heroImages.primary} alt="Porto wine collection" className="w-full object-contain" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-[1200px] gap-6 px-4 pb-16 md:grid-cols-3 md:gap-8">
            <div className="relative overflow-hidden rounded-[32px] bg-[#24181d] px-10 py-12 text-white md:col-span-2">
              <img src={heroImages.rareWine} alt="Rare wines" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">Rượu Hiếm</p>
                  <h2 className="mt-2 text-4xl font-bold uppercase tracking-tight">Giảm Giá Đặc Biệt</h2>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Chỉ với</span>
                  <span className="text-4xl font-black">
                    <sup className="text-xl align-top">$</sup>39<sup className="text-sm align-top">99</sup>
                  </span>
                </div>
              </div>
              <Link
                href="#"
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-white/90"
              >
                Mua ngay
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-[32px] bg-[#f5f1f2] px-8 py-12 text-slate-900">
              <img src={heroImages.topUnder100} alt="Top under 100" className="absolute inset-0 h-full w-full object-cover opacity-15" />
              <div className="relative space-y-3">
                <h3 className="text-4xl font-black uppercase leading-tight tracking-[0.12em]">
                  Top <span className="text-[#b6193a]">10+</span>
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Dưới $100</p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-slate-900 hover:text-white"
                >
                  Mua ngay
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="rounded-[34px] border border-slate-200 bg-[#f6f6f6] shadow-[0_30px_70px_-60px_rgba(15,23,42,0.5)]">
              <div className="flex flex-col gap-5 border-b border-slate-200 px-8 py-6 md:flex-row md:items-center md:justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Lọc theo:</h2>
                <div className="w-full overflow-hidden rounded-full border border-slate-200 bg-white text-center md:w-auto">
                  <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-[0.3em]">
                    {filterTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveFilter(tab.id)}
                        className={`relative py-3 transition after:absolute after:left-8 after:right-8 after:-bottom-[1px] after:h-[2px] ${
                          activeFilter === tab.id ? "text-[#b6193a] after:bg-[#b6193a]" : "text-slate-500 after:bg-transparent hover:text-[#b6193a]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-6 px-8 py-10 md:grid-cols-4 md:divide-x md:divide-slate-200">
                {filterGroups.map((group) => (
                  <div key={group.title} className="space-y-5 md:px-6">
                    <h3 className="text-lg font-semibold italic text-slate-900">{group.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Link href="#" className="transition hover:text-[#b6193a]">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:text-[#b6193a]"
                    >
                      Xem tất cả
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-4">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Rượu Phổ Biến</h2>
              <Link
                href="#"
                className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600 transition hover:text-[#b6193a] md:inline-flex"
              >
                Xem tất cả
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {popularProducts.map((product) => (
                <ProductCard key={`${product.image}-popular`} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto grid max-w-[1200px] gap-6 px-4 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f9f5f3] px-6 py-5">
              <Truck className="h-10 w-10 text-[#b6193a]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">Miễn phí Vận chuyển & Trả hàng</p>
                <p className="text-sm text-slate-600">Miễn phí vận chuyển cho tất cả đơn hàng trên $99.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f9f5f3] px-6 py-5">
              <ShieldCheck className="h-10 w-10 text-[#b6193a]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">Bảo lãnh Hoàn tiền</p>
                <p className="text-sm text-slate-600">Bảo lãnh hoàn tiền 100%.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f9f5f3] px-6 py-5">
              <MessageCircle className="h-10 w-10 text-[#b6193a]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">Hỗ trợ Trực tuyến 24/7</p>
                <p className="text-sm text-slate-600">Luôn sẵn sàng hỗ trợ bạn mọi lúc.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-4">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Rượu Nổi Bật</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={`${product.image}-featured`} product={product} variant="outline" />
              ))}
            </div>
          </div>
        </section>
        <section
          className="py-20"
          style={{
            backgroundImage:
              "url('https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/testimonial.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto max-w-[720px] px-4">
            <div className="rounded-[32px] bg-white/90 px-10 py-12 text-center shadow-[0_30px_70px_-55px_rgba(15,23,42,0.6)] backdrop-blur">
              <div className="mb-4 flex justify-center text-[#b6193a]">
                <Quote className="h-10 w-10" />
              </div>
              <p className="text-lg italic text-slate-700">"{testimonial.quote}"</p>
              <div className="mt-6 flex flex-col items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-20 w-20 rounded-full border-4 border-white shadow"
                />
                <div className="font-semibold uppercase tracking-[0.35em] text-slate-800">{testimonial.author}</div>
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500">{testimonial.role}</div>
                <RatingStars rating={5} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pb-4 pt-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Ưu thích của Nhân viên</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {staffFavorites.map((product) => (
                <div
                  key={`${product.image}-favorite`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-[#b6193a]"
                >
                  <img src={product.image} alt={product.name} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                    <RatingStars rating={product.rating} />
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
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">Top 100 Rượu Vang</p>
              <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.2em]">Xem Ngay Danh Sách Năm Nay</h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:bg-white/90"
            >
              Shop Now
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Từ Blog</h2>
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
                      Đọc thêm
                      <ChevronRight className="h-3 w-3" />
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
                Từ Instagram - <span className="text-slate-900">@portowineshop</span>
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
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-900">Bản tin</h3>
              <p className="mt-2 text-sm text-slate-600">Nhận tất cả thông tin mới nhất về sự kiện, bán hàng và ưu đãi.</p>
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
                Phương thức Thanh toán
              </div>
              <div className="flex gap-2 text-xs font-semibold uppercase text-slate-600">
                {['Visa', 'Paypal', 'Stripe', 'Verisign'].map((method) => (
                  <span key={method} className="rounded-md bg-slate-200 px-3 py-1">{method}</span>
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
