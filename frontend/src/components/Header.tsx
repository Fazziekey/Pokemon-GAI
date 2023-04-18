import React from 'react';
import logo from '../assets/logo.png';

export const HeaderLogo = () => {
    return (<div style={{ display: 'flex', flexDirection: 'row', left: '30px', top: '30px', position: 'fixed' }}>
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
    </div>);
}