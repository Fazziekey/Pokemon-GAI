import React from "react";

const HomePage = () => {

    const handleRegister = () => {
        // Handle register logic here.
        console.log('Register clicked!');
    }
    
    const handleLogin = () => {
        // Handle login logic here.
        console.log('Login clicked!');
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '400px', height: '400px', border: '1px solid black', padding: '20px', backgroundColor: 'white' }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                    <span style={{fontFamily: 'Inter', fontStyle: "italic", fontSize: '20px'}}>PokemonGAI</span>
                </div>
                <button onClick={handleLogin} style={{width: '100px', background: 'linear-gradient(180deg, rgba(2, 164, 255, 0.5) 0%, rgba(148, 127, 248, 0.5) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px', margin: '5px'}}>
                    Login
                </button>
                <button onClick={handleRegister} style={{width: '100px', background: 'linear-gradient(180deg, rgba(2, 164, 255, 0.5) 0%, rgba(148, 127, 248, 0.5) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px', margin: '5px'}}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default HomePage;