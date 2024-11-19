'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Code, Briefcase, User, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8">
        {/* <header className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jane Doe
          </motion.h1>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </header> */}

        <motion.section 
          className="text-center mb-16"
          {...fadeIn}
        >
          <Avatar className="w-32 h-32 mx-auto mb-4">
            <AvatarImage src="https://github.com/shadcn.png" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="text-4xl font-bold mb-4">Python Developer</h2>
          <p className="text-xl text-muted-foreground mb-8">Crafting digital experiences with code and creativity</p>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </motion.section>

        {/* <motion.section 
          className="mb-16"
          {...fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <Card>
            <CardContent className="pt-6">
              <p>I'm a passionate full stack developer with 5 years of experience in building web applications. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.</p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="mb-16"
          {...fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'].map((skill) => (
              <Card key={skill}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2" />
                    {skill}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </motion.section> */}

        {/* <motion.section 
          className="mb-16"
          {...fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with React and Node.js' },
              { title: 'Task Management App', description: 'A productivity app developed using React Native and Firebase' },
              { title: 'Data Visualization Dashboard', description: 'An interactive dashboard created with D3.js and Vue.js' },
              { title: 'AI Chatbot', description: 'An intelligent chatbot powered by machine learning algorithms' }
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.section> */}

        {/* <motion.section 
          {...fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-4">
                <a href="mailto:jane@example.com" className="flex items-center">
                  <Mail className="mr-2" />
                  jane@example.com
                </a>
                <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Briefcase className="mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <User className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.section> */}
      </div>
    </div>
  )
}