import { notFound } from 'next/navigation'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Education from '@/components/education'
import ContactPage from '@/components/contact'

export default function SectionPage({ params }) {
  switch (params.section) {
    case 'about':
      return <About />
    case 'experience':
      return <Experience />
    case 'skills':
      return <Skills />
    case 'education':
      return <Education />
    case 'contact':
      return <ContactPage />
    default:
      notFound()
  }
}