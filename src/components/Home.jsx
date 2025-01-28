import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { In } from "../slices/userSlice"; // Ensure this action is defined in your userSlice
import axios from "axios";
import { getUsers } from "../slices/usersSlice"; // Ensure this action is defined in your usersSlice

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add a loading state
  const token = window.sessionStorage.getItem('token');

  useEffect(() => {
    const fetchUserInfo = async () => {
      const headers = {
        'auth-token': token, // Attach the access token
        'Content-Type': 'application/json',
      };
      try {
        // Fetch user info
        const response = await axios.get('http://localhost:3000/application/api/userInfo', { headers });
        dispatch(In({ user: response.data.user }));

        // Handle the response (e.g., update user state if needed)
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching user info:", error);
        navigate("/login"); // Redirect to login on error
      }
    };

    fetchUserInfo();
  }, [navigate, dispatch, token]);

  useEffect(() => {
    const fetchUsersInfo = async () => {
      if (user && user.role === "admin") {
        const headers = {
          'auth-token': token, // Attach the access token
          'Content-Type': 'application/json',
        };
        try {
          const userResponse = await axios.get('http://localhost:3000/application/api/users', { headers });
          dispatch(getUsers(userResponse.data));
        } catch (error) {
          console.error("Error fetching users info:", error);
        }
      }
    };

    fetchUsersInfo();
  }, [user, dispatch, token]);

  // Render a loading state while checking authentication or fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};

export { Home };