import React from 'react';

const testimonials = [
  {
    quote: "Portfolio Generator transformed how I showcase my work. The NFT themes make my portfolio truly unique.",
    author: "Sarah Johnson",
    role: "UX Designer"
  },
  {
    quote: "The platform's ease of use and professional themes helped me land my dream job.",
    author: "Michael Chen",
    role: "Software Engineer"
  },
  {
    quote: "Decentralized hosting gives me peace of mind knowing my portfolio is secure and always accessible.",
    author: "Emma Williams",
    role: "Digital Artist"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}