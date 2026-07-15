import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f6fa",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          background: "#1f2937",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>QUICKXKART</h2>

        <hr />

        <p>🏠 Dashboard</p>
        <p>📦 Orders</p>
        <p>👕 Products</p>
        <p>📊 Inventory</p>
        <p>🚚 Shipments</p>
        <p>🏢 Vendors</p>
        <p>👥 Customers</p>
        <p>📈 Analytics</p>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}