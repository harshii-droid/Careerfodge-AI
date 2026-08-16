import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">

      <h1>CareerFodge AI</h1>

      <p>
        AI Powered Career Guidance Platform
      </p>

      <br />

      <Link to="/register">
        <button>Get Started</button>
      </Link>

      <br />
      <br />

      <h2>Features</h2>

      <ul>
        <li>AI Career Recommendations</li>
        <li>Skill Gap Analysis</li>
        <li>Learning Roadmap</li>
        <li>Progress Tracking</li>
      </ul>

    </div>
  );
}

export default Home;