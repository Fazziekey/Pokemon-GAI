import React, { useEffect } from "react";
import { ORANGE, PURPLE } from "../styles/colors";
import { Modal, Popover } from "antd";
import { cardModalContainerStyle, friendIDStyle, friendNameStyle, friendVisitButtonStyle } from "../styles/content";
import { mock_gallery_data, mock_user_avatar } from "../data/profile";
import { USE_MOCK_DATA } from "../config";


const useMockData = USE_MOCK_DATA;


interface FriendsItemProps {
    name: string;
    id: string;
    avatar: string;
}


interface GalleryItemProps {
    pokemon_id: string;
    pokemon_name: string;
    pokemon_img: string;
    pokemon_date: string;
    pokemon_star: number;
}


const FriendsItem: React.FC<FriendsItemProps> = ({ name, id, avatar }) => {

    const [userPokemon, setUserPokemon] = React.useState(undefined);
    const [friendPokemon, setFriendPokemon] = React.useState(undefined);
    const [userAvatar, setUserAvatar] = React.useState(undefined);
    const [friendName, setFriendName] = React.useState(undefined);
    const [friendID, setFriendID] = React.useState(undefined);
    const [friendAvatar, setFriendAvatar] = React.useState(undefined);

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [friendGallery, setFriendGallery] = React.useState([] as GalleryItemProps[]);

    useEffect(() => {
        setFriendName(name);
        setFriendID(id);
        setFriendAvatar(avatar);
        if (useMockData) {
            setFriendGallery(mock_gallery_data);
            setUserAvatar(mock_user_avatar);
            setUserPokemon(mock_gallery_data[0]);
            setFriendPokemon(mock_gallery_data[1]);
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
            <Popover 
                content={<div style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <div
                    style={{
                        ...friendVisitButtonStyle,
                        backgroundColor: ORANGE,
                        height: "30px",
                        color: "white",
                    }}
                >ACCEPT</div>
                <div
                    style={{
                        ...friendVisitButtonStyle,
                        backgroundColor: "gray",
                        height: "30px",
                        color: "white",
                    }}
                >DELETE</div>
                </div>}
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
            </Popover>

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
                <div style={{
                    width: "100%",
                    // display: "flex",
                }}>
                    <img src={userAvatar}
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            margin: "20px",
                            float: "left",
                        }}
                    />
                    <img src={userPokemon?.pokemon_img}
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            margin: "20px",
                            float: "left",
                        }}
                    />

                    <img src={friendAvatar}
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            margin: "20px",
                            float: "right",
                        }}
                    />
                    <img src={friendPokemon?.pokemon_img}
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            margin: "20px",
                            float: "right",
                        }}
                    />
                </div>
                <iframe
                    src="http://localhost:7681/"
                    width="100%"
                    height="450"
                    style={{
                        border: "none",
                    }}
                ></iframe>

            </div>
        </Modal>
    </div>
    );
};

export default FriendsItem;