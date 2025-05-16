import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import '../styles/login.css';
import Toast from '../components/Toast';
import axios from 'axios';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [toast, setToast] = useState({ message: '', type: '', visible: false });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/token/', data);
      const { access, refresh } = response.data;
      Cookies.set('access_token', access);
      Cookies.set('refresh_token', refresh);
      // Redirect to dashboard or another page
    } catch (error) {
      setToast({ message: 'Login failed. Please check your credentials.', type: 'error', visible: true });
    }
  };

  const handleToastClose = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {toast.visible && <Toast message={toast.message} type={toast.type} onClose={handleToastClose} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button className="google-login">
          <FaGoogle /> Login with Google
        </button>
        <button className="facebook-login">
          <FaFacebook /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
