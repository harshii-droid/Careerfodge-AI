import CareerCard from "../components/CareerCard";
import ProgressCard from "../components/ProgressCard";

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <p>Welcome back 👋</p>

      <CareerCard />

      <ProgressCard />
    </div>
  );
}

export default Dashboard;