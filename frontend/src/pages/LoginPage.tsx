import React, { useState } from "react";
import loginBackground from '../assets/loginBackground.png';
import Login from "../components/Login";
import Register from "../components/Register";
import { HeaderButton, HeaderLogo } from "../components/Header";
import { backgroundStyle } from "../styles/homepage";
import { PAGE_STATUS } from "../helpers/constants";

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

            {/* <div style={{ justifyContent: 'center', alignItems: 'center' }}>
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
            </div> */}

            <HeaderButton
                page_status = {PAGE_STATUS.login}
                handleLogin = {handleLogin}
                handleRegister = {handleRegister}
            />

            <div style={{margin: 'auto'}}>{
                showLogin ? <Login /> : <Register />
            }</div>

        </div>
    )
}

export default LoginPage;