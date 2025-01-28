import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { In, Out } from "../slices/userSlice"; // Ensure this action is defined in your userSlice
import axios from "axios";
import { AddProject } from "./addProject";
import { Users } from "./Users";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add a loading state
  const token = window.sessionStorage.getItem('token');
      const headers = {
        'auth-token': token, // Attach the access token
        'Content-Type': 'application/json',
      }
  useEffect(() => {
    const fetchUserInfo = async () => {

      // Redirect to login if the user is not logged in
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        // Fetch user info
        const response = await axios.get('http://localhost:3000/application/api/userInfo', {headers});
        dispatch(In({ user: response.data.user }))

        // Handle the response (e.g., update user state if needed)
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching user info:", error);
        navigate("/login"); // Redirect to login on error
      }
    };

    fetchUserInfo();
  }, [navigate]);
  useEffect(() => {
    const fetchUserInfo =  async () => {
      if(user.role === "admin"){
        const userResponse = await axios.get('http://localhost:3000/application/api/users', {headers});
        setusers(userResponse.data)
      }
    }
    fetchUserInfo()
    return () => {

    };
  }, [user]);

  const handleLogout = () => {
    try {
      dispatch(Out()); // Dispatch the logout action
      window.sessionStorage.removeItem('token'); // Clear the token from session storage
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Render a loading state while checking authentication or fetching data
  if (loading || !user.isLoggedIn) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <h2>you are {user.role}</h2>
      <p>Welcome to the home page.</p>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      {user.role === "admin" ? <>
        <AddProject /><Users users={users}/>
      </>
      : null}

    </div>
  );
};

export { Home };