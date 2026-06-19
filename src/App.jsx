import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// In K8s, frontend and backend are in the same cluster.
// API requests go to /api (proxied by nginx to backend-service).
const API_BASE = "/api";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/portfolio`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback static data if API not reachable (e.g., local dev without backend)
        setData(fallbackData);
        setLoading(false);
        setError("Using offline data");
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Certifications certifications={data.certifications} />
        <Contact />
      </main>
      <Footer profile={data.profile} />
      {error && (
        <div className="fixed bottom-4 right-4 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-lg text-sm">
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

// Fallback data when API not available
const fallbackData = {
  profile: {
    name: "Samadhan Dhumal",
    role: "Cloud & DevOps Engineer",
    tagline: "Building scalable cloud infrastructure on AWS & Kubernetes",
    location: "India",
    email: "samadhandhumal1234@gmail.com",
    github: "https://github.com/Samadhan-DevOps",
    linkedin: "https://www.linkedin.com/in/samadhan-dhumal/",
    company: "Operisoft Technologies PVT LTD",
  },
  about:
    "Cloud & DevOps Engineer at Operisoft Technologies PVT LTD with hands-on expertise in AWS, EKS, Docker, Kubernetes, Terraform, and CI/CD pipelines.",
  skills: [
    { name: "AWS", level: 92, icon: "☁️" },
    { name: "Kubernetes (EKS)", level: 88, icon: "⚙️" },
    { name: "Docker", level: 90, icon: "🐳" },
    { name: "Terraform", level: 82, icon: "🏗️" },
    { name: "CI/CD", level: 85, icon: "🔄" },
    { name: "Linux", level: 88, icon: "🐧" },
  ],
  projects: [
    {
      id: 1,
      title: "Portfolio on EKS — Production Deployment",
      description: "Deployed a full 3-tier portfolio app on AWS EKS with ALB Ingress, autoscaling, and CI/CD.",
      tech: ["AWS EKS", "Docker", "Kubernetes", "GitHub Actions"],
      featured: true,
    },
  ],
  experience: [],
  certifications: [],
};
