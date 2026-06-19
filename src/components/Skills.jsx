export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I Work With</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="card group hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-white">{skill.name}</span>
        </div>
        <span className="text-primary-400 font-bold text-sm">{skill.level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
