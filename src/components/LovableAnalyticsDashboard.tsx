export default function LovableAnalyticsDashboard({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Real-Time Analytics</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-3xl">×</button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FMckings1%2Ffrontend-portfolio"
            target="_blank"
          >
            <img 
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FMckings1%2Ffrontend-portfolio&countColor=%23263759"
              alt="Visitor Count"
              className="w-full max-w-sm"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
