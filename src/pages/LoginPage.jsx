import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authApi from '../redux/auth/authApi';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  IconButton,
  Button,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authApi.logIn(values));
    setValues({ password: '', email: '', showPassword: false });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            // type={values.showPassword ? 'text' : 'password'}
            value={values.email}
            onChange={handleChange('email')}
            label="email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};
export default LoginPage;
