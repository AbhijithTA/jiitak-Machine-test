import "@/app/globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = { title: "ルックミール", description: "LookMeal" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja"><body>{children}
      <Toaster /> </body></html>
  );
}
