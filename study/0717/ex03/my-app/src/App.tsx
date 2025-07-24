import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@fontsource/material-icons";  
import RefTest from "./pages/RefTest";
import { UserProvider, UserProfile } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Context Example</h1>
      </header>
      <UserProvider>
        <UserProfile />
      </UserProvider>
      <RefTest />
    </div>
  );
}
    