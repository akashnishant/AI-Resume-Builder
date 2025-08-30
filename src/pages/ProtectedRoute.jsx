// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, user }) {
  if (!user || user.role !== "admin") {
    if(user && user?.role === "user") {
      return children;
    }
    return <Navigate to="/" replace />;
  }
  return children;
}
