import React from "react";
import homeBackground from "../assets/homeBackground.png";
import { HeaderButton, HeaderLogo } from "../components/Header";
import { PAGE_STATUS } from "../helpers/constants";
import { Profile } from "../components";

const HomePage = () => {
    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <div style={{
                backgroundImage: `url(${homeBackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
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
            <div
                style={{
                    position: "fixed",
                    top: "10vh",
                    width: "25vw",
                    height: "100vh",
                }}
            >
                <Profile/>
            </div>
        </div>
    );
};

export default HomePage;