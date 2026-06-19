export default function Loader() {
  return (
    <div className="fixed inset-0 bg-dark-900 flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-dark-700 border-t-primary-500 rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-primary-400 rounded-full animate-spin animation-delay-150" />
      </div>
      <p className="mt-6 text-dark-600 text-sm font-medium tracking-widest uppercase animate-pulse">
        Loading Portfolio...
      </p>
    </div>
  );
}
