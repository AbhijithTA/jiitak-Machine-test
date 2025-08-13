"use client"

import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FiUsers, FiUserCheck, FiAward, FiSearch, FiTrash2 } from "react-icons/fi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Dashboard: FC = () => {
  const barData = {
    labels: ["10代未満", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代以上"],
    datasets: [
      {
        label: "男性",
        data: [150, 200, 300, 400, 450, 300, 150, 100, 80, 50],
        backgroundColor: "#f9a825",
      },
      {
        label: "女性",
        data: [100, 150, 250, 350, 400, 250, 120, 80, 60, 30],
        backgroundColor: "#ffcc80",
      },
      {
        label: "その他",
        data: [20, 30, 40, 50, 60, 40, 20, 10, 5, 3],
        backgroundColor: "#ffe0b2",
      },
      {
        label: "回答なし",
        data: [10, 15, 20, 25, 30, 15, 10, 5, 3, 1],
        backgroundColor: "#fff3e0",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" as const },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  const stats = [
    {
      label: "ユーザー登録数累計",
      value: "450人",
      sub: "400人 (前月時点の累計)",
      change: "+12.5%",
      changeType: "up",
      icon: <FiUsers size={20} />,
    },
    {
      label: "アクティブユーザー",
      value: "50人 / 今月",
      sub: "12人 (前月時点)",
      change: "+316.6%",
      changeType: "up",
      icon: <FiUserCheck size={20} />,
    },
    {
      label: "定着率",
      value: "10% / 前月",
      sub: "12% (前々月)",
      change: "-16.6%",
      changeType: "down",
      icon: <FiAward size={20} />,
    },
    {
      label: "平均検索回数",
      value: "4回 / 今月",
      sub: "2回 (前月の今日時点)",
      change: "+100%",
      changeType: "up",
      icon: <FiSearch size={20} />,
    },
    {
      label: "抽選利用回数",
      value: "125回 / 今月",
      sub: "85回 (前月の今日時点)",
      change: "+47%",
      changeType: "up",
      icon: <FiAward size={20} />,
    },
    {
      label: "アカウント削除数",
      value: "10人 / 今月",
      sub: "8人 (前月の今日時点)",
      change: "+25%",
      changeType: "up",
      icon: <FiTrash2 size={20} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4 font-bold text-xl text-orange-500">ルックミール</div>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-3 p-3 bg-orange-100 text-orange-600 font-medium">
              📊 ダッシュボード
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
              👤 登録ユーザー
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
              🎯 当選者
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
              🛠 運営管理者
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.slice(0, 3).map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">{stat.label}</span>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mt-2">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
              <div
                className={`text-xs mt-1 font-semibold ${
                  stat.changeType === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {stats.slice(3).map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">{stat.label}</span>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mt-2">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
              <div
                className={`text-xs mt-1 font-semibold ${
                  stat.changeType === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded shadow mt-6">
          <h2 className="text-gray-600 font-semibold mb-4">性別・年代比</h2>
          <Bar data={barData} options={barOptions} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
