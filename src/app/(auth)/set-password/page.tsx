'use client';

import React, { useState } from 'react';
import { showError, showSuccess } from '@/lib/toast';
import { useRouter } from 'next/navigation';

const SetPasswordPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validatePassword = (pwd: string) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const isHalfWidth = /^[\x20-\x7E]+$/.test(pwd);
    const lengthValid = pwd.length >= 8 && pwd.length <= 20;
    return hasUpper && hasLower && hasNumber && isHalfWidth && lengthValid;
  };

  const isValid = validatePassword(password);

  // this the submit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showError('パスワードが一致しません');
      return;
    }
    if (!isValid) {
      showError('パスワードは8文字以上20文字以内で、半角英数字を含めてください');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      showSuccess('パスワードが設定されました！');
      setLoading(false);
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">ル</span>
            </div>
            <h1 className="text-xl font-semibold text-orange-500">ルックミール</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              パスワード設定
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              パスワードを入力後「設定ボタン」を押してサービスの
              <br />
              利用を開始してください。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                パスワード
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-20"
                  required
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-sm text-gray-500 bg-gray-100 px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors"
                  >
                    {showPassword ? '非表示' : '表示'}
                  </button>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                半角大文字・小文字・数字を含めた8文字以上20文字以内
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                パスワード確認用
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-20"
                  required
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="text-sm text-gray-500 bg-gray-100 px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors"
                  >
                    {showConfirmPassword ? '非表示' : '表示'}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!isValid || password !== confirmPassword || loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {loading ? (
                  <span className="loader border-2 border-t-transparent border-white rounded-full w-5 h-5 animate-spin"></span>
                ) : (
                  '設定'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SetPasswordPage;
