"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function TestimonialManager() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah M.",
      location: "Canada 🇨🇦",
      story:
        "After 3 years of irregular periods and painful cycles, I was losing hope. Dr. Uyirinayan's 10-day Womb Cleanse program completely transformed my life. Within the first week, I noticed changes in my energy levels. By the end of the program, my periods became regular for the first time in years. I feel like myself again and have recommended this to all my friends struggling with similar issues.",
      outcome: "Regular periods restored after 3 years",
      program: "Womb Cleanse Program",
      hasVoiceNote: true,
      featured: true,
    },
    {
      id: 2,
      name: "Priya K.",
      location: "India 🇮🇳",
      story:
        "I struggled with hormonal imbalances for over 5 years - mood swings, weight gain, skin issues, everything. The Shuddhi program was a game-changer. Dr. Uyirinayan's personalized approach and daily guidance helped me understand my body better. The herbal teas and breathwork became part of my daily routine. Now, 6 months later, my hormones are balanced, my skin is clear, and I feel emotionally stable.",
      outcome: "Hormonal balance achieved after 5 years of struggle",
      program: "Shuddhi Program",
      hasVoiceNote: false,
      featured: false,
    },
    {
      id: 3,
      name: "Emma L.",
      location: "Australia 🇦🇺",
      story:
        "PCOD had taken over my life - irregular periods, weight gain, hair loss, and fertility concerns. I tried everything from conventional medicine to various diets. The Womb Cleanse program was my last hope. Dr. Uyirinayan's approach was so different - he treated the root cause, not just symptoms. After completing the program, my PCOD symptoms disappeared. I'm now pregnant with my first child!",
      outcome: "PCOD symptoms resolved, achieved pregnancy",
      program: "Womb Cleanse Program",
      hasVoiceNote: true,
      featured: false,
    },
    {
      id: 4,
      name: "Maria R.",
      location: "USA 🇺🇸",
      story:
        "Post-pregnancy, my body felt completely out of balance. I was dealing with postpartum depression, irregular cycles, and extreme fatigue. The Uterus Reset program helped me reclaim my body and mind. The combination of raw foods, meditation, and personalized herbs worked like magic. I feel stronger and more balanced than I did before pregnancy.",
      outcome: "Complete postpartum recovery and renewed energy",
      program: "Uterus Reset Program",
      hasVoiceNote: false,
      featured: false,
    },
    {
      id: 5,
      name: "Aisha P.",
      location: "UAE 🇦🇪",
      story:
        "Endometriosis had made my life unbearable - severe pain, heavy bleeding, and it was affecting my work and relationships. After 2 surgeries with no lasting relief, I found Dr. Uyirinayan. His holistic approach through the Womb Cleanse program addressed not just the physical symptoms but also the emotional trauma. Today, I'm pain-free and my quality of life has improved dramatically.",
      outcome: "Endometriosis pain eliminated naturally",
      program: "Womb Cleanse Program",
      hasVoiceNote: true,
      featured: false,
    },
  ])
  const [form, setForm] = useState({
    name: "",
    location: "",
    story: "",
    outcome: "",
    program: "",
    hasVoiceNote: false,
    featured: false,
  })

  return (
    <Card className="mb-8 max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Add New Testimonial</CardTitle>
        <CardDescription>Share a new transformation story.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault()
            setTestimonials(ts => [
              ...ts,
              {
                id: ts.length + 1,
                ...form,
              },
            ])
            setForm({
              name: "",
              location: "",
              story: "",
              outcome: "",
              program: "",
              hasVoiceNote: false,
              featured: false,
            })
            alert("Testimonial added (mock)!")
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <Input
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Sarah M."
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <Input
              value={form.location}
              onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              placeholder="e.g. Canada 🇨🇦"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Story</label>
            <Textarea
              value={form.story}
              onChange={e => setForm(f => ({ ...f, story: e.target.value }))}
              placeholder="Testimonial story"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Outcome</label>
            <Input
              value={form.outcome}
              onChange={e => setForm(f => ({ ...f, outcome: e.target.value }))}
              placeholder="e.g. Regular periods restored"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Program</label>
            <Input
              value={form.program}
              onChange={e => setForm(f => ({ ...f, program: e.target.value }))}
              placeholder="e.g. Womb Cleanse Program"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.hasVoiceNote}
                onChange={e => setForm(f => ({ ...f, hasVoiceNote: e.target.checked }))}
              />
              Has Voice Note
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))}
              />
              Featured
            </label>
          </div>
          <Button type="submit" className="bg-bright-pink text-white w-full">Add Testimonial</Button>
        </form>
        <div className="mt-8">
          <h3 className="font-semibold mb-2">All Testimonials</h3>
          <ul className="space-y-2">
            {testimonials.map(t => (
              <li key={t.id} className="border p-2 rounded">
                <strong>{t.name}</strong> ({t.location}) - <span className="italic">{t.program}</span>
                <div className="text-xs text-gray-500">{t.outcome}</div>
                <div className="text-xs">{t.featured ? "🌟 Featured" : ""} {t.hasVoiceNote ? "🎤 Voice Note" : ""}</div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
