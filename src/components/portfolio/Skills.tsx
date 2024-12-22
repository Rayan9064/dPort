import { motion } from 'framer-motion'
import { User } from '../../types/user'

export default function Skills({ userData }: { userData: User }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {userData.skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

