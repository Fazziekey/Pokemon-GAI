import React, { useEffect } from "react";
import { ORANGE, PURPLE } from "../styles/colors";
import friend from "../assets/friend.png";
import { friendIDStyle, friendNameStyle, friendVisitButtonStyle } from "../styles/content";


interface FriendsItemProps {
    name: string;
    id: string;
    avatar: string;
}


const FriendsItem: React.FC<FriendsItemProps> = ({ name, id, avatar}) => {

    const [friendName, setFriendName] = React.useState(undefined);
    const [friendID, setFriendID] = React.useState(undefined);
    const [friendAvatar, setFriendAvatar] = React.useState(undefined);

    useEffect(() => {
        setFriendName(name);
        setFriendID(id);
        setFriendAvatar(avatar);
    }, []);


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
            >Visit Homepage</button>
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
            >Battle</button>

        </div>
        <div style={{
            width: "80%",
            height: "1px",
            backgroundColor: PURPLE,
            marginLeft: "50px"
        }}
        ></div>
    </div>
    );
};

export default FriendsItem;