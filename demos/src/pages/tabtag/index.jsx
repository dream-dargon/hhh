import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Tag } from 'antd';
import Tags from './tag'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }
];

function Tabtag (props) {
  const [list , setList] = useState()
  const { deleteList } = props.Tabtag

  const onChange = (selectedRowKeys, selectedRows) => {
    deleteList.map((v,i) => {
      // console.log(v.i)
      // selectedRows.splice(i,1)
    })
    console.log(props,111,selectedRowKeys)
    setList(selectedRows)
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
  
  const rowSelection = {
    onChange
  }

  return (
    <div>
      <div>
        <Tags list={list} changeFn={onChange} />
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default connect(state => {
  return { Tabtag: state.Tabtag }
})(Tabtag)
