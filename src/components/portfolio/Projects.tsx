import { motion } from 'framer-motion'
import { User } from '../../types/user'

export default function Projects({ userData }: { userData: User }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userData.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}