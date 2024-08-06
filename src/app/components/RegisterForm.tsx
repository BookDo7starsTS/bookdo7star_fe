'use client';

import { useState, ChangeEvent, useEffect, FormEvent } from 'react';

import Image from 'next/image';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    policyyn: false,
  });

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [checkPolicyError, setCheckPolicyError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    const targetValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [targetName]: targetValue });
  };

  useEffect(() => {
    if (formData.confirmPassword && formData.password) {
      if (formData.password !== formData.confirmPassword) {
        setConfirmPasswordError(true);
      } else {
        setConfirmPasswordError(false);
      }
    }
  }, [formData.confirmPassword, formData.password]);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError(false);
    setCheckPolicyError(false);
    setNameError(false);
    setPasswordError(false);

    if (!formData.email) {
      setEmailError(true);
      return;
    }
    if (!formData.name) {
      setNameError(true);
      return;
    }
    if (!formData.password) {
      setPasswordError(true);
      return;
    }
    if (!formData.confirmPassword) {
      setPasswordError(true);
      return;
    }
    if (!formData.policyyn) {
      setCheckPolicyError(true);
      return;
    }

    alert('register!');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: '',
      policyyn: false,
    });
  };

  return (
    <div className="flex items-center justify-center mr-2 ml-2 max-w-full">
      <div className="w-1/3 mr-5">
        <Image src={'/images/register.png'} alt="register" width={400} height={400} />
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="border-none border-gray-400 p-10 w-96 shadow-md rounded-lg ml-5">
          <h2 className="text-xl font-semibold leading-7 text-gray-900 text-center"> Register </h2>
          <div className="mt-2">
            <label htmlFor="name" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                value={formData.name}
                onChange={handleOnChange}
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          {nameError && <p className="text-xs text-red-600 mt-0">This field is mandatory</p>}
          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                value={formData.email}
                onChange={handleOnChange}
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          {emailError && <p className="text-xs text-red-600 mt-0">This field is mandatory</p>}
          <div className="mt-2">
            <label htmlFor="password" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                placeholder="enter password"
                value={formData.password}
                onChange={handleOnChange}
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          {passwordError && <p className="text-xs text-red-600 mt-0">This field is mandatory</p>}

          <div className="mt-2">
            <label htmlFor="confirmPassword" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="confirmPassword"
                placeholder="please confirm password"
                value={formData.confirmPassword}
                onChange={handleOnChange}
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          {confirmPasswordError && <p className="text-xs text-red-600 mt-0">Password does not match!</p>}
          {passwordError && <p className="text-xs text-red-600 mt-0">This field is mandatory</p>}
          <div className="mt-4">
            <label htmlFor="address" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                placeholder="enter your address (optional)"
                value={formData.address}
                onChange={handleOnChange}
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="phone" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Phone
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone"
                placeholder="enter your phone number (optional)"
                value={formData.phone}
                onChange={handleOnChange}
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row items-center justify-between">
            <input type="checkbox" name="policyyn" className="form-checkbox h-4 w-4" checked={formData.policyyn} onChange={handleOnChange} />
            <label htmlFor="policyyn" className="text-gray-900">
              I agree to the terms and conditions.
            </label>
          </div>
          {checkPolicyError && <p className="text-xs text-red-600 mt-0">You should agree policy</p>}
          <div className="mt-4 flex justify-end">
            <button type="submit" className="border rounded-lg border-gray-400 p-2 shadow-sm text-green-700 hover:bg-green-700 hover:text-white">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
