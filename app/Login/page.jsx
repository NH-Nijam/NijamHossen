'use client'
import React from 'react';
import { Form, Input, Button } from 'antd';

import swal from 'sweetalert2';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values);
    // Simulating sending data to server with a timeout
    setTimeout(() => {
      // Simulated server response
      const response = { success: true, message: 'Login successful' };

      // Display SweetAlert modal based on server response
      if (response.success) {
        swal.fire({
          icon: 'success',
          title: 'Success',
          text: response.message,
        });
        elas
      } else {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.message,
        });
      }
    }, 1000);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Invalid email address!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
