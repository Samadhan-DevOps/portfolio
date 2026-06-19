import { useState } from "react";

export default function Projects({ projects }) {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "featured"
      ? projects?.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I've Built</p>
          <h2 className="section-title">Projects</h2>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
                filter === f
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "bg-dark-800 text-dark-600 hover:text-white border border-dark-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card group flex flex-col hover:scale-[1.01] transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center text-xl">
            🚀
          </div>
          {project.featured && (
            <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs px-2 py-0.5 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-dark-600 hover:text-white transition-colors p-2 hover:bg-dark-700 rounded-lg"
              title="GitHub"
            >
              <GithubIcon />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-dark-600 hover:text-white transition-colors p-2 hover:bg-dark-700 rounded-lg"
              title="Live Demo"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-dark-600 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
