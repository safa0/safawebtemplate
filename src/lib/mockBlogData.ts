/**
 * Mock Blog Data - Placeholder Example
 *
 * This file contains sample blog post data that can be used for development
 * and testing before connecting to WordPress. Once WordPress is configured,
 * this data will be replaced by real content from your WordPress site.
 */

import { WordPressPost, WordPressCategory, WordPressTag } from "./wordpress";

export const mockCategories: WordPressCategory[] = [
  {
    id: 1,
    name: "Automation Insights",
    slug: "automation-insights",
    description: "Deep dives into automation strategies and technologies"
  },
  {
    id: 2,
    name: "Industry Trends",
    slug: "industry-trends",
    description: "Latest trends in business automation"
  },
  {
    id: 3,
    name: "Case Studies",
    slug: "case-studies",
    description: "Real-world automation success stories"
  }
];

export const mockTags: WordPressTag[] = [
  { id: 1, name: "AI", slug: "ai" },
  { id: 2, name: "RPA", slug: "rpa" },
  { id: 3, name: "Workflow Automation", slug: "workflow-automation" },
  { id: 4, name: "ROI", slug: "roi" },
  { id: 5, name: "Digital Transformation", slug: "digital-transformation" }
];

export const mockPosts: WordPressPost[] = [
  {
    id: 1,
    slug: "5-signs-your-business-needs-automation",
    title: {
      rendered: "5 Signs Your Business Needs Automation"
    },
    excerpt: {
      rendered: "<p>Is your business ready for automation? Discover the five key indicators that suggest it's time to embrace automated workflows and streamline your operations for maximum efficiency.</p>"
    },
    content: {
      rendered: `
        <p>In today's fast-paced business environment, automation has become essential for staying competitive. But how do you know when it's the right time to automate your business processes? Here are five clear signs that your organization is ready for automation.</p>

        <h2>1. Repetitive Tasks Are Consuming Your Team's Time</h2>
        <p>If your employees spend hours each day on repetitive, manual tasks like data entry, report generation, or email responses, automation can free up their time for more strategic work. Studies show that knowledge workers spend up to 40% of their time on repetitive tasks that could be automated.</p>

        <h2>2. Human Errors Are Costing You Money</h2>
        <p>Manual processes are prone to errors, and these mistakes can be costly. Whether it's incorrect data entry, missed deadlines, or miscommunications, human errors add up. Automation provides consistency and accuracy, reducing error rates by up to 90%.</p>

        <h2>3. You're Struggling to Scale Your Operations</h2>
        <p>As your business grows, manual processes become bottlenecks. If you find yourself needing to hire more staff just to handle increased volume, automation can help you scale efficiently without proportionally increasing headcount.</p>

        <h2>4. Customer Response Times Are Too Slow</h2>
        <p>In the age of instant gratification, customers expect quick responses. If your team struggles to keep up with inquiries, or if customers wait days for simple requests, automation can dramatically improve response times and customer satisfaction.</p>

        <h2>5. You Can't Access Real-Time Data and Insights</h2>
        <p>Manual reporting processes mean your data is always outdated by the time you review it. Automation enables real-time dashboards and instant insights, allowing you to make data-driven decisions quickly.</p>

        <h2>The Next Step</h2>
        <p>If you recognize one or more of these signs in your business, it's time to explore automation solutions. At LambdaFlow™, we specialize in creating custom automation strategies that deliver measurable ROI within 6-12 months.</p>

        <p>Ready to transform your business with automation? <a href="/contact">Contact us today</a> for a free consultation.</p>
      `
    },
    date: "2025-01-15T10:00:00",
    modified: "2025-01-15T10:00:00",
    author: {
      id: 1,
      name: "LambdaFlow Team",
      url: "",
      description: "Automation experts dedicated to helping businesses achieve operational excellence through intelligent workflow automation.",
      avatar_urls: {
        "96": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=96&q=80"
      }
    },
    featured_media: {
      id: 1,
      source_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt_text: "Business automation dashboard",
      media_details: {
        width: 1200,
        height: 800
      }
    },
    categories: [1, 2],
    tags: [1, 3, 4],
    link: "/blog/5-signs-your-business-needs-automation"
  },
  {
    id: 2,
    slug: "roi-of-automation-what-to-expect",
    title: {
      rendered: "The ROI of Automation: What to Expect in Your First Year"
    },
    excerpt: {
      rendered: "<p>Considering automation but unsure about the return on investment? Learn what realistic ROI looks like in the first year and how to measure the success of your automation initiatives.</p>"
    },
    content: {
      rendered: `
        <p>One of the most common questions we hear from business leaders is: "What kind of ROI can we expect from automation?" The answer varies by industry and implementation, but there are clear patterns we've observed across hundreds of automation projects.</p>

        <h2>Average ROI Metrics</h2>
        <p>Based on our experience with clients across various industries, here's what you can typically expect:</p>
        <ul>
          <li><strong>Time Savings:</strong> 40-60% reduction in time spent on automated processes</li>
          <li><strong>Cost Reduction:</strong> 30-50% decrease in operational costs</li>
          <li><strong>Error Reduction:</strong> 85-95% fewer human errors</li>
          <li><strong>Payback Period:</strong> 6-12 months for most implementations</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>To accurately measure your automation ROI, track these key metrics:</p>
        <ul>
          <li>Time saved per process</li>
          <li>Reduction in error rates</li>
          <li>Increase in processing capacity</li>
          <li>Customer satisfaction improvements</li>
          <li>Employee satisfaction scores</li>
        </ul>

        <h2>Beyond Financial Returns</h2>
        <p>While financial ROI is important, automation delivers value in other ways:</p>
        <ul>
          <li>Improved employee morale (no more tedious tasks)</li>
          <li>Better customer experiences</li>
          <li>Increased business agility</li>
          <li>Enhanced compliance and audit trails</li>
        </ul>

        <h2>Real-World Example</h2>
        <p>A mid-sized financial services company implemented our LambdaFlow™ automation solution for their client onboarding process. Results after 12 months:</p>
        <ul>
          <li>Onboarding time reduced from 5 days to 2 hours</li>
          <li>Processing costs decreased by 42%</li>
          <li>Error rate dropped from 12% to less than 1%</li>
          <li>Customer satisfaction score increased by 35 points</li>
          <li>ROI achieved in 8 months</li>
        </ul>

        <p>Want to calculate the potential ROI for your specific use case? <a href="/why-automate">Explore our ROI calculator</a> or <a href="/contact">schedule a consultation</a> with our team.</p>
      `
    },
    date: "2025-01-08T14:30:00",
    modified: "2025-01-08T14:30:00",
    author: {
      id: 1,
      name: "LambdaFlow Team",
      url: "",
      description: "Automation experts dedicated to helping businesses achieve operational excellence through intelligent workflow automation.",
      avatar_urls: {
        "96": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=96&q=80"
      }
    },
    featured_media: {
      id: 2,
      source_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      alt_text: "ROI analytics dashboard",
      media_details: {
        width: 1200,
        height: 800
      }
    },
    categories: [1, 3],
    tags: [4, 5],
    link: "/blog/roi-of-automation-what-to-expect"
  },
  {
    id: 3,
    slug: "choosing-the-right-automation-tools",
    title: {
      rendered: "How to Choose the Right Automation Tools for Your Business"
    },
    excerpt: {
      rendered: "<p>With countless automation tools available, choosing the right one can be overwhelming. This guide helps you evaluate automation solutions based on your specific business needs.</p>"
    },
    content: {
      rendered: `
        <p>The automation market is crowded with solutions, from simple task automation to complex enterprise platforms. How do you choose the right tools for your business? Here's a framework to guide your decision.</p>

        <h2>Assess Your Needs First</h2>
        <p>Before evaluating tools, clearly define what you need to automate:</p>
        <ul>
          <li>What processes are causing the most pain?</li>
          <li>What's the expected volume of automation?</li>
          <li>What systems need to integrate?</li>
          <li>What's your team's technical capability?</li>
        </ul>

        <h2>Key Evaluation Criteria</h2>
        <p>When evaluating automation tools, consider these factors:</p>

        <h3>1. Integration Capabilities</h3>
        <p>The best automation tool is useless if it can't connect to your existing systems. Look for:</p>
        <ul>
          <li>Pre-built connectors for your key systems</li>
          <li>API access for custom integrations</li>
          <li>Support for both cloud and on-premise systems</li>
        </ul>

        <h3>2. Scalability</h3>
        <p>Choose tools that can grow with your business:</p>
        <ul>
          <li>Can it handle increasing transaction volumes?</li>
          <li>Does pricing scale reasonably?</li>
          <li>Can you add more complex workflows over time?</li>
        </ul>

        <h3>3. User-Friendliness</h3>
        <p>Consider both technical and non-technical users:</p>
        <ul>
          <li>Visual workflow builders vs. code-based</li>
          <li>Learning curve and training requirements</li>
          <li>Quality of documentation and support</li>
        </ul>

        <h3>4. Security and Compliance</h3>
        <p>Especially important for regulated industries:</p>
        <ul>
          <li>Data encryption standards</li>
          <li>Compliance certifications (SOC 2, ISO, GDPR)</li>
          <li>Audit trail capabilities</li>
        </ul>

        <h2>Build vs. Buy vs. Partner</h2>
        <p>You have three main options:</p>
        <ul>
          <li><strong>Build:</strong> Custom development gives maximum control but requires significant resources</li>
          <li><strong>Buy:</strong> Off-the-shelf tools are faster to implement but may not fit perfectly</li>
          <li><strong>Partner:</strong> Work with an automation agency for customized solutions without building in-house expertise</li>
        </ul>

        <p>At LambdaFlow™, we help businesses navigate these decisions and implement the right automation strategy. We're platform-agnostic and focus on delivering results, not pushing specific tools.</p>

        <p><a href="/services">Learn more about our approach</a> or <a href="/contact">get in touch</a> to discuss your automation needs.</p>
      `
    },
    date: "2025-01-01T09:00:00",
    modified: "2025-01-01T09:00:00",
    author: {
      id: 1,
      name: "LambdaFlow Team",
      url: "",
      description: "Automation experts dedicated to helping businesses achieve operational excellence through intelligent workflow automation.",
      avatar_urls: {
        "96": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=96&q=80"
      }
    },
    featured_media: {
      id: 3,
      source_url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
      alt_text: "Automation tools selection",
      media_details: {
        width: 1200,
        height: 800
      }
    },
    categories: [1],
    tags: [1, 2, 3],
    link: "/blog/choosing-the-right-automation-tools"
  }
];

/**
 * Get mock posts (simulates WordPress API)
 */
export function getMockPosts() {
  return {
    posts: mockPosts,
    pagination: {
      total: mockPosts.length,
      totalPages: 1,
      currentPage: 1,
      perPage: 10
    }
  };
}

/**
 * Get mock post by slug (simulates WordPress API)
 */
export function getMockPostBySlug(slug: string) {
  return mockPosts.find(post => post.slug === slug) || null;
}

/**
 * Get mock categories
 */
export function getMockCategories() {
  return mockCategories;
}

/**
 * Get mock tags
 */
export function getMockTags() {
  return mockTags;
}
