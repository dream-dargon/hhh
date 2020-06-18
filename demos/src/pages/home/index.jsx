import React, { useEffect, useState } from 'react'
import echarts from 'echarts'
import _ from 'loadsh'
import useMouse from '@/pages/hook/mouse'
import Resize from '@/constants/Resize'
import './style.less'
let id = ''

export default function Home(props) {
  const { x, y } = useMouse()
  const width = Resize()
  const [char, setChar] = useState()

  useEffect(() => {
    setChar(echarts.init(document.getElementById('main')))
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    char && char.setOption(option)
  }, [char])

  useEffect(() => {
    char && char.resize()
  }, [width])

  // const changeFn = _.debounce(() => console.log('执行'), 500);
  const changeFn = _.throttle(() => console.log('执行'), 500, { 'trailing': true });

  // const changeFn = evt => {
  //   const value = evt.target.value
  //   id && clearTimeout(id)
  //   id = setTimeout(() => {
  //     console.log('发送请求', value)
  //   }, 500)
  //   if(!id) {
  //     id = setTimeout(() => {
  //       id = null
  //       console.log('发送请求', value)
  //     },500)
  //   }
  // }

  return (
    <div>
      <input type='text' onChange={changeFn} />
      {/* {x} --- {y}*/}
      <div id="main"></div>
    </div>
  )
}
