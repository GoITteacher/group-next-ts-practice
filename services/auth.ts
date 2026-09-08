import {
  LoginBody,
  LoginResponse,
  RefreshResponse,
  RegisterBody,
} from "@/types/auth";
import { proxyServer } from "./server-config";

export const register = async (body: RegisterBody) => {
  const res = await proxyServer.post("/auth/register", body);
  return res.data;
};

export const login = async (body: LoginBody) => {
  const res = await proxyServer.post<LoginResponse>("/auth/login", body);
  return res.data;
};

export const refresh = async () => {
  const res = await proxyServer.post<RefreshResponse>("/auth/refresh", null);
  return res.data;
};

export const logout = async () => {
  const res = await proxyServer.post("/auth/logout", null);
  return res.data;
};

export const getMe = async () => {
  const res = await proxyServer.get("/auth/me");
  return res.data;
};
