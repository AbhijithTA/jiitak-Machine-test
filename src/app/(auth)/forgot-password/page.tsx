"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { showError, showSuccess } from '@/lib/toast';
import NavbarComponent from "@/components/Navbar";

const PasswordResetPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (): Promise<void> => {
    setIsSubmitting(true);

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("有効なメールアドレスを入力してください");
      showError("有効なメールアドレスを入力してください");
      setIsSubmitting(false);
      return;
    }
    setEmailError("");

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      showSuccess("パスワード再設定用URLをメールで送信しました");

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      showError("送信に失敗しました。もう一度お試しください");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = (): void => {
    showSuccess("ログイン画面に戻ります");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <NavbarComponent showAvatar={false} />
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-text mb-6">
              パスワード再設定
            </h2>
            <div className="space-y-2 mb-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                現在使っているメールアドレスを入力してください。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                パスワード再設定用のURLをメールで送信いたします。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-text mb-2"
              >
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                placeholder="example@example.com"
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-500">
                  {emailError}
                </p>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-pill shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-200 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? (
                  "送信中..."
                ) : (
                  "パスワード再設定用URLを送信する"
                )}
              </button>
            </div>


            <div className="text-center pt-4">
              <button
                onClick={handleBackToLogin}
                className="text-sm text-gray-600 hover:text-brand-primary transition-colors duration-200 underline"
              >
                ログイン画面にもどる
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordResetPage;