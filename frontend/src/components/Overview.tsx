import React from "react";
import { contentContainerStyle, panelContainerStyle } from "../styles/content";

const Overview = () => {
    return (
        <div
            style={{
                ...contentContainerStyle,
                display: "flex",
            }}
        >
            <div
                style={panelContainerStyle}
            >
                <p>I have accomplished...</p>

            </div>
            <div
                style={{
                    ...panelContainerStyle,
                    marginRight: "30px",
                }}
            >
                
            </div>
        </div>

    );
};

export default Overview;