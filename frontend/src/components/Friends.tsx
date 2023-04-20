import React from "react";
import { contentContainerStyle, searchBoxStyle } from "../styles/content";
import search from "../assets/search.png";
import FriendsItem from "./FriendsItem";

const Friends = () => {

    const friends = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ];

    return (<div
        style={{
            ...contentContainerStyle,
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            flexDirection: "column",
        }}
    >
        <div style={searchBoxStyle}>
            <img
                style={{
                    width: "20px",
                    height: "20px",
                }}
                src={search} />
            <input
                style={{
                    border: "none",
                    outline: "none",
                }}
                placeholder="Search"
            ></input>
        </div>

        <div 
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
            }}
        >
            {friends.map((item) => {
                return <FriendsItem key={item.id} />;
            })}
        </div>

    </div>);
};

export default Friends;