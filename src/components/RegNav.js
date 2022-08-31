import { NavLink } from 'react-router-dom';

const RegNav = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
export default RegNav;
