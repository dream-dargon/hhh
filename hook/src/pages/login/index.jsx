import React,{useState} from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'react-redux'
import Top from '@/assets/top.png'
import Foot from '@/assets/foot.png'
import { toLogin, toPreve } from '@/actions/login'
import './style.less'
function Login(props) {
  const { toLogin, toPreve, PersonInfo } = props
  const [ formdata ] = useState({remember: true,
    username:PersonInfo.username,
    pwd:PersonInfo.pwd})
  const onFinish = async values => {
    const obj={
      username:values.username,
      pwd:values.pwd
    }
    if( values.remember ) {
      toPreve(obj)
    }else {
      toPreve({username:'',pwd:''})
    }
   const res = await toLogin(obj)
   message.info(res.payload.message)
   if( parseInt(res.payload.status) === 200) {
     props.history.push('/')
   }
  };
  return (
    <div className='page-login'>
      <div className='login-top'>
        <img src={Top} alt='' />
      </div>
      <div className='login-con'>
        <div className='content'>
          <span className='logins'>Login</span>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={formdata}
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
              <Input placeholder="Username" />
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
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='login-foot'>
      <img src={Foot} alt='' />
      </div>
    </div>
  )
}
export default connect(state =>{
  return{
    PersonInfo:state.login.PersonInfo
  }
},{
  toLogin,
  toPreve
})(Login)