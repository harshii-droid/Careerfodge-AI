function RecommendationCard({ title, score }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h3>{title}</h3>
      <p>AI Match Score: {score}</p>
      <button>Explore Career</button>
    </div>
  );
}

export default RecommendationCard;