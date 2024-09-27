import React from "react";
import { Navigate } from "react-router-dom";

// A component to protect admin routes
const AdminProtectedRoute = ({ currentUser, children }) => {
  // Check if currentUser is an admin
  if (!currentUser || currentUser.role !== "admin") {
    return <Navigate to="/" replace />; // Redirect non-admin users to home
  }

  return children; // Render the child components (admin routes) if the user is admin
};

export default AdminProtectedRoute;