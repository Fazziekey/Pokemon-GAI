import React, { useEffect } from "react";
import { contentContainerStyle, panelContainerStyle } from "../styles/content";
import { PURPLE } from "../styles/colors";
import pokemonPlaceholder from "../assets/pokemon.png";
import Visualization from "./Visualization";
import { USE_MOCK_DATA } from "../config";
import { mock_battle_num, mock_gallery_data, mock_user_name, mock_victory_num } from "../data/profile";


const userMockData = USE_MOCK_DATA;


const Overview = () => {
    const [name, setName] = React.useState("");
    const [victories, setVictories] = React.useState(0);
    const [battles, setBattles] = React.useState(0);
    const [pokemonList, setPokemonList] = React.useState([{
        pokemon_id: undefined,
        pokemon_name: undefined,
        pokemon_img: undefined,
        pokemon_date: undefined,
        pokemon_star: undefined,
    }]);

    useEffect(() => {
        if(userMockData){
            setName(mock_user_name);
            setVictories(mock_victory_num);
            setBattles(mock_battle_num);
            setPokemonList(mock_gallery_data);
            return;
        }

    }, []);

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
                <p
                    style={{
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}
                >{`Hi, this is ${name}! 🎉`}</p>
                <ul
                    style={{
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontWeight: "bold",
                        lineHeight: "30px",
                    }}
                >
                    <li>I have accomplished...</li>
                    <ul style={{
                            fontWeight: "normal"
                        }}>
                        <li><span style={{
                            color: PURPLE,
                            fontSize: "18px",
                        }}>{`${victories}`}</span> victories in battles</li>
                        <li><span style={{
                            color: PURPLE,
                            fontSize: "18px",
                        }}>{`${battles}`}</span> battles all together</li>
                    </ul>
                    <li>I have collected...</li>
                    <ul style={{
                            fontWeight: "normal"
                        }}>
                        <li><span style={{
                            color: PURPLE,
                            fontSize: "18px",
                        }}>{`${pokemonList.length}`}</span> Pokemon</li>
                    </ul>
                    <li>This is my Collection...</li>
                </ul>

                <div 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >{pokemonList.map((pokemon, index)=>{
                    return <div key={index}
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "15px",
                            border: `1px solid ${PURPLE}`,
                            overflow: "hidden",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            margin: "10px",
                        }}
                    >
                        <img src={pokemon.pokemon_img} 
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>;
                })}</div>

            </div>
            <div
                style={{
                    ...panelContainerStyle,
                    marginRight: "30px",
                }}
            >
                <Visualization  />
            </div>
        </div>

    );
};

export default Overview;