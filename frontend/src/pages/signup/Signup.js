import React, { useState } from "react";
import { Layout, Button, Form, Input, Typography, Result } from "antd";
import { Link } from "react-router-dom";
import { signupNewUser } from "./SignupAction";
import { useNavigate } from "react-router-dom";

const Signup = ({ dispatch, displayMessage, destroyMessage }) => {
  const [loginForm] = Form.useForm();
  const { Content } = Layout;
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();

  const onFinish = (userData) => {
    console.log(userData);
    destroyMessage();
    signupNewUser(userData, dispatch, navigate, displayMessage);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("signup failed");
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      username: "${label} is not a valid username!",
    },
  };

  return (
    <Content className="h-full flex justify-center items-center fixed inset-0">
      <div className="bg-white w-[300px] p-4 border border-solid border-neutral-200 rounded-lg">
        <Form
          name="basic"
          form={loginForm}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={(userData) => onFinish(userData)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <div className="h-[50px] flex justify-between mb-[25px]">
            <Title className="m-[5px]" level={3}>
              Make an Account
            </Title>
          </div>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                required: true,
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
                type: "email",
                required: true,
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
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" className="btn-active">
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 24,
            }}
          >
            <Paragraph>
              Already have account? <Link to="/login">Login</Link>
            </Paragraph>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default Signup;
