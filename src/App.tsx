import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerList from "./pages/CustomerList/index.tsx";
import AddCustomer from "./pages/AddCustomer/index.tsx";
import AppHeader from "./components/Header/index.tsx";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" Component={CustomerList} />
        <Route path="/addcustomer" Component={AddCustomer} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
