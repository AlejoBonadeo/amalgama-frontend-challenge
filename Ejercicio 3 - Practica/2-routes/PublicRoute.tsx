import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "./authStore.ts";

export const PublicRoute = () => {
  const { user } = useAuthStore();

  return !user ? <Outlet /> : <Navigate to="/home" replace />;
};
