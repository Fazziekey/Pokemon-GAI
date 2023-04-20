import React from "react";
import { PURPLE } from "../styles/colors";

const FriendsItem = () => {
    return (<div
        style={{
            width: "80%",
            height: "100px",
            padding: "10px",
            borderBottom: `1px solid ${PURPLE}`,
        }}
    >Name</div>);
};

export default FriendsItem;