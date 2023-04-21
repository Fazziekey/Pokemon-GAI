import React from "react";
import { PURPLE } from "../styles/colors";

const GalleryItem = () => {
    return (<div>
        <div
            style={{
                width: "300px",
                height: "185px",
                borderRadius: "15px",
                border: `1px solid ${PURPLE}`,
                margin: "10px 10px 0 10px",
            }}
        >
        </div>
        <div 
            style={{
                margin: "0 10px 0 10px",
            }}
        >
            <p style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                float: "left",
                marginLeft: "10px",
            }}>Pokemon</p>
            <p style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "lighter",
                color: "#B6B6B6",
                fontSize: "14px",
                float: "right",
                marginRight: "10px",
            }}>2023-1-31</p>
        </div>
    </div>

    );
};

export default GalleryItem;