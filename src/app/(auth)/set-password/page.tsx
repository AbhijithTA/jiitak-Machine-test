'use client'


import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPasswordApp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('パスワードが一致しません');
      return;
    }
    if (password.length < 8 || password.length > 20) {
      alert('パスワードは8文字以上20文字以内で入力してください');
      return;
    }
    alert('パスワードが設定されました！');
  };

  const validatePassword = (pwd) => {
    const hasHalfWidth = /[a-zA-Z0-9]/.test(pwd);
    const hasFullWidth = /[^\x00-\x7F]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const length = pwd.length >= 8 && pwd.length <= 20;
    
    return { hasHalfWidth, hasFullWidth, hasNumber, length };
  };

  const validation = validatePassword(password);
  const isValid = validation.hasHalfWidth && validation.hasNumber && validation.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Title */}
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

          {/* Form */}
          <div className="space-y-6">
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                パスワード
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-20"
                  placeholder=""
                />
                <div className="absolute inset-y-0 right-2 flex items-center space-x-1">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 border border-gray-300 rounded text-xs">
                    表示
                  </span>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="p-1"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                半角大文字・小文字・数字を含めた8文字以上20文字以内
              </p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                パスワード確認用
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-20"
                  placeholder=""
                />
                <div className="absolute inset-y-0 right-2 flex items-center space-x-1">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 border border-gray-300 rounded text-xs">
                    表示
                  </span>
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="p-1"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Validation Messages */}
            {password && (
              <div className="space-y-1">
                <div className={`text-xs ${validation.length ? 'text-green-600' : 'text-red-600'}`}>
                  ✓ 8文字以上20文字以内
                </div>
                <div className={`text-xs ${validation.hasHalfWidth ? 'text-green-600' : 'text-red-600'}`}>
                  ✓ 半角文字を含む
                </div>
                <div className={`text-xs ${validation.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                  ✓ 数字を含む
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={!isValid || password !== confirmPassword}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                設定
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer (optional) */}
      <footer className="bg-white border-t border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs text-gray-500">
          © 2025 ルックミール. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LoginPasswordApp;