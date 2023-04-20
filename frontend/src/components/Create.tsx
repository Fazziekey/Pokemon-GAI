import React from "react";
import { contentContainerStyle, panelContainerStyle } from "../styles/content";
import { PURPLE } from "../styles/colors";


const Create = () => {
    return (
        <div
            style={contentContainerStyle}
        >
            <div
                style={panelContainerStyle}
            >
                <p
                    style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: PURPLE,
                    }}
                >{"Enter your Pokemon's name"}</p>

                <input
                    style={{
                        width: "80%",
                        height: "40px",
                        borderRadius: "8px",
                        border: `1px solid ${PURPLE}`
                    }}
                    placeholder="Please input your Pokemon's name"
                />
                {/* </input> */}
            </div>
            <div
                style={panelContainerStyle}
            >

            </div>
        </div>

    );
};

export default Create;