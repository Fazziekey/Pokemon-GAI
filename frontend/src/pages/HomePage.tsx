import React from "react";
import homeBackground from "../assets/homeBackground.png";
import { HeaderButton, HeaderLogo } from "../components/Header";
import { PAGE_STATUS } from "../helpers/constants";

const HomePage = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${homeBackground})`,
                position: "fixed",
                display: "flex",
                width: "100vw",
                height: "25vh",
                left: "0px",
                top: "0px",
            }}>

                <HeaderLogo />

                <HeaderButton page_status={PAGE_STATUS.home} handleLogin={() => {
                    console.log("login");
                }} />

            </div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;