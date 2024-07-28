import React, { useEffect, useState } from "react";
import { Table, notification, Button } from "antd";
import axios from "axios";

interface Address {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
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
      render: (address: Address) =>
        `${address.street}, ${address.city}, ${address.region}, ${address.postalCode}, ${address.country}`,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: Customer) => (
        <Button type="primary" danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
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
