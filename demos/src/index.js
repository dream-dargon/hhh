import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom'
import './index.less';
// import App from './App';
import {store} from '@/store'
import Hook from '@/pages/hook'
import Home from '@/pages/home'
import User from '@/pages/user'
import Dates from '@/pages/date'
import Img from '@/pages/img'
import Tabtag from '@/pages/tabtag'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/*<h1><NavLink to='/date/1'>date-1</NavLink></h1>
<h1><NavLink to='/date/2'>date-2</NavLink></h1>*/}
      <Switch>
        <Route path="/tabtag" component={Tabtag} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/date/:id" component={Dates} />
        <Route path="/img" component={Img} />
        <Route path="/:cid" component={Hook} />
        
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

