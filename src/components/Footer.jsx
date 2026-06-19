export default function Footer({ profile }) {
  return (
    <footer className="bg-dark-900 border-t border-dark-700/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-dark-600 text-sm">
        © {new Date().getFullYear()} Samadhan Dhumal · Operisoft Technologies PVT LTD. Built with React & deployed on AWS EKS.
        </p>
        <div className="flex items-center gap-3">
          <span className="tag text-xs">⚙️ Kubernetes</span>
          <span className="tag text-xs">🐳 Docker</span>
          <span className="tag text-xs">☁️ AWS EKS</span>
        </div>
      </div>
    </footer>
  );
}
