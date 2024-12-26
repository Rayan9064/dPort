// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { User, Briefcase, Code, GraduationCap, Mail } from 'lucide-react';

// export function PortfolioPreview({ data }) {
//   const [activeSection, setActiveSection] = useState('about');

//   const sections = [
//     { id: 'about', icon: User, label: 'About' },
//     { id: 'experience', icon: Briefcase, label: 'Experience' },
//     { id: 'projects', icon: Code, label: 'Projects' },
//     { id: 'education', icon: GraduationCap, label: 'Education' },
//     { id: 'contact', icon: Mail, label: 'Contact' },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row gap-6">
//       {/* Navigation Sidebar */}
//       <Card className="p-4 md:w-64 flex-shrink-0">
//         <nav className="space-y-2">
//           {sections.map(({ id, icon: Icon, label }) => (
//             <Button
//               key={id}
//               variant={activeSection === id ? 'default' : 'ghost'}
//               className="w-full justify-start gap-2"
//               onClick={() => setActiveSection(id)}
//             >
//               <Icon className="w-4 h-4" />
//               {label}
//             </Button>
//           ))}
//         </nav>
//       </Card>

//       {/* Main Content */}
//       <Card className="flex-1 p-6">
//         <div className="max-w-3xl mx-auto">
//           {activeSection === 'about' && (
//             <div className="space-y-6">
//               <h1 className="text-3xl font-bold">{data.name || 'Your Name'}</h1>
//               <h2 className="text-xl text-muted-foreground">{data.title || 'Professional Title'}</h2>
//               <p className="text-lg">{data.about || 'Tell us about yourself...'}</p>
//             </div>
//           )}
//           {/* Add other sections (experience, projects, etc.) */}
//         </div>
//       </Card>
//     </div>
//   );
// }