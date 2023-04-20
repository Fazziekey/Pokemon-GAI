import React, { useState } from "react";
import complete from "../assets/complete.png";
import { containerStyle, inputStyle, buttonStyle } from "../styles/homepage";


const Login = () => {
    // Login form component. It takes in a "onSubmit" function prop which will
    // be called when the user submits the form.

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // onSubmit(email, password);  // A callback function to pass data to parent component.
    };

    const handleEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <div style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>Log In</div>
            <form onSubmit={handleSubmit} style={{ color: "white", display: "flex", flexDirection: "column", justifyContent: "center", width: "400px", height: "400px", padding: "20px" }}>
                <label
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                    Email:
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={complete} style={{ width: "40px", height: "40px" }}></img>
                        <div style={containerStyle}>
                            <input type="email" value={email} onChange={handleEmailchange}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                </label>
                <br />
                <label
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                    Password:
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={complete} style={{ width: "40px", height: "40px" }}></img>
                        <div style={containerStyle}>
                            <input type="password" value={password} onChange={handlePasswordChange}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                </label>
                <br />
                <button type="submit"
                    style={buttonStyle}
                >CONFIRM</button>
            </form>
        </div>
    );
};

export default Login;