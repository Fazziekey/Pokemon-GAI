import React, { useEffect } from "react";
import homeBackground from "../assets/homeBackground.png";
import { HeaderButton, HeaderLogo } from "../components/Header";
import { PAGE_STATUS, PATHS } from "../helpers/constants";
import { Profile } from "../components";
import { navigationLinkStyle, navigationListStyle, outletContainerStyle, userHeaderStyle, userProfileContainerStyle } from "../styles/userpage";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import addFriend from "../assets/add_friend.png";
import { Modal } from "antd";
import { cardModalContainerStyle, createInputStyle, createTextStyle } from "../styles/content";
import { friendVisitButtonStyle } from "../styles/content";
import { PURPLE } from "../styles/colors";


const HomePage = () => {

    useEffect(() => {
        toast.success("Welcome to your home page! ✨");
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [friendName, setFriendName] = React.useState(undefined);

    const handleOk = () => {
        // handleEditProfile();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{
                backgroundImage: `url(${homeBackground})`,
                position: "fixed",
                ...userHeaderStyle
            }}>

                <HeaderLogo />

                <div style={{ justifyContent: "center", alignItems: "center" }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        position: "fixed",
                        right: "150px",
                    }}>
                        <img
                            src={addFriend}
                            style={{
                                width: "50px",
                                height: "50px",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                        ></img>
                    </div>
                </div>

                <HeaderButton page_status={PAGE_STATUS.home} handleLogin={() => {
                    navigate("/login");
                }} />

                <ul style={{
                    position: "absolute",
                    ...navigationListStyle,
                }}>
                    {PATHS.map((link, index) => (
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
            <Toaster />

            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={500}
                centered
            >
                <div style={{
                    height: "250px",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <p style={createTextStyle}>{"Add friends by name or ID"}</p>
                    <input 
                        style={createInputStyle}
                        placeholder="Enter friend's name or ID"
                        onChange={(event) => {
                            setFriendName(event.target.value);
                        }}
                    ></input>
                    <button style={{
                        ...friendVisitButtonStyle,
                        backgroundColor: PURPLE,
                        color: "white",
                        paddingTop: "10px",
                        marginTop: "20px",
                    }}
                        onClick={() => {
                            if(friendName === undefined || friendName === "") {
                                toast.error("Please enter a valid name or ID!");
                                return;
                            }
                            toast.success(`Friend request to ${friendName} has been sent! 🎉`);
                            setIsModalOpen(false);
                        }}
                    >COMMIT 🧑‍🤝‍🧑</button>
                </div>
            </Modal>
        </div >
    );
};

export default HomePage;