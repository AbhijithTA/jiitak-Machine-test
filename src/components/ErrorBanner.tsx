export default function ErrorBanner({ msg }:{msg:string}) {
  return <div className="rounded-md bg-red-50 border border-red-200 text-red-700 p-3 text-sm">{msg}</div>;
}
