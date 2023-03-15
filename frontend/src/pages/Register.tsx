import React, { useState } from "react";
import complete from '../assets/complete.png';
import { containerStyle, inputStyle, buttonStyle } from "../styles/homepage";

interface RegisterProps {
    onSubmit: (name: string, password: string, email: string) => void;
}

const Register = () => {
    // Register form component. It takes in a "onSubmit" function prop which will
    // be called when the user submits the form.

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // onSubmit(name, password, email);  // A callback function to pass data to parent component.
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
                fontSize: '40px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}>Register</div>
            <form onSubmit={handleSubmit} style={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '400px', height: '400px', padding: '20px' }}>
                <label
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                    Enter the NAME for a Pokemon trainer
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                    Enter your PASSWORD
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                    Enter your EMAIL for contact
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={complete} style={{ width: "40px", height: "40px" }}></img>
                        <div style={containerStyle}>
                            <input type="email" value={email} onChange={handleEmailchange}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                </label>

                <button type="submit"
                    style={buttonStyle}
                >CONFIRM</button>
            </form>
        </div>
    );
};

export default Register;