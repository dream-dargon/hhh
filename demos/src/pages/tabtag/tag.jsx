import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Tag } from 'antd';
import { getTagList, delTagList } from '@/actions/tabtag'

const arr = [];
let brr = [1, 2, 3]

function  Tags(props) {
  useEffect(() => {
    props.getTagList(props.list);
  }, [props.list])

  const { list } = props.Tabtag

  function log(val) {
    if(arr.indexOf(val) === -1)
    arr.push(val)
    brr = brr.filter(v => v != val )
    const data = list.filter(v => v.key != val)
    console.log(brr,11111,val)
    props.changeFn(brr,data);
    props.delTagList(arr);
  }

  return (
    <div>
      {
        list && list.map(v => {
          return (
            <Tag closable onClose={() => log(v.key)} key={v.key}>
              {v.name}
            </Tag>
          )
        })
      }
    </div>
  )
}

export default connect(state => {
  return { Tabtag: state.Tabtag }
}, {
  getTagList,
  delTagList,
})(Tags)
