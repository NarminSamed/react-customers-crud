import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">Customer List</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/addcustomer">Add Customer</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
