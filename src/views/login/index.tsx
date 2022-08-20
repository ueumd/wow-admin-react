import { useNavigate } from "react-router-dom"
import utils from "@/utils"
import { Form, Input, Button, Checkbox, message } from "antd"

import "./index.scss"

export default () => {
  const navigate = useNavigate()
  const onFinish = values => {
    utils.setToken(Date.now())
    message.success(" 登录成功")
    setTimeout(() => navigate("/"), 2000)
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
    message.error(errorInfo || "登录失败")
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
            <Input placeholder="admin" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password placeholder="123456" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
