import React from 'react';
import { Palette, Coins, Link, Database } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-8 h-8 text-blue-600" />,
    title: 'Customizable Themes',
    description: 'Choose and customize your portfolio themes to match your personal brand.'
  },
  {
    icon: <Coins className="w-8 h-8 text-blue-600" />,
    title: 'NFT Integration',
    description: 'Mint exclusive NFT-based themes for uniqueness and ownership.'
  },
  {
    icon: <Link className="w-8 h-8 text-blue-600" />,
    title: 'Resume and Links',
    description: 'Download resumes and link profiles like LinkedIn, GitHub, etc.'
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: 'Decentralized Hosting',
    description: 'Secure hosting powered by blockchain and IPFS technology.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}