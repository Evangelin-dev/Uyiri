"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Image as ImageIcon, Star as StarIcon, Tag } from "lucide-react"
import { useState } from "react"

export default function BlogManager() {
  const [blog, setBlog] = useState({
    id: 1,
    title: "",
    snippet: "",
    image: "",
    date: "",
    readTime: "",
    category: "",
    featured: false,
    image1: "",
    image2: "",
    image3: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
  })

  return (
    <Card className="mb-8 max-w-4xl mx-auto p-8">
      <CardHeader>
        <CardTitle>Add New Blog</CardTitle>
        <CardDescription>Enter details for a new blog post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault()
            setBlog({
              id: blog.id + 1,
              title: "",
              snippet: "",
              image: "",
              date: "",
              readTime: "",
              category: "",
              featured: false,
              image1: "",
              image2: "",
              image3: "",
              paragraph1: "",
              paragraph2: "",
              paragraph3: "",
            })
            alert("Blog added (mock)!")
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Main blog meta and snippet */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <StarIcon className="h-4 w-4" /> Title
                </label>
                <Input
                  value={blog.title}
                  onChange={e => setBlog(b => ({ ...b, title: e.target.value }))}
                  placeholder="Blog Title"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <Tag className="h-4 w-4" /> Category
                </label>
                <Input
                  value={blog.category}
                  onChange={e => setBlog(b => ({ ...b, category: e.target.value }))}
                  placeholder="e.g. Wellness, Siddha, Detox"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Date
                </label>
                <Input
                  type="date"
                  value={blog.date}
                  onChange={e => setBlog(b => ({ ...b, date: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Read Time (minutes)
                </label>
                <Input
                  type="number"
                  min={1}
                  value={blog.readTime}
                  onChange={e => setBlog(b => ({ ...b, readTime: e.target.value }))}
                  placeholder="e.g. 5"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" /> Main Image URL
                </label>
                <Input
                  value={blog.image}
                  onChange={e => setBlog(b => ({ ...b, image: e.target.value }))}
                  placeholder="Main Image URL"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Snippet</label>
                <Textarea
                  value={blog.snippet}
                  onChange={e => setBlog(b => ({ ...b, snippet: e.target.value }))}
                  placeholder="Short summary or snippet"
                  rows={3}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="featured"
                  type="checkbox"
                  checked={blog.featured}
                  onChange={e => setBlog(b => ({ ...b, featured: e.target.checked }))}
                />
                <label htmlFor="featured" className="font-medium">Featured</label>
              </div>
            </div>
            {/* Right: 3 images and 3 paragraphs */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block mb-1 font-medium">Image 1 URL</label>
                <Input
                  value={blog.image1}
                  onChange={e => setBlog(b => ({ ...b, image1: e.target.value }))}
                  placeholder="First content image URL"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Paragraph 1</label>
                <Textarea
                  value={blog.paragraph1}
                  onChange={e => setBlog(b => ({ ...b, paragraph1: e.target.value }))}
                  placeholder="First paragraph"
                  rows={3}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Image 2 URL</label>
                <Input
                  value={blog.image2}
                  onChange={e => setBlog(b => ({ ...b, image2: e.target.value }))}
                  placeholder="Second content image URL"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Paragraph 2</label>
                <Textarea
                  value={blog.paragraph2}
                  onChange={e => setBlog(b => ({ ...b, paragraph2: e.target.value }))}
                  placeholder="Second paragraph"
                  rows={3}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Image 3 URL</label>
                <Input
                  value={blog.image3}
                  onChange={e => setBlog(b => ({ ...b, image3: e.target.value }))}
                  placeholder="Third content image URL"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Paragraph 3</label>
                <Textarea
                  value={blog.paragraph3}
                  onChange={e => setBlog(b => ({ ...b, paragraph3: e.target.value }))}
                  placeholder="Third paragraph"
                  rows={3}
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="bg-bright-pink text-white w-full mt-6">Add Blog</Button>
        </form>
      </CardContent>
    </Card>
  )
}
