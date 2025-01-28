import { Route, Routes } from "react-router";
import Login from "./components/guest/Login";
import Register from "./components/guest/Register";
import { Home } from "./components/Home";
import { Info } from "./components/commun/Info";
import { Users } from "./components/admin/Users";
import { ProtectedLayout } from "./components/layout/protectedLayout";

const App = () => {
  return (
    <>
      {/* Navbar always visible */}

      {/* Route configuration */}
      <Routes>
        {/* Parent Route with Nested Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Info />} />
            <Route path="users" element={<Users  />} />
            <Route path="projects" element={<Info />} />
          </Route>

        </Route>

        {/* Guest Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export { App };
