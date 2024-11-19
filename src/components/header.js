'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-4">
        {/* <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Nishant Rana" />
          <AvatarFallback>NR</AvatarFallback>
        </Avatar> */}
        <div href="/">
          <h1 className="text-4xl font-bold">Nishant Rana</h1>
          <p className="text-xl text-muted-foreground">Python Developer</p>
        </div>
      </div>
      <Button variant="outline" size="icon" onClick={toggleDarkMode}>
        {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle dark mode</span>
      </Button>
    </header>
  )
}