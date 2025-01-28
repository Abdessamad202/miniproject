import { Navigate, Outlet } from "react-router";
import { Navbar } from "./NavBar";

const ProtectedLayout = () => {
  const token = window.sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
};
export {ProtectedLayout}