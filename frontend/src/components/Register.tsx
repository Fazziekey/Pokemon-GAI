import React, { useState } from "react";
import complete from "../assets/complete.png";
import { containerStyle, inputStyle, confirmButtonStyle } from "../styles/loginpage";
import { postRegister } from "../helpers/apiCall";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate the form
        if (name === "") {
            toast.error("Please enter your name");
            return;
        }
        if (password === "") {
            toast.error("Please enter your password");
            return;
        }
        if (email === "") {
            toast.error("Please enter your email");
            return;
        }

        try {
            const response = await postRegister(name, password, email);
            console.log(response);
            if (response.status === 200) {
                navigate("/home");
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            toast.error("An error occurred, please try again later");
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <div style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>Register</div>
            <form onSubmit={handleSubmit} style={{ color: "white", display: "flex", flexDirection: "column", justifyContent: "center", width: "400px", height: "400px", padding: "20px" }}>
                <label
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                    Enter the NAME for a Pokemon trainer
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={complete} style={{ width: "40px", height: "40px" }}></img>
                        <div style={containerStyle}>
                            <input type="name" value={name} onChange={handleNameChange}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                </label>

                <br />

                <label
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                    Enter your PASSWORD
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

                <label
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                    Enter your EMAIL for contact
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={complete} style={{ width: "40px", height: "40px" }}></img>
                        <div style={containerStyle}>
                            <input type="email" value={email} onChange={handleEmailchange}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                </label>

                <button type="submit"
                    style={confirmButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "white";
                    }}
                >CONFIRM</button>
            </form>
            <Toaster />
        </div>
    );
};

export default Register;