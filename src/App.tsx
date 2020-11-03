import React, { FC } from 'react';
import './App.css';
import Home from './views/Pages/Home/Home';
import Login from './views/Pages/Login/Login';
import Register from './views/Pages/Register/Register';
import UserProfile from './views/Pages/UserProfile/UserProfile';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App: FC = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
      <Switch>
        <Route path="/register" exact component={Register} />
      </Switch>
      <Switch>
        <Route path="/user-profile" exact component={UserProfile} />
      </Switch>
    </Router>

  </div>
);


export default App;
