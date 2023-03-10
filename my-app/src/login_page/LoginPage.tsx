import React, {useState, useEffect} from "react";
import Login from "./Login";

// TODO: find a proper way to set the image as background.
// const backgroundImage = require("../login_background.png");

interface LoginPageState {
    isLoggedIn: boolean;
  }

const LoginPage = () => {
    // Main login page component.

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Set the background on mount.
        document.body.style.backgroundColor = '##FFFFFF';
        // TODO: find a proper way to set the image as background.
        // document.body.style.backgroundImage = `url(${backgroundImage})`;
        // document.body.style.backgroundSize = 'cover';
        return () => {
            // Reset the background to its default on unmount.
            document.body.style.backgroundColor = null;
            // document.body.style.backgroundImage = 'none';
            // document.body.style.backgroundSize = 'auto';
        };
    }, []);

    const handleLoginSubmit = (email: string, password: string) => {
        // Handle login submit logic here.
        setIsLoggedIn(true);
        console.log("Email: " + email);
        console.log("Password: " + password);
    };

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
                    <button style={{background: 'linear-gradient(180deg, rgba(2, 164, 255, 0.5) 0%, rgba(148, 127, 248, 0.5) 100%)',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '10px',
                                    marginRight: '5px'}}>Register</button>
                    <span style={{ textDecoration: 'underline' }}>Log in</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h2>Log In</h2>
                <Login onSubmit={handleLoginSubmit} />
            </div>
        </div>
    );
};

export default LoginPage;