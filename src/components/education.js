import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'

const education = [
  { degree: "MCA", school: "Bahra University (Waknaghat) HP", year: "2019 - 2021" },
  { degree: "BCA", school: "Government College (Solan) HP", year: "2016 - 2019" },
]

export default function Education() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start space-x-4">
              <GraduationCap className="h-6 w-6 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <CardDescription>{edu.school}</CardDescription>
                <CardDescription>{edu.year}</CardDescription>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}