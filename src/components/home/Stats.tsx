import React from 'react';
import { Users, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    value: "10,000+",
    label: "Active Users",
    description: "Professionals trust our platform"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-purple-500" />,
    value: "50,000+",
    label: "Portfolios Created",
    description: "Unique portfolios launched"
  },
  {
    icon: <Award className="w-6 h-6 text-pink-500" />,
    value: "1,000+",
    label: "NFT Themes",
    description: "Exclusive designs available"
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <h3 className="text-lg font-semibold dark:text-gray-300">{stat.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}