import React, { useEffect, useState } from "react";
import { Table, notification, Button, message, Popconfirm } from "antd";
import axios from "axios";

interface Address {
  city: string;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/customers")
      .then((response) => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(`https://northwind.vercel.app/api/customers/${id}`)
      .then((response) => {
        notification.success({
          message: "Success",
          description: "Customer deleted!",
        });
        setCustomers(customers.filter((customer) => customer.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
        notification.error({
          message: "Error",
          description: "Customer.",
        });
      });
  };
  const confirm = (id: string) => {
    handleDelete(id);
    message.success("Click on Yes");
  };

  const cancel = () => {
    message.error("Click on No");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      key: "contactName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
      key: "contactTitle",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address: Address) => address?.city,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: Customer) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(record.id)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={customers}
        loading={loading}
        rowKey="id"
      />
    </>
  );
};

export default CustomerList;
