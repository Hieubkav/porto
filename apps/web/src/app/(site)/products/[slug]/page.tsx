"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useMemo, useState } from "react";
import {
  AlertCircle,
  Facebook,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Twitter,
} from "lucide-react";

const productMap = {
  "product-short-name-7": {
    name: "Product Short Name",
    price: 209,
    currency: "$",
    badge: "HOT",
    rating: 5,
    reviewCount: 1,
    sku: "N/A",
    category: "Cabernet Sauvignon",
    shortDescription:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    features: [
      "Any product types that you want – Simple, Configurable",
      "Downloadable/Digital products, virtual products",
      "Inventory management with backordered items",
    ],
    gallery: [
      "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-8.jpg",
    ],
    thumbnails: [
      "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-8-300x300.jpg",
    ],
    additionalInfo: {
      "Production Country": ["France", "Germany", "Italy", "Russia"],
      "Production Year": ["1987", "1995", "2000", "2012"],
    },
    reviews: [
      {
        author: "John Doe",
        date: "December 7, 2020",
        rating: 5,
        content:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      },
    ],
  },
} as const;

const relatedProducts = [
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-16.jpg",
    price: "$39.00",
    category: "Cabernet Sauvignon",
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-15.jpg",
    price: "$49.00",
    category: "Cabernet Sauvignon",
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-10.jpg",
    price: "$79.00",
    category: "Cabernet Sauvignon",
  },
  {
    name: "Product Short Name",
    image: "https://www.portotheme.com/wordpress/porto/shop39/wp-content/uploads/sites/107/2020/12/product-3.jpg",
    price: "$89.00",
    category: "Cabernet Sauvignon",
  },
];

const shareItems = [
  { label: "Facebook", icon: Facebook, href: "#", color: "hover:bg-[#3b5998]" },
  { label: "Twitter", icon: Twitter, href: "#", color: "hover:bg-[#55acee]" },
  { label: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-[#0a66c2]" },
  { label: "Email", icon: Mail, href: "#", color: "hover:bg-[#0b1f33]" },
];

type PageProps = {
  params: {
    slug: string;
  };
};

const tabs = [
  { id: "description", label: "Description" },
  { id: "additional", label: "Additional Information" },
  { id: "reviews", label: "Reviews" },
] as const;

export default function ProductDetailPage({ params }: PageProps) {
  const product = useMemo(() => productMap[params.slug as keyof typeof productMap], [params.slug]);

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("description");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return notFound();
  }

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${index < product.rating ? "fill-[#f2b705] text-[#f2b705]" : "text-slate-300"}`}
    />
  ));

  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-3 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Call us: 800-123-4567</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.3em] text-white/70">
            <Link href="#" className="transition hover:text-white">
              Track Order
            </Link>
            <Link href="#" className="transition hover:text-white">
              About
            </Link>
            <Link href="#" className="transition hover:text-white">
              Our Stores
            </Link>
            <Link href="#" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="#" className="transition hover:text-white">
              Contact
            </Link>
            <Link href="#" className="transition hover:text-white">
              Help &amp; FAQs
            </Link>
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-10">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
          <Link href="/" className="transition hover:text-[#b6193a]">
            Home
          </Link>
          <span>/</span>
          <Link href="/filter" className="transition hover:text-[#b6193a]">
            Shop
          </Link>
          <span>/</span>
          <Link href="#" className="transition hover:text-[#b6193a]">
            Red Wine
          </Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6">
              {product.badge ? (
                <span className="absolute left-6 top-6 rounded-md bg-[#b6193a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {product.badge}
                </span>
              ) : null}
              <div className="flex items-center justify-center">
                <img
                  src={product.gallery[0]}
                  alt={product.name}
                  className="h-[420px] w-auto object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.thumbnails.map((thumbnail) => (
                <button
                  key={thumbnail}
                  type="button"
                  className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 transition hover:border-[#b6193a]"
                >
                  <img src={thumbnail} alt="Thumbnail" className="h-24 w-auto object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>Wine Shop</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Premium Selection</span>
              </div>
              <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">{product.name}</h1>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">{stars}</div>
                <span className="text-sm text-slate-500">({product.reviewCount} customer review)</span>
                <span className="text-sm text-slate-400">|</span>
                <Link href="#review-form" className="text-sm font-semibold text-[#b6193a] hover:underline">
                  Add a review
                </Link>
              </div>
              <div>
                <span className="text-3xl font-semibold text-slate-900">
                  {product.currency}
                  {product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>
            </div>

            <div className="grid gap-3 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">SKU:</span> {product.sku}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Category:</span> {product.category}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-900">
                  Production Country
                  <select
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-[#b6193a] focus:outline-none"
                  >
                    <option value="">Choose an option</option>
                    {product.additionalInfo["Production Country"].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-medium text-slate-900">
                  Production Year
                  <select
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-[#b6193a] focus:outline-none"
                  >
                    <option value="">Choose an option</option>
                    {product.additionalInfo["Production Year"].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-12 items-center overflow-hidden rounded-full border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="flex h-full w-12 items-center justify-center border-r border-slate-200 text-slate-600 transition hover:bg-slate-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-14 text-center text-sm font-semibold text-slate-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="flex h-full w-12 items-center justify-center border-l border-slate-200 text-slate-600 transition hover:bg-slate-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#b6193a]"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#b6193a] hover:text-[#b6193a]"
                >
                  <Heart className="h-4 w-4" />
                  Add to wishlist
                </button>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-100 pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Share</h3>
              <div className="flex flex-wrap gap-3">
                {shareItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:text-white ${item.color}`}
                    aria-label={item.label}
                    title={item.label}
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-slate-200 bg-white p-8">
          <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 transition ${
                  activeTab === tab.id ? "border-b-2 border-[#b6193a] text-[#b6193a]" : "hover:text-[#b6193a]"
                }`}
              >
                {tab.label}
                {tab.id === "reviews" ? ` (${product.reviewCount})` : ""}
              </button>
            ))}
          </div>

          <div className="pt-6 text-sm leading-relaxed text-slate-600">
            {activeTab === "description" ? (
              <div className="space-y-6">
                {product.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 text-[#b6193a]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeTab === "additional" ? (
              <div className="overflow-x-auto">
                <table className="min-w-[320px] w-full border border-slate-200 text-left text-sm text-slate-700">
                  <tbody>
                    {Object.entries(product.additionalInfo).map(([title, values]) => (
                      <tr key={title} className="border-b border-slate-200">
                        <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">{title}</th>
                        <td className="px-4 py-3">{values.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            {activeTab === "reviews" ? (
              <div className="space-y-8">
                {product.reviews.map((review) => (
                  <article key={review.author} className="rounded-xl border border-slate-200 bg-white p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{review.author}</h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating ? "fill-[#f2b705] text-[#f2b705]" : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">{review.content}</p>
                  </article>
                ))}

                <div id="review-form" className="rounded-xl border border-slate-200 bg-white p-6">
                  <h4 className="text-lg font-semibold text-slate-900">Add a review</h4>
                  <form className="mt-4 grid gap-4">
                    <label className="text-sm font-medium text-slate-700">
                      Your rating *
                      <div className="mt-2 flex items-center gap-1 text-[#f2b705]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </label>
                    <label className="text-sm font-medium text-slate-700">
                      Your review *
                      <textarea
                        rows={4}
                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-[#b6193a] focus:outline-none"
                        placeholder="Write something about your experience..."
                        required
                      />
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="text-sm font-medium text-slate-700">
                        Name *
                        <input
                          type="text"
                          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-[#b6193a] focus:outline-none"
                          required
                        />
                      </label>
                      <label className="text-sm font-medium text-slate-700">
                        Email *
                        <input
                          type="email"
                          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-[#b6193a] focus:outline-none"
                          required
                        />
                      </label>
                    </div>
                    <label className="flex items-center gap-2 text-xs text-slate-500">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                    <button
                      type="submit"
                      className="flex items-center gap-2 self-start rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#b6193a]"
                    >
                      Submit review
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-900">Related Products</h2>
            <Link href="#" className="text-sm font-semibold text-[#b6193a] hover:underline">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((related) => (
              <article
                key={related.image}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <img src={related.image} alt={related.name} className="h-48 w-auto object-contain" />
                </div>
                <div className="mt-6 space-y-3 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{related.category}</p>
                  <h3 className="text-base font-semibold text-slate-900">{related.name}</h3>
                  <p className="text-sm font-semibold text-slate-900">{related.price}</p>
                  <button
                    type="button"
                    className="mx-auto flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition group-hover:border-[#b6193a] group-hover:text-[#b6193a]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}




