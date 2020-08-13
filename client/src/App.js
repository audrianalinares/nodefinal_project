import React, {useState, useEffect} from 'react';
import AuthContext from "./contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';

function App() {
  const [user, setUser] = useState(initialState: null);
  const [isInitiated, setIsInitiated] = useState(initialState: false);

  const handleLogout = () => {
    setUser(value:null);
    localStorage:setItem("token",null);
  };

  return (
    <div>
      {isInitiated && (
          <AuthContext.Provider value={{user, setUser, handleLogout}}>

          </AuthContext.Provider>
      )}

    </div>
  );
}

export default App;
