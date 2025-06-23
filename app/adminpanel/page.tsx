"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClipboardList, Mail, Plus, Star, Star as StarIcon } from "lucide-react"
// Lazy load each section
import dynamic from "next/dynamic"
const AppointmentsManager = dynamic(() => import("./manageAppointments/page"), { ssr: false })
const EnquiriesManager = dynamic(() => import("./manageEnquiries/page"), { ssr: false })
const ServiceManager = dynamic(() => import("./manageService/page"), { ssr: false })
const TestimonialManager = dynamic(() => import("./manageTestimonial/page"), { ssr: false })
const BlogManager = dynamic(() => import("./manageBlog/page"), { ssr: false })
     
 

export default function AdminPanelPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 pointer-events-none"></div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
              Admin Panel <span className="text-bright-pink">Uyiri Healing</span>
            </h1>
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="flex justify-center gap-2 mb-8 bg-white/80 rounded-full shadow">
                <TabsTrigger value="appointments" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" /> Booked Appointments
                </TabsTrigger>
                <TabsTrigger value="contacts" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact Enquiries
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Add Service
                </TabsTrigger>
                <TabsTrigger value="testimonials" className="flex items-center gap-2">
                  <Star className="h-4 w-4" /> Add Testimonial
                </TabsTrigger>
                <TabsTrigger value="blog" className="flex items-center gap-2">
                  <StarIcon className="h-4 w-4" /> Add Blog
                </TabsTrigger>
              </TabsList>

              <TabsContent value="appointments">
                
                <AppointmentsManager />
              </TabsContent>
              <TabsContent value="contacts">
               
                <EnquiriesManager />
              </TabsContent>
              <TabsContent value="services">
              
                <ServiceManager />
              </TabsContent>
              <TabsContent value="testimonials">
               
                <TestimonialManager />
              </TabsContent>
              <TabsContent value="blog">
                
                <BlogManager />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}

