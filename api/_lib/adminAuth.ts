import { API_BASE_URL } from "./config";

const ADMIN_LOGIN_URL = `${API_BASE_URL}/admin`;
const ADMIN_LOGOUT_URL = `${API_BASE_URL}/admin/logout`;

export async function adminLogin(
  username: string,
  password: string
): Promise<boolean> {
  const response = await fetch(ADMIN_LOGIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  return response.ok;
}

export async function adminLogout(): Promise<void> {
  await fetch(ADMIN_LOGOUT_URL, {
    method: "POST",
    credentials: "include",
  });
}
