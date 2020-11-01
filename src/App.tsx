import React, { FC } from 'react';
import './App.css';
import Home from './views/Pages/Home/Home';
import Login from './views/Pages/Login/Login';
import Register from './views/Pages/Register/Register';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './views/Pages/Cart/Cart';

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
        <Route path="/cart" exact component={Cart} />
      </Switch>
      {/* <Switch>
        <Route path="/category/:id" exact component={Category} />
      </Switch> */}
    </Router>

  </div>
);


export default App;
