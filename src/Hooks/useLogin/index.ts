import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../Redux/Slice';
import { navigate } from '../../Utils/Navigate';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

interface LoginValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: LoginValues) => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      if (values.email && values.password) {
        dispatch(login({ email: values.email }));
        Toast.show({ type: 'success', text1: 'Login successful!' });
        // navigate('AppNavigation', { screen: 'Home' });
        Toast.show({
          type: 'success',
          text1: "Login Successfull",
          text2: `${values.email} has logged in successfully!`
        })
      }
    } catch (error) {
      Toast.show({ type: 'error', text1: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return {
    LoginSchema,
    handleLogin,
    loading,
  };
};
