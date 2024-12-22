import React from 'react';
import { Wallet, Paintbrush, Share2 } from 'lucide-react';

const steps = [
  {
    icon: <Wallet className="w-12 h-12 text-blue-600" />,
    title: "Sign Up or Connect Wallet",
    description: "Get started by connecting your Web3 wallet or creating an account."
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
    title: "Select and Customize Your Theme",
    description: "Choose from our collection of NFT themes and make it your own."
  },
  {
    icon: <Share2 className="w-12 h-12 text-blue-600" />,
    title: "Publish Your Portfolio and Share",
    description: "Go live with your portfolio and share it with the world."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-[200%] translate-y-12">
                  <div className="w-12 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}