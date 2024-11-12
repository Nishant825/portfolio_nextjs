import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { name: "Python", level: 90 },
  { name: "Django", level: 85 },
  { name: "Flask", level: 80 },
  { name: "FastAPI", level: 75 },
  { name: "MySQL", level: 85 },
  { name: "HTML/CSS", level: 70 },
  { name: "jQuery", level: 65 },
  { name: "AWS", level: 70 },
  { name: "Selenium", level: 75 },
  { name: "Docker", level: 80 },
  { name: "GitHub", level: 85 },
]

export default function Skills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills & Expertise</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}