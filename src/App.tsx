import React, { FC } from 'react';
import './App.css';
import Home from './views/Pages/Home/Home';
import Login from './views/Pages/Login/Login';
import Register from './views/Pages/Register/Register';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './views/Pages/Cart/Cart';
import Detail from "./views/Pages/Detail";

const App: FC = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
    </Router>

  </div>
);


export default App;
