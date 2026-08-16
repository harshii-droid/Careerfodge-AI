import { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(user);
    alert("Registered Successfully");
  };

  return (
    <div className="container">
      <h2>Create Account</h2>

      <form onSubmit={register}>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Register;