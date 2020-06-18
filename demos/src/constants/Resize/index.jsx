import React, { useEffect, useState } from 'react'
let id = ''

export default function useResize () {
  const [width, setWidth] = useState(0)

  const fn = () => {
    if(!id) {
      id = setTimeout(() => {
        id = null
        setWidth(document.body.offsetWidth)
      }, 500)
    }
  }

  useEffect(() => {
    window.addEventListener('resize',fn)
    return () => window.removeEventListener('resize',fn)
  })
  return width
}
