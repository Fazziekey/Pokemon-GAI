import React, { useEffect } from "react";
import { ORANGE, PURPLE } from "../styles/colors";
import { Modal, Popover } from "antd";
import { cardModalContainerStyle, friendIDStyle, friendNameStyle, friendVisitButtonStyle } from "../styles/content";
import { mock_gallery_data } from "../data/profile";
import { USE_MOCK_DATA } from "../config";


const useMockData = USE_MOCK_DATA;


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
    const [friendGallery, setFriendGallery] = React.useState([{
        pokemon_id: undefined,
        pokemon_name: undefined,
        pokemon_img: undefined,
        pokemon_date: undefined,
        pokemon_star: undefined,
    }]);

    useEffect(() => {
        setFriendName(name);
        setFriendID(id);
        setFriendAvatar(avatar);
        if (useMockData) {
            setFriendGallery(mock_gallery_data);
            return;
        }
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
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >{friendGallery.map((pokemon: any, index: number) => {
                        return <div key={index}
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "15px",
                                border: `1px solid ${PURPLE}`,
                                overflow: "hidden",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                margin: "10px",
                            }}
                        >
                            <img src={pokemon.pokemon_img}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>;
                    })}</div>
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