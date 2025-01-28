import { useSelector } from "react-redux";
import PropTypes from 'prop-types';


const Info = () => {
  const user = useSelector((state) => state.user);

  // if (loading || !user.isLoggedIn) {
  //   return <div>Loading...</div>; // or a loading spinner
  // }

  return (
    <>
      <h1>Hello, {user.name}!</h1>
      <h2>your email is {user.email}</h2>
      <h3>you are {user.role}</h3>
      <p>Welcome to the home page.</p>
    </>
  );
};

Info.propTypes = {
  loading: PropTypes.bool,
};

export { Info }