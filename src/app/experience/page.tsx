import type { Metadata } from "next";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = {
  title: "Experience | Saloni Dabgar",
  description:
    "The path so far — software development at Jaguar Land Rover, research at IIT Kanpur, and the projects and ideas in between.",
  alternates: { canonical: "https://salonidabgar.com/experience" },
  openGraph: {
    type: "website",
    url: "https://salonidabgar.com/experience",
    siteName: "Saloni Dabgar",
    title: "Experience | Saloni Dabgar",
    description:
      "Software development at Jaguar Land Rover, research at IIT Kanpur, and the projects in between.",
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
