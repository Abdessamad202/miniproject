import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import {  Out } from "../slices/userSlice"; // Make sure to define the logout action in your userSlice

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Redirect to login if the user is not logged in
    if (!user.isLoggedIn) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(Out());
    navigate("/login");
  };

  // Render a loading state while checking authentication
  if (!user.isLoggedIn) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Welcome to the home page.</p>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export { Home };