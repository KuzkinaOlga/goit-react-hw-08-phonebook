import { Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Fingerprint from '@mui/icons-material/Fingerprint';

const RegNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <Button variant="contained" size="small" style={{ marginRight: 10 }}>
          Registration
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button
          size="small"
          startIcon={<Fingerprint color="secondary" />}
          variant="contained"
        >
          Login
        </Button>
      </NavLink>
    </div>
  );
};
export default RegNav;
