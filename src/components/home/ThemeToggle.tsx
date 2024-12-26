// import React from 'react';
// import { Moon, Sun } from 'lucide-react';
// import { useDarkMode } from '../hooks/useDarkMode';

// export function ThemeToggle() {
//   const { isDark, setIsDark } = useDarkMode();

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="p-2 rounded-lg bg-opacity-20 backdrop-blur-sm
//         dark:bg-gray-800 dark:text-gray-200 
//         bg-white text-gray-800
//         hover:bg-opacity-30 transition-all"
//       aria-label="Toggle dark mode"
//     >
//       {isDark ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }