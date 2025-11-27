/**
 * Team Data
 * Centralized data for leadership and team members.
 * This data is used by LeadershipSection and related components.
 */

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Mazdak Sanati",
    title: "Co-Founder & CEO",
    bio: "Leading Ansyn with extensive experience in embedded systems, technical project management, and product ownership. SAFe 6.0 Agilist bringing strategic vision to workflow automation.",
    image: "/mazdak-sanati.jpg",
  },
  {
    name: "Soroush Safaei",
    title: "Co-Founder & CTO",
    bio: "Strategic technology leader driving innovation at the intersection of product development and engineering excellence. Brings deep expertise in building scalable systems and leading high-performance teams to deliver impactful solutions.",
    image: "/images/team/soroush-safaei.jpg",
  },
  {
    name: "Dr. Ali Alavi",
    title: "Board Member & Partner",
    bio: "Visionary AI leader with a Ph.D. in Human-Computer Interaction from ETH Zurich. Former Head of AI at Axon, where he pioneered responsible AI systems deployed globally in public safety. Previously Head of Engineering at Publishing.ai ($100M valuation), scaling enterprise AI platforms. Builds transformative AI solutions across autonomous vehicles, healthcare, and edge computing with a proven track record of turning cutting-edge research into industry-defining products.",
    image: "/images/team/ali-alavi.jpg",
  },
  {
    name: "Bita Baghestani",
    title: "Board Member & Partner",
    bio: "Serial entrepreneur and visionary founder with expertise in scaling sustainable ventures. Founder of Mooneva and Co-Founder & CEO of Levva Pharma, pioneering innovative solutions in health and wellness. Alumni of the Swedish Institute She Entrepreneur Leadership Program and Erasmus Entrepreneurial Programme. Background in Industrial Engineering and Entrepreneurship with proven success in manufacturing, product development, and market expansion.",
    image: "/images/team/bita-baghestani.jpg",
  },
];
