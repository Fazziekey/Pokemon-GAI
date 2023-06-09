import React from "react";
import logo from "../assets/logo.png";
import { loginButtonStyle, registerButtonStyle } from "../styles/loginpage";
import { PAGE_STATUS } from "../helpers/constants";


export const HeaderLogo = () => {
    return (
        <a href="https://github.com/IT5007-2220/course-project-felix-felicis.git">
            <div style={{ display: "flex", flexDirection: "row", left: "30px", top: "30px", position: "fixed" }}>
                <img src={logo} style={{ width: "50px", height: "50px" }}></img>
                <span style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "20px",
                    color: "white",
                    paddingLeft: "5px",
                    paddingTop: "5px",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                }}>PokemonGAI</span>
            </div>
        </a>
    );
};


type onClickFunction = (event: React.MouseEvent<HTMLButtonElement>) => void;


interface HeaderButtonProps {
    page_status: number,
    handleRegister?: onClickFunction,
    handleLogin?: onClickFunction
}


export const HeaderButton = (props: HeaderButtonProps) => {
    const { page_status, handleRegister, handleLogin } = props;

    return (<div style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            position: "fixed",
            right: "30px",
        }}>

            {
                page_status === PAGE_STATUS.login &&
                <button
                    onClick={handleRegister}
                    style={registerButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "white";
                    }}
                >
                    Register
                </button>
            }
            {
                <button
                    onClick={handleLogin}
                    style={loginButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "white";
                    }}
                >
                    {page_status === PAGE_STATUS.login ? "Login" : "Log out"}
                </button>
            }

        </div>
    </div>);

};