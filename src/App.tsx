import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from "./components/authorization/signIn";
import SignUp from './components/authorization/signUp';
import { Navbar } from './components/Navbar/Navbar';
import MainPage from './components/pages/MainPage';
import { Auth } from './context/Auth';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('idToken') || null);
  localStorage.setItem('fav', JSON.stringify([]));
  const login = useCallback((token: string) => {
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
  }, []);
  return (
    <Auth.Provider
      value={{
        token: token,
        isLoggedIn: !!token,
        login: login,
        logout: logout,
      }}>
      <BrowserRouter>
        <Navbar token={token} logout={logout} />
        <Routes>
          <Route path="/sign-in" element={<SignIn login={login} />} />
          <Route path="/sign-up" element={<SignUp login={login} />} />
          <Route path="/" element={<MainPage token={token} />} />
          <Route path="/about-us" element={<MainPage token={token} />} />
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default App;
