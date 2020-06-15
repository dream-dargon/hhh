import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Reg, Login, Basic } from './assembly'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/" component={Basic} />
        </Switch>
      </BrowserRouter>
    )
  }
}
