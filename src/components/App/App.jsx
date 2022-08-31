import { Route, Routes } from 'react-router-dom';
import { Container } from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import PhonebookPage from 'pages/PhonebookPage';
import PublicRoute from 'components/routes/PublicRoute';
import PrivateRoute from 'components/routes/PrivateRoute';
import { useDispatch } from 'react-redux';
// import authSelectors from '../../redux/auth/authSelectors';
import { useEffect } from 'react';
import authApi from '../../redux/auth/authApi';

const App = () => {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authApi.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/phonebook" element={<PhonebookPage />} /> */}
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login">
                <PhonebookPage />
              </PrivateRoute>
            }
          />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Container>
    </>
  );
};

export default App;
