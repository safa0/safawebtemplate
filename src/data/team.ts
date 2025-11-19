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
    title: "Founder & CEO",
    bio: "Leading Ansyn with extensive experience in embedded systems, technical project management, and product ownership. SAFe 6.0 Agilist bringing strategic vision to workflow automation.",
    image: "/mazdak-sanati.jpg",
  },
];
