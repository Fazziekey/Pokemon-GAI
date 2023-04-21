import React from "react";
import { ORANGE, PURPLE } from "../styles/colors";
import friend from "../assets/friend.png";
import { friendIDStyle, friendNameStyle, friendVisitButtonStyle } from "../styles/content";

const FriendsItem = () => {
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
                    src={friend}
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
                <p style={friendNameStyle}>HeHeHeCan</p>
                <p style={friendIDStyle}>ID: PK230289</p>
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