import React, { FC } from 'react';
import './App.css';
import Home from './views/Pages/Home/Home';
import Login from './views/Pages/Login/Login';
import Register from './views/Pages/Register/Register';
import UserProfile from './views/Pages/UserProfile/UserProfile';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './views/Pages/Cart/Cart';
import Detail from "./views/Pages/Detail";
import CategoryProduct from './views/Pages/Category/CategoryProduct';


const App: FC = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/category/:id" exact component={CategoryProduct} />
      </Switch>
      <Switch>
        <Route path="/user-profile" exact component={UserProfile} />
      </Switch>
    </Router>
  </div>
);


export default App;
