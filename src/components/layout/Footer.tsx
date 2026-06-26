import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">996 Market</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">All Departments</Link></li>
              <li><Link href="/store-directory" className="hover:text-brand-accent transition-colors">Store Directory</Link></li>
              <li><Link href="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              <li><Link href="/our-company" className="hover:text-brand-accent transition-colors">Our Company</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/help" className="hover:text-brand-accent transition-colors">Help Center</Link></li>
              <li><Link href="/returns" className="hover:text-brand-accent transition-colors">Returns</Link></li>
              <li><Link href="/recalls" className="hover:text-brand-accent transition-colors">Product Recalls</Link></li>
              <li><Link href="/feedback" className="hover:text-brand-accent transition-colors">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">In The Spotlight</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/deals" className="hover:text-brand-accent transition-colors">Weekly Ad</Link></li>
              <li><Link href="/clearance" className="hover:text-brand-accent transition-colors">Clearance</Link></li>
              <li><Link href="/gift-cards" className="hover:text-brand-accent transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Walmart+</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/plus" className="hover:text-brand-accent transition-colors">Join Walmart+</Link></li>
              <li><Link href="/benefits" className="hover:text-brand-accent transition-colors">Member Benefits</Link></li>
              <li><Link href="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} 996 Market. All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link href="/terms" className="hover:text-brand-accent transition-colors">Terms of Use</Link></li>
            <li><Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
