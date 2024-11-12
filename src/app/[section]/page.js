import { notFound } from 'next/navigation'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Education from '@/components/education'

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
    default:
      notFound()
  }
}