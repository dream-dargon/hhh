import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { List, Home } from '@/router/assembly'
import { Navs } from '@@'
import './style.less'

const navList = {
  title: 'APPUI Admin',
  data:[
    {
      title: 'APPS',
      key: 'apps',
      path: '/apps',
      flag: 0
    },
    {
      title: 'Home',
      key: 'home',
      path: '/'
    },
    {
      title: 'List',
      key:'list',
      path: '/list'
    },
    {
      title: 'COMPOENTS',
      key: 'components',
      path: 'components',
      flag: 0
    },
    {
      title: 'Eachart',
      key: 'echart',
      path: '/echart'
    },
    {
      title: 'Forms',
      key:'Error',
      path: '/error'
    },
    {
      title: 'Tables',
      key: 'tables',
      path: '/tables'
    },
    {
      title: 'Pages',
      key:'pages',
      path: '/demo'
    },
    {
      title: 'JS plugins',
      key:'jsplugins',
      path: '/jsplugins'
    },
  ]
}

export default function Basic (props) {
  return (
    <div className='layout-LRwrap'>
      <Navs navList={navList} />

      <section className='section'>

        <div className='main'>
          <Redirect to="/home" />
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </section>
    </div>
  )
}