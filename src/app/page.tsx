import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/cookies";

export default function Home() {
  const has = cookies().has(SESSION_COOKIE);
  redirect(has ? "/dashboard" : "/login");
}
