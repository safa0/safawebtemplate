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
    name: "Sarah Chen",
    title: "Chief Executive Officer & Co-Founder",
    bio: "20+ years in enterprise software and process automation. Former VP of Technology at a Fortune 500 company.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&q=80",
  },
  {
    name: "Michael Rodriguez",
    title: "Chief Technology Officer & Co-Founder",
    bio: "AI and RPA specialist with 18 years of experience. Built automation platforms serving 100+ enterprises.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&q=80",
  },
  {
    name: "Jennifer Park",
    title: "Chief Operating Officer",
    bio: "Operations excellence expert. Previously led digital transformation initiatives at leading consulting firms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&q=80",
  },
  {
    name: "David Thompson",
    title: "Head of Client Success",
    bio: "Client relationships and implementation specialist. Dedicated to ensuring measurable ROI for every partnership.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&q=80",
  },
];
