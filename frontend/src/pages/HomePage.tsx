import React, { useState } from "react";
import loginBackground from '../assets/login.png';
import logo from '../assets/logo.png';
import Login from "./Login";
import Register from "./Register";

const HomePage = () => {

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
            display: 'flex',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            left: '0px',
            top: '0px',
        }}>
            <div style={{ display: 'flex', flexDirection: 'row', left: '30px', top: '30px', position: 'fixed' }}>
                <img src={logo} style={{ width: "50px", height: "50px" }}></img>
                <span style={{
                    fontWeight: 'bold',
                    fontStyle: "italic",
                    fontSize: '20px',
                    color: 'white',
                    paddingLeft: '5px',
                    paddingTop: '5px',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}>PokemonGAI</span>
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    position: 'fixed',
                    right: '30px',
                }}>
                    <button onClick={handleRegister} style={{
                        width: '120px',
                        height: '45px',
                        background: 'linear-gradient(180deg, rgba(2, 164, 255, 0.5) 0%, rgba(148, 127, 248, 0.5) 100%)',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'white',
                        borderColor: 'transparent'
                    }}>
                        Register
                    </button>
                    <button onClick={handleLogin} style={{
                        width: '80px',
                        height: '45px',
                        background: 'transparent',
                        margin: '5px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'white',
                        borderColor: 'transparent',
                        borderBottom: '2px solid white',
                        marginLeft: '20px',
                    }}>
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

export default HomePage;