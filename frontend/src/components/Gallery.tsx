import React from "react";
import search from "../assets/search.png";
import { contentContainerStyle, searchBoxStyle } from "../styles/content";
import GalleryItem from "./GalleryItem";




const Gallery = () => {

    const pokemonList = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
    ];

    return (<div
        style={{
            ...contentContainerStyle,
            display: "flex",
            justifyContent: "left",
            flexDirection: "column",
            overflow: "scroll",
            height: "auto",
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
                height: "100%",
                paddingBottom: "300px",
            }}
        >
            {pokemonList.map((item) => {
                return <GalleryItem key={item.id} />;
            })}
        </div>

    </div>);
};

export default Gallery;