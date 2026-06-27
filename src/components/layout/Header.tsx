"use client";

import React from "react";
import { Search, ShoppingCart, User, Menu, Package } from "lucide-react";
import Link from "next/link";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function Header() {
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <header className="bg-brand-primary text-white sticky top-0 z-50 w-full border-b border-brand-secondary">
      <div className="px-6 h-16 flex items-center justify-between w-full">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-brand-secondary rounded-full transition-colors"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            {/* Using a star icon as a placeholder for the 996 spark */}
            <div className="font-bold text-2xl tracking-tight flex items-center">
              <span>996</span>
              <span className="text-brand-accent ml-1">Market</span>
            </div>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              placeholder="Search everything at 996 online and in store"
              className="w-full bg-white text-black rounded-full py-2 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <button className="absolute right-1 top-1 bottom-1 aspect-square bg-brand-primary flex items-center justify-center rounded-full hover:bg-brand-secondary transition-colors">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="flex flex-row items-center gap-2 p-2 hover:bg-brand-secondary rounded-lg transition-colors">
            <Package className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:block">
              My Order
            </span>
          </button>

          <button className="flex flex-row items-center gap-2 p-2 hover:bg-brand-secondary rounded-lg transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:block">Sign In</span>
          </button>

          <button className="flex flex-row items-center gap-2 p-2 hover:bg-brand-secondary rounded-lg transition-colors relative">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-brand-accent text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <span className="text-sm font-medium hidden md:block">$0.00</span>
          </button>
        </div>
      </div>
    </header>
  );
}
