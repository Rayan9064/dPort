import { motion } from 'framer-motion'
import { User } from '../../types/user'

export default function Experience({ userData }: { userData: User }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
      id="experience"
    >
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {userData.experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <h4 className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{exp.duration}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

