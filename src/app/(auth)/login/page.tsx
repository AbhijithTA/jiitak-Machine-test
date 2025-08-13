"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (): void => {
    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }
    alert(`ログイン試行: ${email}`);
    // TODO: Implement actual login logic
  };

  const handleForgotPassword = (): void => {
    alert("パスワードリセット機能");
    // TODO: Implement password reset logic
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">ル</span>
          </div>
          <h1 className="text-xl font-semibold text-brand-primary">ルックミール</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-text mb-8">ログイン</h2>
          </div>

          {/* Login Form */}
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
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-brand-text mb-2"
              >
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

            {/* Login Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-200"
              >
                ログイン
              </button>
            </div>

            {/* Forgot Password Link */}
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs text-gray-500">
          © 2025 ルックミール. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
