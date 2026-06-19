const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Deployed", value: "20+" },
  { label: "AWS Services Used", value: "15+" },
  { label: "Uptime Achieved", value: "99.9%" },
];

export default function About({ about }) {
  return (
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <p className="section-subtitle">About Me</p>
            <h2 className="section-title">Passionate about Cloud & Infrastructure</h2>
            <p className="text-dark-600 text-lg leading-relaxed mt-4 mb-4">{about}</p>
            <p className="text-dark-600 leading-relaxed mb-4">
              Currently working at <span className="text-primary-400 font-semibold">Operisoft Technologies PVT LTD</span> as a Cloud & DevOps Engineer, I specialise in building production-ready Kubernetes clusters on AWS EKS, automating deployments with CI/CD pipelines, and writing infrastructure as code with Terraform.
            </p>
            <p className="text-dark-600 leading-relaxed mb-8">
              Every system I build is designed for reliability, scalability, and zero-downtime delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                See My Projects
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right – stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                  {s.value}
                </div>
                <div className="text-dark-600 text-sm font-medium">{s.label}</div>
              </div>
            ))}

            {/* Infrastructure card spanning full width */}
            <div className="col-span-2 card">
              <p className="text-xs section-subtitle mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS", "EKS", "Docker", "Kubernetes", "Terraform",
                  "Helm", "GitHub Actions", "Node.js", "React", "Prometheus",
                ].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
