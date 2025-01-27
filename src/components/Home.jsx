import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if the user is not logged in
    if (!user.isLoggedIn) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Render a loading state while checking authentication
  if (!user.isLoggedIn) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Welcome to the home page.</p>
    </div>
  );
};

export { Home };