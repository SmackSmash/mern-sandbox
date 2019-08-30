import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.page';
import SignUp from './pages/sign-up/sign-up.page';
import './app.styles.scss';

const App = props => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
