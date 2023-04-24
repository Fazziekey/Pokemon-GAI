import React from "react";
import { galleryItemImgStyle, galleryItemDateStyle, galleryItemNameStyle } from "../styles/content";

const GalleryItem = () => {
    return (<div>
        <div
            style={galleryItemImgStyle}
        >
        </div>
        <div
            style={{
                margin: "0 10px 0 10px",
            }}
        >
            <p style={{
                ...galleryItemNameStyle,
                float: "left",
            }}>Pokemon</p>

            <p style={{
                ...galleryItemDateStyle,
                float: "right",
            }}>2023-1-31</p>
        </div>
    </div>

    );
};

export default GalleryItem;