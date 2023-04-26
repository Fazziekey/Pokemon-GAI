import React, { useEffect } from "react";
import { contentContainerStyle, searchBoxStyle } from "../styles/content";
import search from "../assets/search.png";
import FriendsItem from "./FriendsItem";
import { USE_MOCK_DATA } from "../config";
import { mock_friend_list } from "../data/profile";


const userMockData = USE_MOCK_DATA;

const Friends = () => {
    const [friends, setFriends] = React.useState([]);
    useEffect(() => {
        if(userMockData){
            setFriends(mock_friend_list);
            return;
        }
    }, []);

    return (<div
        style={{
            ...contentContainerStyle,
            justifyContent: "left",
            flexDirection: "column",
            overflow: "scroll",
            paddingBottom: "200px",
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
                paddingBottom: "120px",
            }}
        >
            {friends.map((item) => {
                return <FriendsItem key={item.user_id} 
                    name={item.user_name}
                    id={item.user_id}
                    avatar={item.user_img}
                />;
            })}
        </div>

    </div>);
};

export default Friends;