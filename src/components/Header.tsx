import React from 'react';
import { Wallet, Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed w-full bg-background-dark/80 backdrop-blur-sm z-50 border-b border-purple-900/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold font-mono text-gradient">Portfolio Generator</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-primary-light transition-colors">Home</Link>
          <Link href="/themes" className="text-gray-300 hover:text-primary-light transition-colors">Themes</Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-primary-light transition-colors">Dashboard</Link>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-primary to-primary-light text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <Wallet size={20} />
            <span>Connect Wallet</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}