import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import zxcvbn from 'zxcvbn';
import '../styles/register.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  terms: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePasswordChange = (e) => {
    const { score } = zxcvbn(e.target.value);
    setPasswordStrength(score);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register('name')} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register('password')} onChange={handlePasswordChange} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
          <div className="password-strength-meter">
            <div className={`strength-${passwordStrength}`}></div>
          </div>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" {...register('terms')} />
            I agree to the terms and conditions
          </label>
          {errors.terms && <p className="error-message">{errors.terms.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
