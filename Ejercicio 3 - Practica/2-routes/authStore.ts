import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuthStore = create((set) => ({
  token: Cookies.get("token") ?? null,
  setToken: (token: string) => {
    Cookies.set("token", token);
    set({ token });
  },
  logout: () => set({ token: null }),
}));
