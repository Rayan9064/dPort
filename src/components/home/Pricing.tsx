import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "1 Basic NFT Theme",
      "Basic Portfolio Features",
      "Community Support",
      "IPFS Hosting"
    ]
  },
  {
    name: "Pro",
    price: "0.1 ETH",
    features: [
      "5 Premium NFT Themes",
      "Advanced Portfolio Features",
      "Priority Support",
      "Custom Domain",
      "Analytics Dashboard",
      "SBT Integration"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited NFT Themes",
      "White-label Solution",
      "Dedicated Support",
      "Custom Features",
      "API Access",
      "Advanced Analytics"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-web3-gradient glow">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 dark:text-gray-300">Select the perfect plan for your portfolio needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-gradient">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6 dark:text-white">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}