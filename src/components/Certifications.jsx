const badgeColors = [
  "from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400",
  "from-blue-500/20  to-blue-600/20  border-blue-500/30  text-blue-400",
  "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
  "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
];

export default function Certifications({ certifications }) {
  if (!certifications?.length) return null;
  return (
    <section id="certifications" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Credentials</p>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`card bg-gradient-to-br ${badgeColors[i % badgeColors.length]} border hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-white text-sm mb-1 leading-snug">{cert.name}</h3>
              <p className="text-xs opacity-70 mb-2">{cert.issuer}</p>
              <span className="tag text-xs">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
