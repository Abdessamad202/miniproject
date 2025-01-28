import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router';
import { Out } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const location = useLocation(); // Get the current route location
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    try {
      dispatch(Out()); // Dispatch the logout action
      window.sessionStorage.removeItem('token'); // Clear the token from session storage
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent', // Transparent background
        boxShadow: 'none', // Remove shadow
        color: 'black', // Adjust text color
      }}
    >
      <Toolbar>
        {/* Logo or App Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/home"
            color="inherit"
            sx={{
              backgroundColor: location.pathname === '/' ? 'rgba(0, 0, 0, 0.1)' : 'transparent', // Active link background
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Hover background
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/users"
            color="inherit"
            sx={{
              backgroundColor: location.pathname === '/users' ? 'rgba(0, 0, 0, 0.1)' : 'transparent', // Active link background
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Hover background
              },
            }}
          >
            Users
          </Button>
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            sx={{
              backgroundColor: location.pathname === '/projects' ? 'rgba(0, 0, 0, 0.1)' : 'transparent', // Active link background
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Hover background
              },
            }}
          >
            Projects
          </Button>
        </Box>

        {/* Logout Button */}
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export  {Navbar};