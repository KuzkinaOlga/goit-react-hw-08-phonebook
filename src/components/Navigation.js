import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink style={{ marginRight: 10 }} to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      <NavLink to="/phonebook">
        <Button variant="contained">Phonebook</Button>
      </NavLink>
    </nav>
  );
};
export default Navigation;
