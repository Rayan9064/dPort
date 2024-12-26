'use client'

// import { useEffect, useState } from 'react'
import { User, Briefcase, Code, BookOpen, Mail } from 'lucide-react'
import About from '@/components/portfolio/About'
import Projects from '@/components/portfolio/Projects'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Contact from '@/components/portfolio/Contact'
// import { User as UserType } from '../../types/user'

const navItems = [
  { name: 'About', icon: User },
  { name: 'Projects', icon: Briefcase },
  { name: 'Skills', icon: Code },
  { name: 'Experience', icon: BookOpen },
  { name: 'Contact', icon: Mail },
]

export default function Home() {
//   const [userData, setUserData] = useState<UserType | null>(null)

//   useEffect(() => {
//     async function fetchUserData() {
//       const response = await fetch('/api/user')
//       const data = await response.json()
//       setUserData(data)
//     }
//     fetchUserData()
//   }, [])

  const userData = {
    name: "John Doe",
    about: "I'm a passionate web developer with a keen interest in creating beautiful and functional websites. With a strong foundation in modern web technologies, I strive to build responsive and user-friendly applications.",
    projects: [
      { name: "Project 1", description: "A brief description of Project 1" },
      { name: "Project 2", description: "A brief description of Project 2" },
      { name: "Project 3", description: "A brief description of Project 3" },
    ],
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "HTML", "CSS", "Tailwind CSS"],
    experiences: [
      {
        company: "Tech Corp",
        position: "Senior Web Developer",
        duration: "Jan 2020 - Present",
        description: "Led a team of developers in creating responsive web applications using React and Node.js.",
      },
      {
        company: "Web Solutions Inc",
        position: "Full Stack Developer",
        duration: "Jun 2017 - Dec 2019",
        description: "Developed and maintained various client websites using modern web technologies.",
      },
    ],
    contact: {
      email: "john.doe@example.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  }

//   if (!userData) {
//     return <div className="flex justify-center items-center min-h-screen">Loading...</div>
//   }

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-100 dark:bg-gray-800 p-4 fixed h-full overflow-auto">
        <h1 className="text-2xl font-bold mb-8">{userData.name}</h1>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-4">
              <a
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center w-full p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <item.icon size={20} className="mr-2" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-8 ml-64">
        <About userData={userData} />
        <Projects userData={userData} />
        <Skills userData={userData} />
        <Experience userData={userData} />
        <Contact userData={userData} />
      </main>
    </div>
  )
}

