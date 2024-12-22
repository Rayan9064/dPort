import { motion } from 'framer-motion'
import { User } from '../../types/user'

export default function About({ userData }: { userData: User }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 mb-16"
      id="about"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">{userData.about}</p>
    </motion.div>
  )
}

