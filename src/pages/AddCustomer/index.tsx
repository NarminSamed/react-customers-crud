import React from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "axios";

const AddCustomer: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    axios
      .post("https://northwind.vercel.app/api/customers", values)
      .then((response) => {
        notification.success({
          message: "Success",
          description: "Customer added!",
        });
        form.resetFields();
      })
      .catch((error) => {
        console.error("Error:", error);
        notification.error({
          message: "Error",
          description: "Error",
        });
      });
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Validation Error",
      description: "Bütün inputlar doldurulmalıdır.",
    });
  };

  return (
    <div className="form_wrapper">
      <Form
        form={form}
        name="addCustomer"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            { required: true, message: "Please input the company name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact Name"
          name="contactName"
          rules={[
            { required: true, message: "Please input the contact name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact Title"
          name="contactTitle"
          rules={[
            { required: true, message: "Please input the contact title!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input the city!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Customer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCustomer;
