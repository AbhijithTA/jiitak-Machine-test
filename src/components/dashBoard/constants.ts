export const dashboardStats = [
  {
    title: "ユーザー数",
    period: "2024年01月",
    value: "850",
    unit: "人",
    subValue: "前年同月比",
    change: "+5%",
    changeType: "up",
    icon: "users",
  },
  {
    title: "表彰回数",
    period: "2024年01月",
    value: "25",
    unit: "回",
    subValue: "前年同月比",
    change: "+8%",
    changeType: "up",
    icon: "award",
  },
  {
    title: "検索回数",
    period: "2024年01月",
    value: "1,200",
    unit: "件",
    subValue: "前年同月比",
    change: "-3%",
    changeType: "down",
    icon: "search",
  },
  {
    title: "削除数",
    period: "2024年01月",
    value: "30",
    unit: "件",
    subValue: "前年同月比",
    change: "-2%",
    changeType: "down",
    icon: "trash",
  },
  {
    title: "新規登録",
    period: "2024年01月",
    value: "150",
    unit: "人",
    subValue: "前年同月比",
    change: "+12%",
    changeType: "up",
    icon: "users",
  },
  {
    title: "退会者数",
    period: "2024年01月",
    value: "12",
    unit: "人",
    subValue: "前年同月比",
    change: "-4%",
    changeType: "down",
    icon: "trash",
  },
] as const;

export const chartData = {
  labels: ['10代未満', '10代', '20代', '30代', '40代', '50代', '60代', '70代', '80代', '90代以上'],
  datasets: [
    {
      label: '男性',
      data: [200, 350, 650, 750, 850, 650, 400, 250, 150, 75],
      backgroundColor: '#FF8C00',
      borderRadius: 0,
    },
    {
      label: '女性',
      data: [150, 250, 500, 600, 700, 500, 300, 150, 100, 50],
      backgroundColor: '#FFB347',
      borderRadius: 0,
    },
    {
      label: 'その他',
      data: [20, 30, 80, 100, 120, 80, 50, 30, 20, 15],
      backgroundColor: '#FFCC80',
      borderRadius: 0,
    },
    {
      label: '回答なし',
      data: [10, 20, 50, 60, 70, 50, 30, 20, 10, 8],
      backgroundColor: '#FFE0B2',
      borderRadius: 0,
    },
  ],
};

export const usersData = [
  { id: 1, nickname: 'ゆうと', email: 'example1@example.com', birthYear: '1992年', birthMonth: '12月', gender: '男性', location: '東京都', registrationDate: '2024年01月12日' },
  { id: 2, nickname: 'ニックネーム最大12文字', email: 'user234@example.net', birthYear: '1987年', birthMonth: '5月', gender: '女性', location: '東京都', registrationDate: '2024年01月12日' },
  { id: 3, nickname: 'わんこ好き', email: 'test_user@gmail.com', birthYear: '1996年', birthMonth: '10月', gender: '男性', location: '東京都', registrationDate: '2024年01月12日' },
  { id: 4, nickname: 'はるかぜ', email: 'dummy_email_567@yahoo.co.jp', birthYear: '1998年', birthMonth: '2月', gender: '男性', location: '静岡県', registrationDate: '2024年01月12日' },
  { id: 5, nickname: 'あおい', email: 'exampleaddress124323@outlook.com', birthYear: '1978年', birthMonth: '5月', gender: '女性', location: '埼玉県', registrationDate: '2024年01月11日' },
  { id: 6, nickname: 'ポンとろう', email: 'random.user@example.org', birthYear: '1978年', birthMonth: '6月', gender: '女性', location: '栃木県', registrationDate: '2024年01月11日' },
  { id: 7, nickname: 'まさやん', email: 'email1234@example.co.jp', birthYear: '1972年', birthMonth: '8月', gender: '回答しない', location: '鹿児島県', registrationDate: '2024年01月11日' },
  { id: 8, nickname: 'なつこ', email: 'user_test456@gmail.com', birthYear: '1969年', birthMonth: '11月', gender: '回答しない', location: '茨城県', registrationDate: '2024年01月11日' },
  { id: 9, nickname: 'びょんびょん', email: 'example_email@yahoo.com', birthYear: '1984年', birthMonth: '4月', gender: '女性', location: '東京都', registrationDate: '2024年01月10日' },
  { id: 10, nickname: 'ひまわりさん', email: 'dummy.address@example.net', birthYear: '1988年', birthMonth: '4月', gender: 'その他', location: '福岡', registrationDate: '2024年01月10日' },
];

export const menuItems = [
  { id: 'dashboard', label: 'ダッシュボード', icon: '📊' },
  { id: 'users', label: '登録ユーザー', icon: '👤' },
  { id: 'winners', label: '当選者', icon: '🎯' },
  { id: 'admin', label: '運営管理者', icon: '🛠' },
];