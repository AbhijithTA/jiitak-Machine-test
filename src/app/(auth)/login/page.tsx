"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { showError, showSuccess } from '@/lib/toast';
import NavbarComponent from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) {
      showError("メールアドレスとパスワードを入力してください");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showSuccess("ログイン成功！");
      router.push("/dashboard");
    }, 1500);
  };

  const handleForgotPassword = () => {
    showSuccess("パスワードリセットページへ移動します");
    router.push("/forgot-password");
  };

  return (
    <>
      <NavbarComponent showAvatar={false} />
      <div className="min-h-screen bg-brand-bg flex flex-col">
        <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-brand-text mb-8">ログイン</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-text mb-2">
                  パスワード
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-200"
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  ) : (
                    "ログイン"
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={handleForgotPassword}
                  className="text-sm text-gray-600 hover:text-brand-primary transition-colors duration-200 underline"
                >
                  パスワードをお忘れの場合
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
