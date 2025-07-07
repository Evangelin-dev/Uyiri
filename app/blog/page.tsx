"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { blogData } from "../data/blogData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Blog = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const openBlogDialog = (index: number) => setOpenDialog(index);
  const closeBlogDialog = () => setOpenDialog(null);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-gray-800 mb-4">
            Wellness{" "}
            <span className="font-bodoni text-bright-pink">Journal</span>
          </h1>
          <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
            Discover ancient wisdom for modern wellness through Siddha and
            Ayurvedic healing practices
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-montserrat text-xs font-medium px-3 py-1 rounded-full text-sage-green bg-sage-green/10">
                    {blog.location}
                  </span>
                  <div className="w-2 h-2 rounded-full opacity-60 bg-bright-pink"></div>
                </div>

                <h2 className="font-montserrat font-bold text-xl lg:text-2xl text-gray-800 mb-4 leading-tight group-hover:text-bright-pink transition-colors duration-300">
                  {blog.title}
                </h2>

                <p className="font-montserrat text-gray-600 text-sm leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                <Dialog
                  open={openDialog === index}
                  onOpenChange={(open) =>
                    open ? openBlogDialog(index) : closeBlogDialog()
                  }
                >
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-2 font-montserrat font-medium text-bright-pink hover:text-pink transition-colors duration-200">
                      Read More
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] bg-white p-0">
                    <div className="overflow-y-auto max-h-[80vh] p-6">
                      <DialogHeader>
                        <DialogTitle className="font-bodoni text-2xl text-gray-800 mb-2 pr-8">
                          {blog.title}
                        </DialogTitle>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="font-montserrat text-xs font-medium px-3 py-1 rounded-full text-sage-green bg-sage-green/10">
                            {blog.location}
                          </span>
                        </div>
                      </DialogHeader>

                      <div className="space-y-6 mt-6">
                        {blog.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            {section.heading && (
                              <h3 className="font-bodoni font-semibold text-lg text-gray-800 mb-3">
                                {section.heading}
                              </h3>
                            )}
                            {section.content && (
                              <p className="font-montserrat text-gray-600 text-sm leading-relaxed mb-4">
                                {section.content}
                              </p>
                            )}
                            {section.list && (
                              <ul className="space-y-2 mb-4">
                                {section.list.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-3"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-bright-pink"></div>
                                    <span className="font-montserrat text-gray-600 text-sm leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {section.testimonial && (
                              <blockquote className="pl-6 py-4 rounded-r-lg mb-4 border-l-4 border-bright-pink bg-bright-pink/5">
                                <p className="font-bodoni italic text-gray-700 text-sm leading-relaxed mb-2">
                                  "{section.testimonial.quote}"
                                </p>
                                <cite className="font-montserrat text-xs font-medium text-sage-green">
                                  — {section.testimonial.author}
                                </cite>
                              </blockquote>
                            )}
                            {section.callToAction && (
                              <div className="rounded-2xl p-6 mt-6 bg-bright-pink/5">
                                <h4 className="font-bodoni font-semibold text-lg text-gray-800 mb-2">
                                  {section.callToAction.title}
                                </h4>
                                <p className="font-montserrat text-gray-600 text-sm mb-3">
                                  {section.callToAction.description}
                                </p>
                                <div className="font-montserrat text-xs text-sage-green">
                                  {section.callToAction.contact}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
