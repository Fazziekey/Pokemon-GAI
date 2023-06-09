import React, { useState } from "react";
import loginBackground from "../assets/loginBackground.png";
import Login from "../components/Login";
import Register from "../components/Register";
import { HeaderButton, HeaderLogo } from "../components/Header";
import { backgroundStyle } from "../styles/loginpage";
import { PAGE_STATUS } from "../helpers/constants";

const LoginPage = () => {

    const [showLogin, setShowLogin] = useState(true);

    const handleRegister = () => {
        setShowLogin(false);
        console.log(showLogin);
    };

    const handleLogin = () => {
        setShowLogin(true);
        console.log(showLogin);
    };

    return (
        <div style={{
            backgroundImage: `url(${loginBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            ...backgroundStyle
        }}>
            
            <HeaderLogo/>

            <HeaderButton
                page_status = {PAGE_STATUS.login}
                handleLogin = {handleLogin}
                handleRegister = {handleRegister}
            />

            <div style={{margin: "auto"}}>{
                showLogin ? <Login /> : <Register />
            }</div>

        </div>
    );
};

export default LoginPage;