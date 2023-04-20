import React from "react";
import homeBackground from "../assets/homeBackground.png";
import { HeaderButton, HeaderLogo } from "../components/Header";
import { PAGE_STATUS } from "../helpers/constants";
import { Profile } from "../components";
import { navigationLinkStyle, navigationListStyle, outletContainerStyle, userHeaderStyle, userProfileContainerStyle } from "../styles/userpage";
import { Link, Outlet, useLocation } from "react-router-dom";

const HomePage = () => {

    const links = [
        { to: "/home/overview", text: "Overview" },
        { to: "/home/create", text: "Create" },
        { to: "/home/gallery", text: "Gallery" },
        { to: "/home/friends", text: "Friends" },
    ];

    const location = useLocation();
    console.log(location.pathname);

    return (
        <div style={{ display: "flex" }}>
            <div style={{
                backgroundImage: `url(${homeBackground})`,
                position: "fixed",
                ...userHeaderStyle
            }}>

                <HeaderLogo />

                <HeaderButton page_status={PAGE_STATUS.home} handleLogin={() => {
                    console.log("login");
                }} />

                <ul style={{
                    position: "absolute",
                    ...navigationListStyle,
                }}>
                    {links.map((link, index) => (
                        <li key={index} style={{
                            display: "inline-block",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}>
                            <div
                                style={{
                                    borderBottom: location.pathname === link.to ? "3px solid #FED851" : "none",
                                    paddingBottom: "5px",
                                }}
                            >
                                <Link to={link.to}
                                    style={{
                                        ...navigationLinkStyle,
                                        color: location.pathname === link.to ? "#FED851" : "white",
                                    }}

                                >{link.text}</Link>
                            </div>

                        </li>
                    ))}
                </ul>

            </div>
            <div style={{
                ...userProfileContainerStyle,
                position: "fixed",
            }}
            >
                <Profile />
            </div>

            <div style={{
                ...outletContainerStyle,
                position: "fixed"
            }}>
                <Outlet />
            </div>
        </div>
    );
};

export default HomePage;