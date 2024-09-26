'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const SignUp = ({ onSignUp, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert('Sign up successful! Please check your email for verification.');
      onSignUp(data.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSignUp} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
          Sign Up
        </button>
      </form>
      <p className="text-center">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-blue-500 underline">
          Log In
        </button>
      </p>
    </div>
  );
};

export default SignUp;