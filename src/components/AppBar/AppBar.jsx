import Navigation from 'components/Navigation';
import RegNav from 'components/RegNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn && (
        <>
          <Navigation /> <UserMenu />
        </>
      )}
      {!isLoggedIn && <RegNav />}
    </>
  );
};
export default AppBar;
