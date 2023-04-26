import React, { useEffect } from "react";
import { ORANGE, PURPLE } from "../styles/colors";
import { Modal, Popover } from "antd";
import { cardModalContainerStyle, friendIDStyle, friendNameStyle, friendVisitButtonStyle } from "../styles/content";


interface FriendsItemProps {
    name: string;
    id: string;
    avatar: string;
}


const FriendsItem: React.FC<FriendsItemProps> = ({ name, id, avatar }) => {

    const [friendName, setFriendName] = React.useState(undefined);
    const [friendID, setFriendID] = React.useState(undefined);
    const [friendAvatar, setFriendAvatar] = React.useState(undefined);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    useEffect(() => {
        setFriendName(name);
        setFriendID(id);
        setFriendAvatar(avatar);
    }, []);

    const handleOk = () => {
        // handleEditProfile();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (<div
        style={{
            width: "100%",
        }}
    >
        <div
            style={{
                width: "80%",
                height: "140px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
            }}>
                <img
                    src={friendAvatar}
                    alt="Image"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>

            <div style={{
                width: "150px",
                display: "flex",
                flexDirection: "column",
                padding: "0 50px"
            }}>
                <p style={friendNameStyle}>{`${friendName}`}</p>
                <p style={friendIDStyle}>ID: {`${friendID}`}</p>
            </div>

            <Popover
                content={<div 
                    style={{
                        width: "400px",
                        height: "300px",
                    }}
                >
                    
                </div>} title={friendName} trigger="hover"
            >
                <button
                    style={{
                        ...friendVisitButtonStyle,
                        borderColor: PURPLE,
                        color: PURPLE,
                        marginRight: "20px",
                        marginLeft: "auto"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "rgba(148, 127, 248, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = PURPLE;
                    }}
                    onClick={() => setIsModalOpen(true)}
                >View Gallery</button>
            </Popover>

            <button
                style={{
                    ...friendVisitButtonStyle,
                    borderColor: ORANGE,
                    color: ORANGE
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(237, 145, 17, 0.5)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = ORANGE;
                }}
                onClick={() => setIsModalOpen(true)}
            >Battle</button>

        </div>
        <div style={{
            width: "80%",
            height: "1px",
            backgroundColor: PURPLE,
            marginLeft: "50px"
        }}
        ></div>

        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={1000}
            centered
        >
            <div style={{
                ...cardModalContainerStyle,
                flexDirection: "column",
            }}>

            </div>
        </Modal>
    </div>
    );
};

export default FriendsItem;