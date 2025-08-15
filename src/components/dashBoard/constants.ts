export const dashboardStats = [
  {
    title: 'ユーザー登録数累計',
    period: '',
    value: '450',
    unit: '人',
    subValue: '400人 (前月時点の累計)',
    change: '+12.5%',
    changeType: 'up',
    icon: 'users',
  },
  {
    title: 'アクティブユーザー',
    period: '2024年2月1日 - 2024年2月5日',
    value: '50',
    unit: '人/今月',
    subValue: '12人 (前月時点)',
    change: '+316.6%',
    changeType: 'up',
    icon: 'users',
  },
  {
    title: '定着率',
    period: '2024年1月1日 - 2024年1月31日',
    value: '10',
    unit: '%/前月',
    subValue: '12% (前々月)',
    change: '-16.6%',
    changeType: 'down',
    icon: 'award',
  },
  {
    title: '平均検索回数',
    period: '2024年2月1日 - 2024年2月5日',
    value: '4',
    unit: '回/今月',
    subValue: '2回 (前月の今日時点)',
    change: '+100%',
    changeType: 'up',
    icon: 'search',
  },
  {
    title: '抽選利用回数',
    period: '2024年2月1日 - 2024年2月5日',
    value: '125',
    unit: '回/今月',
    subValue: '85回 (前月の今日時点)',
    change: '+47%',
    changeType: 'up',
    icon: 'award',
  },
  {
    title: 'アカウント削除数',
    period: '2024年2月1日 - 2024年2月5日',
    value: '10',
    unit: '人/今月',
    subValue: '8人 (前月の今日時点)',
    change: '+25%',
    changeType: 'up',
    icon: 'trash',
  },
];


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