// src/components/LovableAnalyticsDashboard.tsx
export default function LovableAnalyticsDashboard({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Real-Time Analytics</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-3xl">×</button>
        </div>
        <iframe
          src="[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FMckings1%2Ffrontend-portfolio&countColor=%23263759)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FMckings1%2Ffrontend-portfolio)"  // ← YOUR REAL LINK HERE
          className="w-full h-full rounded-b-2xl"
          frameBorder="0"
        />
      </div>
    </div>
  );
}