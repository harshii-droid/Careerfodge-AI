function ProgressCard() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Your Progress</h3>

      <p>Assessment Completed ✅</p>

      <p>Career Match Generated ✅</p>

      <p>Learning Plan Started 🚀</p>

      <progress value="60" max="100"></progress>
    </div>
  );
}

export default ProgressCard;