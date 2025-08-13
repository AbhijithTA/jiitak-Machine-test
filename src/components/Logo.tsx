export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* swap to your SVG if you have it */}
      <div className="h-6 w-6 rounded-full bg-brand-primary" />
      <span className="text-xl font-bold text-orange-500">ルックミール</span>
    </div>
  );
}
