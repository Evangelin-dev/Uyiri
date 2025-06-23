"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

type Appointment = {
  id: number
  name: string
  email: string
  phone: string
  city: string
  preferredDate: string
  preferredTime: string
  issue: string
  serviceType: string
  status: "Pending" | "Accepted"
}

export default function AppointmentsManager() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    fetch("/adminpanel/api/appointments", { cache: "no-store" })
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(() => setAppointments([]))
  }, [])

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Manage Book Appointments</CardTitle>
        <CardDescription>View and manage all appointment requests.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Phone</th>
                <th className="p-2 text-left">City</th>
                <th className="p-2 text-left">Service</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Issue</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 && (
                <tr>
                  <td colSpan={10} className="p-4 text-center text-gray-400">No appointments found.</td>
                </tr>
              )}
              {appointments.map((a) => (
                <tr key={a.id} className="border-b">
                  <td className="p-2">{a.name}</td>
                  <td className="p-2">{a.email}</td>
                  <td className="p-2">{a.phone}</td>
                  <td className="p-2">{a.city}</td>
                  <td className="p-2">{a.serviceType}</td>
                  <td className="p-2">{a.preferredDate}</td>
                  <td className="p-2">{a.preferredTime}</td>
                  <td className="p-2">{a.issue}</td>
                  <td className="p-2">{a.status}</td>
                  <td className="p-2">
                    <Button size="sm" variant="outline" className="text-bright-pink">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
