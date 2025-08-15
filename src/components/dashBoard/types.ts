export type DashboardStat = {
  title: string;
  period: string;
  value: string;
  unit: string;
  subValue: string;
  change: string;
  changeType: "up" | "down" | string;
  icon: "users" | "award" | "search" | "trash";
};

export type User = {
  id: number;
  nickname: string;
  email: string;
  birthYear: string;
  birthMonth: string;
  gender: string;
  location: string;
  registrationDate: string;
};

export type MenuItem = {
  id: string;
  label: string;
  icon: string;
};