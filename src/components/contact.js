'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    // await new Promise(resolve => setTimeout(resolve, 1000))

    // Store the submitted data
    setSubmittedData(formData)

    // Show success message
    setShowSuccess(true)

    // Clear form data
    setFormData({ name: '', email: '', message: '' })

    setIsSubmitting(false)

    // Hide success message after 3 seconds
    // setTimeout(() => {
    //   setShowSuccess(false)
    // }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-6 w-6" />
          Contact Me
        </CardTitle>
        <CardDescription>
          Feel free to reach out with any questions or opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {/* Make sure submittedData is set before trying to render */}
        {submittedData && showSuccess && (
          <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-800">
            <h3 className="font-semibold text-lg">Submitted Details</h3>
            <ul className="space-y-2 mt-2 text-sm">
              <li><strong>Name:</strong> {submittedData.name}</li>
              <li><strong>Email:</strong> {submittedData.email}</li>
              <li><strong>Message:</strong> {submittedData.message}</li>
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 rounded-md border border-input bg-background resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
