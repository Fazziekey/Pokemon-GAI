import React, { useEffect, useState } from "react";
import avatarPlaceholder from "../assets/avatar.png";
import { userAvatarStyle, userEditProfileButtonStyle, userIDStyle, userNameStyle, userProfileBackgroundStyle, userProfileListStyle } from "../styles/userpage";
import AutosizeInput from "react-input-autosize";
import { PURPLE } from "../styles/colors";
import { postProfileInfo } from "../helpers/apiCall";
import { getProfile } from "../helpers/apiCall";
import toast, { Toaster } from "react-hot-toast";


const infoList = [
    { emoji: "✅", label: "Age:" },
    { emoji: "✨", label: "Role:" },
    { emoji: "😍", label: "Like:" },
    { emoji: "📖", label: "Motto:" },
    { emoji: "📧", label: "Contact:" },
];


const Profile = () => {
    const [editStatus, setEditStatus] = useState(false);
    const [userID, setUserID] = useState("");
    const [userName, setUserName] = useState("");

    const [infoData, setInfoData] = useState({
        age: 0,
        role: "",
        like: "",
        motto: "",
        contact: ""
    });

    const [avatar, setAvatar] = useState(avatarPlaceholder);

    const infoDataName = Object.keys(infoData);

    const handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInfoData({ ...infoData, [name]: value });
    };

    const handleEditProfile = async () => {
        const response = await postProfileInfo("", infoData.age, infoData.role, infoData.like, infoData.motto, infoData.contact);
        if (response.status === 200) {
            toast.success("Profile info updated");
        }
        else {
            toast.error("Failed to update profile info");
        }
    };

    useEffect(() => {
        // TODO: read userID from cookie
        // const userID = localStorage.getItem("userID");
        const userID = "PK230204";
        const userName = "Hollie77";
        setUserID(userID);
        setUserName(userName);
        
        if (userID) {
            // fetch user profile info
            getProfile(userID).then((res) => {
                if (res && res.age && res.role && res.like && res.motto && res.contact) {
                    setInfoData({
                        age: res.age,
                        role: res.role,
                        like: res.like,
                        motto: res.motto,
                        contact: res.contact
                    });
                }
                else {
                    toast.error("Profile info not found");
                }

                // fetch user avatar    
                if(res.avatar) {
                    setAvatar(res.avatar);
                }
                else{
                    toast.error("Avatar not found");
                }
            });
        }

    }, []);

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
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

            <p style={userNameStyle}>{userName}</p>
            <p style={userIDStyle}>ID: {userID}</p>

            <ul style={{
                listStyleType: "none",
                marginInlineStart: "-1em",
            }}>
                {infoList.map((item, index) => (
                    <li key={item.label}
                        style={userProfileListStyle}
                    >
                        <span role="img" aria-label={item.label}
                            style={{
                                margin: "0 8px 0 0",
                            }}
                        >{item.emoji}</span>
                        <b>{item.label}</b>
                        {editStatus ? (
                            <AutosizeInput
                                name={infoDataName[index]}
                                value={infoData[infoDataName[index] as keyof typeof infoData]}
                                onChange={(e: any) => {
                                    handleInputChange(e);
                                }}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "transparent",
                                    marginLeft: "5px"
                                }}
                                inputStyle={{
                                    color: "#4E4E4E",
                                    border: `1px solid ${PURPLE}`,
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                }}
                            />
                        ) : (
                            <span
                                style={{
                                    marginLeft: "5px",
                                }}
                            >{infoData[infoDataName[index] as keyof typeof infoData]}</span>
                        )}
                    </li>
                ))}
            </ul>

            <button
                style={{
                    ...userEditProfileButtonStyle,
                    backgroundColor: editStatus ? "#947FF8" : "white",
                    color: editStatus ? "white" : "#947FF8",
                }}
                onClick={(e) => {
                    setEditStatus(!editStatus);
                    if (editStatus) {
                        handleEditProfile();
                    }
                }}
                onMouseEnter={(e) => {
                    if (editStatus) {
                        e.currentTarget.style.backgroundColor = "rgba(148, 127, 248, 0.5)";
                    }
                    else {
                        e.currentTarget.style.color = "rgba(148, 127, 248, 0.5)";
                    }
                }}
                onMouseLeave={(e) => {
                    if (editStatus) {
                        e.currentTarget.style.backgroundColor = "#947FF8";
                    }
                    else {
                        e.currentTarget.style.color = "#947FF8";
                    }
                }}
            >{editStatus ? "Save Profile" : "Edit Profile"}</button>
            <Toaster />
        </div>
    );
};


export default Profile;