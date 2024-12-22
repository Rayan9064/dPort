import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 bg-web3-gradient">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-gradient animate-gradient">
            Create Stunning Web3 Portfolios
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-600 max-w-xl font-mono">
            Showcase your skills with unique NFT-based themes, tailored for the decentralized future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white px-8 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-colors">
              <span>Browse Themes</span>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Portfolio Creation"
            className="rounded-lg shadow-2xl dark:opacity-80"
          />
        </div>
      </div>
    </div>
  );
}