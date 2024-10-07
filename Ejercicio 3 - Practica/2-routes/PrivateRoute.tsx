import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "./authStore.ts";

export const PrivateRoute = () => {
  const { token } = useAuthStore();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
