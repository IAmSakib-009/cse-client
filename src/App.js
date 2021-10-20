import React, { createContext, useState } from 'react';
import './Styles/app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blogs from './components/Blog/Blogs';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Foods from './components/Services/Foods';
import Genre from './components/Services/Genre';
import Medicines from './components/Services/Medicines';
import About from './components/About/About';
import Login from './components/Login/Login';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser}}>
    <Router>
      <Switch>

        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>

      <Route exact path="/contacts">
        <Contacts />
      </Route>

      <Route exact path="/blogs">
        <Blogs />
      </Route>

      <Route exact path="/gallery">
        <Gallery />
      </Route>

      <Route exact path="/Genre">
        <Genre />
      </Route>

      <Route exact path="/Foods">
        <Foods />
      </Route>

      <Route exact path="/Medicines">
        <Medicines />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
};

export default App;