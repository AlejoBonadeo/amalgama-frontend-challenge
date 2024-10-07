import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "./authStore.ts";

export const PublicRoute = () => {
  const { token } = useAuthStore();

  return !token ? <Outlet /> : <Navigate to="/home" replace />;
};
