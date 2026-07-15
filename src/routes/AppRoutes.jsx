import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";
import Inventory from "../pages/Inventory/Inventory";
import Shipments from "../pages/Shipments/Shipments";
import Vendors from "../pages/Vendors/Vendors";
import Customers from "../pages/Customers/Customers";
import Returns from "../pages/Returns/Returns";
import Analytics from "../pages/Analytics/Analytics";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="shipments" element={<Shipments />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="customers" element={<Customers />} />
        <Route path="returns" element={<Returns />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}