import { motion } from 'framer-motion'
import { GitlabIcon as GitHub, Linkedin, Twitter, Mail } from 'lucide-react'
import { User } from '../../types/user'

export default function Contact({ userData }: { userData: User }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      id="contact"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="flex space-x-4">
        <a href={userData.contact.github} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <GitHub size={24} />
        </a>
        <a href={userData.contact.linkedin} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <Linkedin size={24} />
        </a>
        <a href={userData.contact.twitter} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <Twitter size={24} />
        </a>
        <a href={`mailto:${userData.contact.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <Mail size={24} />
        </a>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Send Message</button>
      </form>
    </motion.div>
  )
}

