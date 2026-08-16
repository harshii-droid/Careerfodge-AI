import { useState } from "react";

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login=(e)=>{
        e.preventDefault();

        console.log({
            email,
            password
        });

        alert("Login API will be connected later");
    }

    return(

        <div className="container">

            <h2>Login</h2>

            <form onSubmit={login}>

                <label>Email</label>

                <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <label>Password</label>

                <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button>

                    Login

                </button>

            </form>

        </div>

    )

}

export default Login;