import React from "react";
import avatar from "../assets/avatar.png";
import { userAvatarStyle, userEditProfileButtonStyle, userIDStyle, userNameStyle, userProfileBackgroundStyle, userProfileListStyle } from "../styles/userpage";

const Profile = () => {

    const infoList = [
        { emoji: "✅", label: "Age:", value: "22" },
        { emoji: "✨", label: "Role:", value: "Pokemon Trainer" },
        { emoji: "😍", label: "Like:", value: "Pikachu" },
        { emoji: "📖", label: "Motto:", value: "Since you asked sincerely!!" },
        { emoji: "📧", label: "Contact:", value: "hollie77@gmail.com" },
    ];


    return (
        <div
            style={{
                flexDirection: "column",
                ...userProfileBackgroundStyle
            }}
        >
            <div style={userAvatarStyle}>
                <img
                    src={avatar}
                    alt="Image"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>

            <p style={userNameStyle}>Hollie77</p>
            <p style={userIDStyle}>ID: PK230204</p>

            <ul style={{
                listStyleType:"none",
                marginInlineStart: "-1em",
            }}>
                {infoList.map(item => (
                    <li key={item.label}
                        style={userProfileListStyle}
                    >
                        <span role="img" aria-label={item.label}
                            style={{
                                margin: "0 8px 0 0",
                            }}
                        >{item.emoji}</span> 
                        <b>{item.label}</b> {item.value}
                    </li>
                ))}
            </ul>

            <button
                style={userEditProfileButtonStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(148, 127, 248, 0.5)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#947FF8";
                }}
            >Edit Profile</button>
        </div>
    );
};


export default Profile;