"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnquiriesManager() {
  const mockContacts = [
    { id: 1, name: "Sarah M.", issue: "Irregular periods", city: "Chennai" },
    { id: 2, name: "Emma L.", issue: "PCOD", city: "Sydney" },
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Manage Contact Enquiries</CardTitle>
        <CardDescription>View and respond to contact form submissions.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Issue</th>
                <th className="p-2 text-left">City</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {mockContacts.map((c) => (
                <tr key={c.id} className="border-b">
                  <td className="p-2">{c.name}</td>
                  <td className="p-2">{c.issue}</td>
                  <td className="p-2">{c.city}</td>
                  <td className="p-2">
                    <Button size="sm" variant="outline" className="text-sage-green">Reply</Button>
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
