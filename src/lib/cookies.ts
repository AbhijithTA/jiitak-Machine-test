export const SESSION_COOKIE = "lm_session";
export const setCookieHeader = (name:string, value:string, maxAge=60*60*8) =>
  `${name}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax`;
export const clearCookieHeader = (name:string) =>
  `${name}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`;
