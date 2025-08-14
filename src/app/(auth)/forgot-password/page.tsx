"use client";
import React, { useState } from "react";

const PasswordResetPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleSubmit = (): void => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("有効なメールアドレスを入力してください");
      return;
    }
    setEmailError("");

    alert("パスワード再設定用URLを送信しました");
    // Frontend only - no real logic needed
  };

  const handleBackToLogin = (): void => {
    alert("ログイン画面に戻ります");
    // Frontend only - navigation would go here
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">ル</span>
            </div>
            <h1 className="text-xl font-semibold text-brand-primary">
              ルックミール
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Title and Description */}
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

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
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
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                placeholder=""
              />
              <p className="mt-2 text-sm" style={{ color: "#FF3B30" }}>
                {emailError}
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-pill shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-200"
              >
                パスワード再設定用URLを送信する
              </button>
            </div>

            {/* Back to Login Link */}
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs text-gray-500">
          © 2025 ルックミール. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PasswordResetPage;
