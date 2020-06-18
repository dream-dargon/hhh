import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { GET_NAME } from '@/constants/actionTypes'
import getName from '@/actions/hook'
import str from '@/utils/string'
import Navs from '@/components/Navs'
import List from '@/components/List'
import useMouse from './mouse'
import axios from 'axios'

let preCount = ''

function Example(props) {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [age, setAge] = useState(0);
  const [arr, setArr] = useState([1, 2]);
  const [obj, setObj] = useState({ name: 'xx'});
  const cid = props.location.pathname.split('/')[1];

  const diffren = () => {
    preCount = count;
    setCount(old => {
      // console.log(old,1)
    })
    setCount(count + 1)
    setAge(age + 1)
    arr.push(4)
    setArr([...arr])
    setObj({ ...obj, name: 'hh' })
    setTimeout(() => {
      // console.log(count, 'a')
    }, 1000);
  }
  console.log(preCount,2)

  useEffect(() => {
    // getNames()
  }, []);

  useEffect(() => {
    axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser')
      .then(res => setData(res.data.users))
  }, [count]);

  // const fn = () => {
  //   console.log(111,'22222222222')
  // }

  // useEffect(() => {
  //   document.body.addEventListener('click',fn,false)
  //   return () => {
  //     console.log(333,'33333333')
  //     document.body.removeEventListener('click',fn,false)
  //   }
  // }, [age]);

  // console.log(arr,obj)
  // console.log(count, 'b')
  const { x, y } = useMouse()

  return (
    <div>
      <Navs />
      <List cid={cid} />
      {JSON.stringify(data)}
      <p>{count}--{age}--{arr}</p>
      {obj.name}
      <button onClick={diffren}>
        Click me
      </button>
      <button onClick={diffren}>
        点击
      </button>
      {x}---{y}
    </div>
  );
}

export default connect(state => {
  return {
    
  }
},{
  GET_NAME: getName[str(GET_NAME)]
})(Example);