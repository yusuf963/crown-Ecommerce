import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css'

import HomePage from './component/home-page';
import ShopPage from './component/shop/shop.component.jsx'
import SignInAndSignUpPage from './component/sign-in-up/sign-in-up-component';
import Header from './component/header/hearder-cmponent'



function App(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={ShopPage}/> 
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
