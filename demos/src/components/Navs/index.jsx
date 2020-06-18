import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import axios from 'axios'
import './style.less'

export default function Navs (props) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
     .get('http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f')
     .then(res => {
      setData(res.data.data)
     })
  }, []);
  return (
    <div className="navs">
      {
        data && data.map(v => {
          return (
            <div className='nav' key={v.cid}>
              <NavLink to={`/${v.cid}`}>{v.title}</NavLink>
            </div>
          )
        })
      }
    </div>
  )
}
