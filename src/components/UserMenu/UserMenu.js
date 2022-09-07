import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authApi from 'redux/auth/authApi';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Welcome, {name}</span>
      <Button variant="contained" onClick={() => dispatch(authApi.logOut())}>
        Log Out
      </Button>
    </div>
  );
};
export default UserMenu;
