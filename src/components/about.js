
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from 'lucide-react'

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-7">
        I am a highly skilled Python developer with extensive experience in a variety of frameworks, tools, and libraries. My expertise lies in crafting clean, efficient, and maintainable code that meets both user needs and business requirements. I have a deep understanding of Python's core principles, object-oriented design, and best practices, which allows me to deliver high-quality, scalable solutions.

I thrive in fast-paced environments, where I can apply my problem-solving skills to complex challenges. I have a track record of successfully driving projects from inception to completion, collaborating closely with cross-functional teams such as product managers, designers, and QA engineers. My background includes working on everything from small-scale applications to large, mission-critical systems.

In addition to my technical skills, I bring strong communication abilities, ensuring seamless collaboration and transparency in all stages of the development lifecycle. Whether working in agile teams or handling solo projects, I am committed to continuous learning and improving both my technical and interpersonal skills. I am always looking for opportunities to leverage cutting-edge technologies, optimize code performance, and contribute to the overall success of the team.
        </p>
        <div className="flex items-center gap-2 mt-4 text-muted-foreground">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>Mohali, India</span>
        </div>
      </CardContent>
    </Card>
  )
}
