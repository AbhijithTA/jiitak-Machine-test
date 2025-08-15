"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/set-password"); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Image
        src="/SplashLogo.png"
        alt="Logo"
        width={188}
        height={30}
        priority
      />
    </div>
  );
}
