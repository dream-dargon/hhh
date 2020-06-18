import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function List (props) {
  const [data, setData] = useState([])
  const { cid } = props || 492;
  console.log(props,11)
  useEffect(() => {
    axios
     .post(
       `http://vueshop.glbuys.com/api/home/category/show?cid=${cid}&token=1ec949a15fb709370f`
      )
     .then(res => {
      setData(res.data.data)
     })
  }, [cid]);

  return (
    <div>
      {
        data.map(v => {
          return (
            <p key={v.cid}>{v.title}</p>
          )
        })
      }
    </div>
  )
}
