import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#2563eb",
        color: "#fff",
      }}
    >
      <h2>CareerFodge AI</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/assessment">Assessment</Link>

        <Link to="/recommendations">Careers</Link>

        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;