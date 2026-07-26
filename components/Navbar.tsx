"use client";

import Link from "next/link";
import { ShoppingBag, Heart, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-black text-orange-500">
          FoodieGo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link href="/restaurants" className="hover:text-orange-500">
            Restaurants
          </Link>

          <Link href="/favorites" className="hover:text-orange-500">
            Favorites
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 transition hover:bg-gray-100">
            <Heart size={22} />
          </button>

          <button className="rounded-full p-2 transition hover:bg-gray-100">
            <ShoppingBag size={22} />
          </button>

          <button className="rounded-full p-2 transition hover:bg-gray-100 md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}