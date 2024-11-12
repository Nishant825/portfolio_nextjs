"use client"

import { useState } from 'react'
import Head from 'next/head'
import { Moon, Sun, Mail, Github, Linkedin, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Nishant Rana - Python Developer</title>
        <meta name="description" content="Portfolio of Nishant Rana, Python Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8 bg-background text-foreground">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Nishant Rana" />
              <AvatarFallback>NR</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold">Nishant Rana</h1>
              <p className="text-xl text-muted-foreground">Python Developer</p>
            </div>
          </div>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </header>

        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-7">
                  Skilled in Python programming languages, frameworks, and tools, with a strong emphasis on delivering high-quality, scalable, and maintainable code. Adept at working in fast-paced environments, collaborating with cross-functional teams, and driving projects from concept to completion.
                </p>
                <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Mohali, India</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-8">
                    {[
                      {
                        title: "Python Developer",
                        company: "Atlogys Informatics",
                        date: "Current",
                        duties: [
                          "Regularly updated and maintained the Demo e-commerce application, ensuring its smooth operation and timely resolution of any issues.",
                          "Utilized Trello to manage tasks and project workflow, collaborating with team members to prioritize and track progress on development tasks.",
                          "Developed new features and resolved bugs as assigned in Trello cards, adhering to project timelines and quality standards.",
                          "Pushed code changes to the appropriate Git branches for development, and production environments. Utilized Docker to containerize applications and deploy code to servers."
                        ]
                      },
                      {
                        title: "Python Developer",
                        company: "Aviox Technologies",
                        date: "Previous",
                        duties: [
                          "Created Flask RESTful APIs to facilitate communication between the frontend and backend of the application.",
                          "Developed and deployed an AWS Lambda function to send custom emails to customers for promotional offers, utilizing AWS SES (Simple Email Service) for email delivery.",
                          "Created a Python Script to fetch real-time cryptocurrency data from external APIs, such as CoinGecko or CoinMarketCap and save it to mongoDB."
                        ]
                      },
                      {
                        title: "Python Intern",
                        company: "Meander Softwares",
                        date: "Previous",
                        duties: [
                          "Learned Python and Django Framework.",
                          "Successfully developed and deployed in Heroku a full-featured e-commerce application using Python and Django, which handled user authentication, product catalog, shopping cart, and order management functionalities."
                        ]
                      }
                    ].map((job, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-muted">
                        <div className="absolute left-[-9px] top-2 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <CardDescription className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" aria-hidden="true" />
                          {job.company}
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4" aria-hidden="true" />
                          {job.date}
                        </CardDescription>
                        <ul className="list-disc list-inside space-y-1">
                          {job.duties.map((duty, dutyIndex) => (
                            <li key={dutyIndex}>{duty}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
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
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
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
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { degree: "MCA", school: "Bahra University (Waknaghat) HP", year: "2019 - 2021" },
                    { degree: "BCA", school: "Government College (Solan) HP", year: "2016 - 2019" },
                  ].map((edu, index) => (
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
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-lg py-1 px-3">Hindi</Badge>
              <Badge variant="secondary" className="text-lg py-1 px-3">English</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-lg py-1 px-3">Travelling</Badge>
              <Badge variant="outline" className="text-lg py-1 px-3">Music</Badge>
              <Badge variant="outline" className="text-lg py-1 px-3">Movies</Badge>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center">
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
      </div>
    </div>
  )
}