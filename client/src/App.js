import React, {useState, useEffect} from 'react';
import AuthContext from "./contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar"
import login from "./pages/auth/Login";

import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import CreateCategory from "./pages/Category/CreateCategory";
import BrowseCategory from "./pages/Category/BrowseCategory";
import ShowCategory from "./pages/Category/showCategory"
import CreateForum from "./pages/Forum/CreateForum";
import ShowForum from "./pages/Forum/ShowForum";
import CreateThread from "./pages/Threads/ShowThread";
import ShowThread from "./pages/Threads/ShowThread"

function App() {
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get('/api/auth/init', {params: {token}});
    const {user} = response.data;
    setUser(user);
    setIsInitiated(true);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("token", null);
  };

  return (
      <div>
        {isInitiated && (
            <AuthContext.Provider value={{user, setUser, handleLogout}}>
              <Router>
                <Navbar />
                <Switch>
                  <Route path="/" exact>
                    <Home/>
                  </Route>
                  <Route path="/auth/login">
                    {!user ? <login/> : <Redirect to="/"/>}
                  </Route>
                  <Route path="/auth/register">
                    {!user ? <Register/> : <Redirect to="/"/>}
                  </Route>
                  <Route path="/category/create">
                    {user ? <CreateCategory/> : <Redirect to="/auth/login"/>}
                  </Route>
                  <Route path="/category/:id">
                    <ShowCategory/>
                  </Route>
                  <Route path="/category">
                    <BrowseCategory/>
                  </Route>
                  <Route path="/forum/create/:id">
                    {user ? <CreateForum/> : <Redirect to="/auth/login"/>}
                  </Route>
                  <Route path="/forum/:id">
                    <ShowForum/>
                  </Route>
                  <Route path="/thread/create/:id">
                    {user ? <CreateThread/> : <Redirect to="/auth/login"/>}
                  </Route>
                  <Route path="/thread/:id">
                    <ShowThread/>
                  </Route>
                </Switch>
              </Router>
            </AuthContext.Provider>
        )}
      </div>
  );
}

export default App;