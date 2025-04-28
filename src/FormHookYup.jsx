import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be at most 50 characters')
  .required('Name is required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Email is required'),
  phone: Yup.string()
  .matches(/^[0-9]+$/, 'Phone number must be digits')
  .required('Phone number is required'),
    age: Yup.number()
    .positive('Age must be positive')
    .min(18, 'Age must be greater than 18')
    .required('Age is required')
});
const FormHookYup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log('form submitted', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>React hook form with Yup</h1>
        <div>
          <label>Name</label>
          <input type="text" {...register('name')} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register('email')} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input type="text" {...register('phone')} />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register('age')} />
          {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default FormHookYup;