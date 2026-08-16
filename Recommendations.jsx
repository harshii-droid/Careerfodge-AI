import RecommendationCard from "../components/RecommendationCard";

function Recommendations() {
  return (
    <div className="container">

      <h2>AI Career Recommendations</h2>

      <RecommendationCard
        title="Software Engineer"
        score="95%"
      />

      <RecommendationCard
        title="Data Scientist"
        score="91%"
      />

      <RecommendationCard
        title="AI Engineer"
        score="89%"
      />

    </div>
  );
}

export default Recommendations;