"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type Service = {
  id: number
  icon: string
  title: string
  description: string
  details: string[]
  primaryAction: string
  secondaryAction: string
}

const iconOptions = [
  { value: "GraduationCap", label: "Graduation Cap" },
  { value: "Heart", label: "Heart" },
  { value: "Users", label: "Users" },
]

export default function ServiceManager() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      icon: "GraduationCap",
      title: "Training Programs",
      description: "Siddha-based workshops & certification courses for doctors, therapists, and wellness seekers.",
      details: [
        "• Professional certification courses",
        "• Hands-on workshop experiences",
        "• Ancient wisdom meets modern practice",
        "• Continuing education credits available"
      ],
      primaryAction: "Enroll Now",
      secondaryAction: "View Curriculum"
    },
    {
      id: 2,
      icon: "Heart",
      title: "Counseling Sessions",
      description: "1-on-1 sessions for emotional well-being, lifestyle alignment, and chronic disease support.",
      details: [
        "• Emotional wellness guidance",
        "• Lifestyle alignment coaching",
        "• Chronic disease support",
        "• Personalized healing plans"
      ],
      primaryAction: "Book Session",
      secondaryAction: "Learn More"
    },
    {
      id: 3,
      icon: "Users",
      title: "Therapeutic Siddha Massage",
      description: "Holistic body therapies using herbal oils for stress, pain, and hormonal balance.",
      details: [
        "• Traditional herbal oil treatments",
        "• Stress and pain relief",
        "• Hormonal balance therapy",
        "• Customized treatment plans"
      ],
      primaryAction: "Book Treatment",
      secondaryAction: "View Packages"
    }
  ])

  const [form, setForm] = useState<Omit<Service, "id">>({
    icon: "GraduationCap",
    title: "",
    description: "",
    details: ["", "", "", ""],
    primaryAction: "",
    secondaryAction: "",
  })

  return (
    <Card className="mb-8 max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Add New Service</CardTitle>
        <CardDescription>Enter details for a new healing service.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault()
            setServices(s => [
              ...s,
              {
                id: s.length + 1,
                ...form,
                details: form.details.map(d => d.trim()).filter(Boolean),
              }
            ])
            setForm({
              icon: "GraduationCap",
              title: "",
              description: "",
              details: ["", "", "", ""],
              primaryAction: "",
              secondaryAction: "",
            })
            alert("Service added (mock)!")
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Icon</label>
            <Select
              value={form.icon}
              onValueChange={value => setForm(f => ({ ...f, icon: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select icon" />
              </SelectTrigger>
              <SelectContent>
                {iconOptions.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <Input
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="Service Title"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <Textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              placeholder="Short description"
              rows={2}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Details (4 points)</label>
            {form.details.map((d, i) => (
              <Input
                key={i}
                value={d}
                onChange={e => {
                  const newDetails = [...form.details]
                  newDetails[i] = e.target.value
                  setForm(f => ({ ...f, details: newDetails }))
                }}
                placeholder={`Detail ${i + 1}`}
                className="mb-2"
                required={i === 0}
              />
            ))}
          </div>
          <div>
            <label className="block mb-1 font-medium">Primary Action</label>
            <Input
              value={form.primaryAction}
              onChange={e => setForm(f => ({ ...f, primaryAction: e.target.value }))}
              placeholder="e.g. Book Session"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Secondary Action</label>
            <Input
              value={form.secondaryAction}
              onChange={e => setForm(f => ({ ...f, secondaryAction: e.target.value }))}
              placeholder="e.g. Learn More"
              required
            />
          </div>
          <Button type="submit" className="bg-bright-pink text-white w-full">Add Service</Button>
        </form>
        <div className="mt-8">
          <h3 className="font-semibold mb-2">All Services</h3>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.id} className="border p-2 rounded">
                <strong>{s.title}</strong> - <span className="italic">{s.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
