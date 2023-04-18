import React, { useState } from "react";
import loginBackground from '../assets/login.png';
import logo from '../assets/logo.png';
import Login from "../components/Login";
import Register from "../components/Register";
import { HeaderLogo } from "../components/Header";
import { backgroundStyle, loginButtonStyle, registerButtonStyle } from "../styles/homepage";

const LoginPage = () => {

    const [showLogin, setShowLogin] = useState(false);

    const handleRegister = () => {
        setShowLogin(false);
        console.log(showLogin);
    }

    const handleLogin = () => {
        setShowLogin(true);
        console.log(showLogin);
    }

    return (
        <div style={{
            backgroundImage: `url(${loginBackground})`,
            position: 'fixed',
            ...backgroundStyle
        }}>
            
            <HeaderLogo/>

            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    position: 'fixed',
                    right: '30px',
                }}>
                    <button onClick={handleRegister} style={registerButtonStyle}>
                        Register
                    </button>
                    <button onClick={handleLogin} style={loginButtonStyle}>
                        Login
                    </button>
                </div>
            </div>

            <div style={{margin: 'auto'}}>{
                showLogin ? <Login /> : <Register />
            }</div>

        </div>
    )
}

export default LoginPage;