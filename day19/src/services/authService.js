import api from "./api";

export async function registerUser(payload) {
  const response = await api.post("/auth/register", payload);
  return response.data;
}

export async function loginUser(credentials) {
  const response = await api.post("/auth/login", new URLSearchParams({
    username: credentials.username,
    password: credentials.password,
  }));
  return response.data;
}

export async function fetchProfile() {
  const response = await api.get("/auth/me");
  return response.data;
}
