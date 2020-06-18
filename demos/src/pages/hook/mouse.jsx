import React, { useState, useEffect } from 'react';
let id = ''

export default function useMouse() {
  const [data, setData] = useState({ x: 0, y: 0 });
  useEffect(() => {
   const bodys = document.body
   const fn = e => {
      if(!id) {
        id = setTimeout(() => {
          id = null
          setData({ ...data, ...{ x: e.clientX, y: e.clientY }})
        }, 500)
      }
    
   }
   bodys.addEventListener('mousemove',fn)
   return () => bodys.removeEventListener('mousemove',fn)
  });

  return data;
}