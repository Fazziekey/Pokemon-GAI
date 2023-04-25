import React, { useEffect, useState } from "react";
import avatarPlaceholder from "../assets/avatar.png";
import { userAvatarStyle, userEditProfileButtonStyle, userEditProfileInputStyle, userIDStyle, userNameStyle, userProfileBackgroundStyle, userProfileListStyle, userProfileUploadStyle } from "../styles/userpage";
import AutosizeInput from "react-input-autosize";
import { PURPLE, PURPLE_LIGHT, YELLOW } from "../styles/colors";
import { postProfileAvatar, postProfileInfo } from "../helpers/apiCall";
import { getProfile } from "../helpers/apiCall";
import toast, { Toaster } from "react-hot-toast";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { Tooltip, Modal, Button } from "antd";
import { PROFILE_INFO_LIST } from "../helpers/constants";


// Initialize once (at the start of your app).
const uploader = Uploader({
    apiKey: "free" // Get production API keys from Upload.io
});


// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };


const Profile = () => {
    const [editStatus, setEditStatus] = useState(false);
    const [userID, setUserID] = useState("");
    const [userName, setUserName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        const response = await postProfileInfo("1", infoData.age, infoData.role, infoData.like, infoData.motto, infoData.contact);
        if (response.status === 200) {
            toast.success("Profile info updated");
        }
        else {
            toast.error("Failed to update profile info");
        }
    };

    const handleUpdateAvatar = async (avatar: string) => {
        const response = await postProfileAvatar(userID, avatar);
        if (response.status === 200) {
            toast.success("Avatar updated");
        }
        else {
            toast.error("Failed to update avatar");
        }
    };

    const handleOk = () => {
        handleEditProfile();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        // TODO: read userID from cookie
        // const userID = localStorage.getItem("userID");
        const userID = "1";
        const userName = "Hollie77";
        setUserID(userID);
        setUserName(userName);

        if (userID) {
            // fetch user profile info
            getProfile(userID).then((res) => {
                const resData = res.data;
                if (resData) {
                    setInfoData({...resData});
                }
                else {
                    toast.error("Profile info not found");
                }

                // fetch user avatar    
                if (resData.avatar) {
                    setAvatar(resData.avatar);
                }
                else {
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

            <UploadButton uploader={uploader}
                options={options}
                onComplete={files => {
                    const avatar = files[0].originalFile.fileUrl;
                    setAvatar(avatar);
                    handleUpdateAvatar(avatar);
                }}>
                {({ onClick }) =>
                    <Tooltip
                        title="Upload avatar"
                        placement="top"
                    >
                        <button
                            onClick={onClick}
                            style={userProfileUploadStyle}
                        >
                            +
                        </button>
                    </Tooltip>

                }
            </UploadButton>

            <p style={userNameStyle}>{userName}</p>
            <p style={userIDStyle}>ID: {userID}</p>

            <ul style={{
                listStyleType: "none",
                marginInlineStart: "-1em",
            }}>
                {PROFILE_INFO_LIST.map((item, index) => (
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
                                inputStyle={userEditProfileInputStyle}
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
                    backgroundColor: editStatus ? PURPLE : "white",
                    color: editStatus ? "white" : PURPLE,
                }}
                onClick={(e) => {
                    setEditStatus(!editStatus);
                    if (editStatus) {
                        setIsModalOpen(true);
                    }
                }}
                onMouseEnter={(e) => {
                    if (editStatus) {
                        e.currentTarget.style.backgroundColor = PURPLE_LIGHT;
                    }
                    else {
                        e.currentTarget.style.color = PURPLE_LIGHT;
                    }
                }}
                onMouseLeave={(e) => {
                    if (editStatus) {
                        e.currentTarget.style.backgroundColor = PURPLE;
                    }
                    else {
                        e.currentTarget.style.color = PURPLE;
                    }
                }}
            >{editStatus ? "Save Profile" : "Edit Profile"}</button>
            <Toaster />
            <Modal 
                title="" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                      No
                    </Button>,
                    <Button key="submit" onClick={handleOk}
                        style={{
                            backgroundColor: PURPLE,
                            color: "white",
                        }}
                    >
                      Yes
                    </Button>
                  ]}
            >
                <p>Do you want to update the profile?</p>
            </Modal>
        </div>
    );
};


export default Profile;