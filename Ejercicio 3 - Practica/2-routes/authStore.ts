import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user: user });
  },
  logout: () => set({ user: null }),
}));
