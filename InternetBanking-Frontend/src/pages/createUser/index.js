import { Form, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { REST_API } from '../../config/api'
import './index.css'
const axios = require('axios');
const layout = [{
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}];
const tailLayout =[ {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}];


const token=localStorage.getItem('access-token')
  const NewUser = () => {
    const onFinish = values => {
      
      axios({
        method: 'post',
        url: 'http://localhost:8080/employee/createUser',
        data: values,
        headers: {
          'access-token':token,
        }
      }).then((response) => {
         alert("Tạo thành công!")
      }).catch((err) => {
        console.log(err)
      });
      document.querySelector('#createuser_name').value="";
      document.querySelector('#createuser_email').value="";
      document.querySelector('#createuser_phone').value="";
      document.querySelector('#createuser_pin').value="";
      document.querySelector('#createuser_password').value="";
    };
    
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return(

      <Form
          
          {...layout}
          
          name="createuser"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
         
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
            
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="pin"
            name="pin"
            rules={[
              {
                required: true,
                message: 'Please input your pin!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" id="btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
        )
  }
  
export default NewUser