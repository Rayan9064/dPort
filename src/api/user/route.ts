import { NextResponse } from 'next/server'
import { User } from '../../types/user'

// This is a mock function. In a real application, you would fetch this data from your database.
async function getUserData(): Promise<User> {
  return {
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
}

export async function GET() {
  const userData = await getUserData()
  return NextResponse.json(userData)
}