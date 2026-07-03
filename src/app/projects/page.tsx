import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Saloni Dabgar",
  description:
    "Selected work across embedded systems, full-stack, AI/ML, and blockchain — from firmware running inside Jaguar Land Rover vehicles to smart-contract exchanges and high-concurrency task orchestration.",
  alternates: { canonical: "https://salonidabgar.com/projects" },
  openGraph: {
    type: "website",
    url: "https://salonidabgar.com/projects",
    siteName: "Saloni Dabgar",
    title: "Projects | Saloni Dabgar",
    description:
      "Selected work across embedded systems, full-stack, AI/ML, and blockchain.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
