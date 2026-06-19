export default function Experience({ experience }) {
  if (!experience?.length) return null;
  return (
    <section id="experience" className="py-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Career</p>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-700" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-xs font-bold border-4 border-dark-900">
                  {i + 1}
                </div>

                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="tag whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points?.map((point, j) => (
                      <li key={j} className="text-dark-600 text-sm flex items-start gap-2">
                        <span className="text-primary-500 mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
