import React from 'react'
import { Form, Input, Button, message} from 'antd';
import { connect } from 'react-redux'
import { toReg} from '@/actions/reg'
import Top from '@/assets/top.png'
import Foot from '@/assets/foot.png'
import './style.less'
function Reg(props) {
  const { toReg } = props
  const onFinish = async values => {
    if ( values.pwd !== values.pwds) {
      message.info("两次密码输入不一致")
    }else {
      const obj = {
        username:values.username,
        pwd:values.pwd
      }
     const reg = await toReg(obj)
     console.log(reg);
     message.info(reg.payload.info)
     if(reg.payload.status === '200'){
       props.history.push('/login')
     }
    }
  };
  return (
    <div className='page-reg'>
      <div className='reg-top'>
        <img src={Top} alt='' />
      </div>
      <div className='reg-con'>
        <div className='content'>
          <span className='logins'>Sing Up</span>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input placeholder="username" />
            </Form.Item>
            <Form.Item
              name="pwd"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="pwds"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
              Sing Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='reg-foot'>
      <img src={Foot} alt='' />
      </div>
    </div>
  )
}
export default connect( state => {
  return{}
},{
  toReg
})(Reg)