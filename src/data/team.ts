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
    name: "Ahmad Mostafavi",
    title: "Co-Founder & Research Lead",
    bio: "Lightweight ML and intrusion detection researcher (Högskolan i Skövde, Mälardalen University) focused on MCU-class IIoT security.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&q=80",
  },
  {
    name: "Hossein Fotouhi",
    title: "Co-Founder & Systems Advisor",
    bio: "Associate professor at Mälardalen University specializing in embedded/IoT systems and applied security; guides validation strategy for TinySentinel.",
    image: "https://images.unsplash.com/photo-1508216310972-5c1f4d0f1177?w=500&h=500&q=80",
  },
  {
    name: "Soroush Safaei",
    title: "Co-Founder & Product Lead",
    bio: "Drives product direction, partnerships, and commercialization to bring TinySentinel from research to field deployments.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&q=80",
  },
  {
    name: "Tabea Dierker",
    title: "Innovation Advisor",
    bio: "Supports commercialization, responsible innovation, and sustainability for security technologies.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&h=500&q=80",
  },
  {
    name: "Embedded Security Engineering",
    title: "Core Engineering",
    bio: "Team of embedded ML engineers, firmware developers, and red-team testers turning research into deployable IDS builds.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&h=500&q=80",
  },
];
