import { useState } from "react";

function Assessment() {

  const [interest, setInterest] = useState("");

  const submit = (e) => {
    e.preventDefault();

    alert("Assessment Submitted");
  };

  return (
    <div className="container">

      <h2>Career Assessment</h2>

      <form onSubmit={submit}>

        <label>Your Interest</label>

        <input
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="AI, Business, Design..."
        />

        <button>Analyze</button>

      </form>

    </div>
  );
}

export default Assessment;