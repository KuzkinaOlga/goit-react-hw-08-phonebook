import Navigation from 'components/Navigation';
import RegNav from 'components/RegNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import AppNav from '@mui/material/AppBar';
import { Container, Toolbar } from '@mui/material';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppNav color="default" position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
          {isLoggedIn && (
            <>
              <Navigation /> <UserMenu />
            </>
          )}
          {!isLoggedIn && <RegNav />}
        </Toolbar>
      </Container>
    </AppNav>
  );
};
export default AppBar;
