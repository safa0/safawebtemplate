"use client";

import { useState } from "react";
import { Header } from "@/components/ui/Header";
import Link from "next/link";

const resources = {
  guides: [
    {
      title: "The Executive's Guide to RPA Implementation",
      description: "A comprehensive roadmap for C-suite executives planning enterprise automation initiatives",
      type: "Guide",
      readTime: "15 min read",
      featured: true,
    },
    {
      title: "AI Agents vs Traditional RPA: A Comparison",
      description: "Understanding the differences and synergies between AI-powered agents and rule-based automation",
      type: "Guide",
      readTime: "10 min read",
    },
    {
      title: "Process Mining Fundamentals",
      description: "How to identify and prioritize automation opportunities in your organization",
      type: "Guide",
      readTime: "12 min read",
    },
  ],
  whitepapers: [
    {
      title: "The State of Enterprise Automation 2025",
      description: "Industry trends, benchmarks, and predictions for the future of business automation",
      type: "Whitepaper",
      pages: "32 pages",
    },
    {
      title: "ROI Measurement Framework for RPA",
      description: "Methodologies for calculating and tracking automation return on investment",
      type: "Whitepaper",
      pages: "24 pages",
    },
    {
      title: "Security Best Practices for RPA Deployment",
      description: "Ensuring compliance and data protection in automated processes",
      type: "Whitepaper",
      pages: "28 pages",
    },
  ],
  caseStudies: [
    {
      title: "Global Bank Transforms Operations",
      industry: "Financial Services",
      results: "75% reduction in processing time, $12M annual savings",
      description: "How a Fortune 500 bank automated 200+ processes across departments",
    },
    {
      title: "Healthcare Provider Enhances Patient Experience",
      industry: "Healthcare",
      results: "90% faster claim processing, 99.9% accuracy",
      description: "Implementing intelligent document processing for medical claims",
    },
    {
      title: "Retail Giant Optimizes Supply Chain",
      industry: "Retail",
      results: "60% inventory reduction, 40% faster fulfillment",
      description: "End-to-end automation of procurement and inventory management",
    },
  ],
  webinars: [
    {
      title: "Building Your Automation Center of Excellence",
      date: "December 15, 2024",
      duration: "45 minutes",
      status: "upcoming",
    },
    {
      title: "Scaling RPA: From Pilot to Enterprise",
      date: "December 8, 2024",
      duration: "60 minutes",
      status: "recorded",
    },
    {
      title: "AI and RPA Integration Strategies",
      date: "November 30, 2024",
      duration: "45 minutes",
      status: "recorded",
    },
  ],
  tools: [
    {
      name: "ROI Calculator",
      description: "Calculate potential savings from automation",
      icon: "📊",
    },
    {
      name: "Process Complexity Analyzer",
      description: "Assess automation feasibility for your processes",
      icon: "🔍",
    },
    {
      name: "Automation Maturity Assessment",
      description: "Evaluate your organization's automation readiness",
      icon: "📈",
    },
  ],
};

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Resources" },
    { id: "guides", label: "Guides" },
    { id: "whitepapers", label: "Whitepapers" },
    { id: "case-studies", label: "Case Studies" },
    { id: "webinars", label: "Webinars" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Resource Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Explore our comprehensive collection of guides, whitepapers, and tools to accelerate your automation journey
          </p>

          {/* Newsletter Signup */}
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest automation insights delivered to your inbox
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder:text-gray-400 border border-white/20"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-24 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <div className="flex gap-6 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-16">
        {/* Featured Resource */}
        {(activeTab === "all" || activeTab === "guides") && (
          <div className="mb-16">
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Guide
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                {resources.guides[0].title}
              </h2>
              <p className="text-lg text-blue-100 mb-6 max-w-3xl">
                {resources.guides[0].description}
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
        )}

        {/* Guides Section */}
        {(activeTab === "all" || activeTab === "guides") && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Implementation Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.guides.slice(1).map((guide, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{guide.type}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Link
                    href="#"
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read Guide →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Whitepapers Section */}
        {(activeTab === "all" || activeTab === "whitepapers") && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Research & Whitepapers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.whitepapers.map((paper, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {paper.type}
                    </span>
                    <span className="text-sm text-gray-500">{paper.pages}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Download PDF →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies Section */}
        {(activeTab === "all" || activeTab === "case-studies") && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="p-4 bg-gray-50 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Key Results</p>
                    <p className="text-sm text-gray-600">{study.results}</p>
                  </div>
                  <Link
                    href="#"
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Webinars Section */}
        {(activeTab === "all" || activeTab === "webinars") && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Webinars & Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.webinars.map((webinar, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        webinar.status === "upcoming"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {webinar.status === "upcoming" ? "Upcoming" : "On-Demand"}
                    </span>
                    <span className="text-sm text-gray-500">{webinar.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {webinar.date}
                  </p>
                  <button
                    className={`font-medium ${
                      webinar.status === "upcoming"
                        ? "text-green-600 hover:text-green-700"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    {webinar.status === "upcoming" ? "Register Now →" : "Watch Recording →"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools Section */}
        {(activeTab === "all" || activeTab === "tools") && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Free Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.tools.map((tool, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center cursor-pointer"
                >
                  <div className="text-5xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Launch Tool →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our automation experts are ready to help you identify opportunities and build a roadmap for success
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}