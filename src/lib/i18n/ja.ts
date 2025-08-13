export const t = {
  appName: "ルックミール",
  setPw: {
    title: "パスワード設定",
    help: "パスワードを入力後「設定ボタン」を押してサービスの利用を開始してください。",
    pw: "パスワード",
    pwConfirm: "パスワード確認用",
    show: "表示",
    hide: "非表示",
    rule: "半角大文字・小文字・数字を含めた8文字以上20文字以内",
    submit: "設定",
    done: "パスワードを設定しました。",
  },
  login: {
    title: "ログイン",
    email: "メールアドレス",
    pw: "パスワード",
    submit: "ログイン",
    forgot: "パスワードをお忘れの方",
  },
  forgot: {
    title: "パスワード再設定",
    email: "登録メールアドレス",
    submit: "再設定リンクを送信",
    sent: "再設定リンクを送信しました。",
  },
  nav: { logout: "ログアウト", dash: "ダッシュボード", users: "ユーザー一覧" },
  dash: { title: "ダッシュボード", hello: "ようこそ！" },
  users: {
    title: "登録ユーザー",
    search: "検索...",
    empty: "ユーザーが見つかりません。",
    partial: "一致する一部のみを表示中",
  },
  errors: {
    required: "必須項目です。",
    invalidEmail: "メールアドレスの形式が正しくありません。",
    pwMismatch: "パスワードが一致しません。",
    pwWeak: "パスワードの条件を満たしていません。",
    generic: "エラーが発生しました。しばらくしてから再度お試しください。",
    loginFail: "メールアドレスまたはパスワードが正しくありません。",
  }
} as const;
