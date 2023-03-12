import React from "react";
import Register from "./Register";

const RegisterPage = () => {
    const handleRegisterSubmit = (name: string, password: string, email: string) => {
        // Handle register submit logic here.
        console.log("Name: " + name);
        console.log("Password: " + password);
        console.log("Email: " + email);
    }

    const handleLogin = () => {
        // Handle login logic here.
        console.log('Login clicked!');
    }

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '100ox'}}>
                <div style={{ gridColumn: "1 / 2"}}>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        {/* Red square need to be replaced with icon*/}
                        <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                        <span style={{fontFamily: 'Inter', fontStyle: "italic", fontSize: '20px'}}>PokemonGAI</span>
                    </div>
                </div>
                <div style={{ gridColumn: "2 / 3", justifySelf: "end"}}>
                    <span style={{ textDecoration: 'underline' }}>Register</span>
                    <button onClick={handleLogin} style={{background: 'linear-gradient(180deg, rgba(2, 164, 255, 0.5) 0%, rgba(148, 127, 248, 0.5) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px', margin: '5px'}}>
                        Login
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h2>Register</h2>
                <Register onSubmit={handleRegisterSubmit} />
            </div>
        </div>
    );
};

export default RegisterPage;