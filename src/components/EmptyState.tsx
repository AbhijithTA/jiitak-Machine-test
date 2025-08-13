export default function EmptyState({ title, note }:{title:string; note?:string}) {
  return (
    <div className="text-center py-16 text-gray-500">
      <p className="text-lg">{title}</p>
      {note && <p className="text-sm mt-1">{note}</p>}
    </div>
  );
}
