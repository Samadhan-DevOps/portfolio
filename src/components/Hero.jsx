export default function Hero({ profile }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            {profile?.name || "Samadhan"}
          </span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl md:text-3xl text-dark-600 font-medium mb-4 animate-slide-up">
          {profile?.role || "DevOps & Cloud Engineer"}
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed">
          {profile?.tagline || "Building scalable infrastructure on AWS & Kubernetes"}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a href="#projects" className="btn-primary text-base px-8 py-4 shadow-lg shadow-primary-600/25">
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline text-base px-8 py-4">
            Get In Touch
          </a>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12 animate-fade-in">
          {["AWS EKS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map((tech) => (
            <span key={tech} className="tag text-sm py-1.5 px-4">
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
