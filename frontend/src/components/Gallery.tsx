import React, { useEffect } from "react";
import search from "../assets/search.png";
import { contentContainerStyle, searchBoxStyle } from "../styles/content";
import GalleryItem from "./GalleryItem";
import { USE_MOCK_DATA } from "../config";
import { mock_gallery_data } from "../data/profile";


const userMockData = USE_MOCK_DATA;


const Gallery = () => {
    const [pokemonList, setPokemonList] = React.useState([]);

    useEffect(() => {
        if (userMockData) {
            setPokemonList(mock_gallery_data);
            return;
        }
    }, []);

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
                return <GalleryItem
                    key={item.id}
                    pokemon_date={item.pokemon_date}
                    pokemon_name={item.pokemon_name}
                    pokemon_img={item.pokemon_img}
                    pokemon_star={item.pokemon_star}
                />;
            })}
        </div>

    </div>);
};

export default Gallery;