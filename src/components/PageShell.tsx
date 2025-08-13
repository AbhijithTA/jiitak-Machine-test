import Link from "next/link";
import { ReactNode } from "react";
import { t } from "@/lib/i18n/ja";

export default function PageShell({ children }:{children:ReactNode}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/"><span className="sr-only">home</span><div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-brand-primary" />
          <span className="text-xl font-bold text-orange-500">{t.appName}</span>
        </div></Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/dashboard" className="hover:underline">{t.nav.dash}</Link>
          <Link href="/users" className="hover:underline">{t.nav.users}</Link>
          <Link href="/api/logout" className="hover:underline">{t.nav.logout}</Link>
        </nav>
      </header>
      <main className="flex-1 px-4 md:px-0 flex items-center justify-center">
        <div className="w-full max-w-md md:max-w-2xl">{children}</div>
      </main>
    </div>
  );
}
