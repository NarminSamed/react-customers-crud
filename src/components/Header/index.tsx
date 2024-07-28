import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_wrapper">
      <h1>Logo</h1>
      <Link to="/addcustomer">Add Customer</Link>
    </div>
  );
};

export default Header;
