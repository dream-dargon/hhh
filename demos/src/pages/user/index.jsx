import React, { Component } from 'react'

const obj = {} //发布者

obj.clientList = []  //缓存列表 存储订阅者

obj.listen = function (key, fn) {//增加订阅者
  //如果没有订阅过此类消息，给该类消息创建一个缓存列表
  if(!this.clientList[key]){
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)
}

obj.trigger = function (...arg) { //发布
  const key = arg[1]
  const fns = this.clientList[key]
  if(!fns || fns.length === 0) return false  //没有订阅此消息，返回
  fns.forEach(fn => {
    fn.apply(this, arguments)
  })
}

obj.listen(88, (price) => {
  console.log('price='+price)
})

obj.listen(110, (price) => {
  console.log('price='+price)
})

obj.trigger(20000, 88)

obj.trigger(25000, 110)

export default function User () {
  return (
    <div>
      
    </div>
  )
}
