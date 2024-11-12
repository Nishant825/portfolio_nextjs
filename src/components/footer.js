import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <div className="flex justify-center space-x-4">
        <Button variant="default" size="lg" asChild>
          <a href="mailto:nishant2796@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>Email</span>
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://linkedin.com/in/nishant-python-dev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </Button>
      </div>
    </footer>
  )
}