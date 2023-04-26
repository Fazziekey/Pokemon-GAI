import React, { useState } from "react";
import complete from "../assets/complete.png";
import { containerStyle, inputStyle, confirmButtonStyle } from "../styles/loginpage";
import { postLogin } from "../helpers/apiCall";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    /* 
        Login page should display:
        - Login title
        - Email input
        - Password input
        - Login button
    */
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // validate email and password
        if (!email || !password) {
            toast.error("Please enter your email and password");
            return;
        }
        try {
            const response = await postLogin(email, password);
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

    const handleEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div>

            <div>
                <div style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                }}>Login</div>

                <form onSubmit={handleSubmit} style={{ color: "white", display: "flex", flexDirection: "column", justifyContent: "center", width: "400px", height: "400px", padding: "20px" }}>
                    <label
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                        Email:
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            {
                                email && email.length > 0 ? 
                                <img src={complete} style={{ width: "40px", height: "40px" }}></img> 
                                : 
                                <div style={{width: "40px", height: "40px"}}></div>
                            }
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
                            {
                                password && password.length > 0 ?
                                <img src={complete} style={{ width: "40px", height: "40px" }}></img>
                                :
                                <div style={{width: "40px", height: "40px"}}></div>
                            }
                            <div style={containerStyle}>
                                <input type="password" value={password} onChange={handlePasswordChange}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </label>
                    <br />
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
            </div>

            <Toaster />
        </div>
    );
};

export default Login;