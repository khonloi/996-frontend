"use client";

import React from "react";
import Link from "next/link";
import {
  Apple,
  Monitor,
  Home as HomeIcon,
  Baby,
  Shirt,
  HeartPulse,
  ChevronRight,
  X,
} from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { motion, AnimatePresence } from "framer-motion";
import { Category } from "@/lib/api";

const defaultCategories = [
  { name: "Grocery", icon: Apple, href: "/category/grocery" },
  { name: "Electronics", icon: Monitor, href: "/category/electronics" },
  { name: "Home & Furniture", icon: HomeIcon, href: "/category/home" },
  { name: "Toys & Baby", icon: Baby, href: "/category/toys" },
  { name: "Clothing", icon: Shirt, href: "/category/clothing" },
  { name: "Health & Wellness", icon: HeartPulse, href: "/category/health" },
];

const getIconForCategory = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes("grocery")) return Apple;
  if (normalized.includes("electronic")) return Monitor;
  if (normalized.includes("home") || normalized.includes("furniture"))
    return HomeIcon;
  if (normalized.includes("toy") || normalized.includes("baby")) return Baby;
  if (normalized.includes("cloth") || normalized.includes("apparel"))
    return Shirt;
  if (normalized.includes("health") || normalized.includes("wellness"))
    return HeartPulse;
  return Apple; // Default fallback
};

export default function Sidebar({
  initialCategories = [],
}: {
  initialCategories?: Category[];
}) {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);

  const displayCategories =
    initialCategories.length > 0
      ? initialCategories.map((c) => ({
          name: c.name,
          icon: getIconForCategory(c.name),
          href: `/category/${c.id}`,
        }))
      : defaultCategories;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-16 bg-black/40 z-40 cursor-pointer backdrop-blur-xs"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-gray-200 flex flex-col z-50 overflow-y-auto shadow-2xl"
          >
            {/* Header of Sidebar */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Departments</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                aria-label="Close Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4">
              <ul className="space-y-1">
                {displayCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <li key={category.name}>
                      <Link
                        href={category.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
                          <span className="font-medium text-sm">{category.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
              <div className="bg-brand-primary/10 rounded-lg p-4">
                <p className="text-sm font-bold text-brand-primary mb-1">
                  996+ Member?
                </p>
                <p className="text-xs text-gray-600 mb-3">
                  Sign in to see your exclusive offers.
                </p>
                <button className="w-full bg-brand-primary text-white rounded-full py-2 text-sm font-bold hover:bg-brand-secondary transition-colors cursor-pointer">
                  Sign In
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
