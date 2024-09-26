'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Login = ({ onLogin, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      onLogin(data.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Log In
        </button>
      </form>
      <p className="text-center">
        Don&apos;t have an account?{' '}
        <button onClick={onSwitchToSignUp} className="text-blue-500 underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;