import React from 'react'
import { Table,} from 'antd';
export default function Tables(props) {
  const { columns, data } = props
    return (
      <Table columns={columns} dataSource={data} rowKey={v => v.id} />
    )
}
