import React, { useEffect } from "react";
import { contentContainerStyle, panelContainerStyle } from "../styles/content";
import { ORANGE, PURPLE } from "../styles/colors";
import pokemonPlaceholder from "../assets/pokemon.png";
import Visualization from "./Visualization";

const Overview = () => {
    const [name, setName] = React.useState("");
    const [victories, setVictories] = React.useState(0);
    const [battles, setBattles] = React.useState(0);
    const [pokemonList, setPokemonList] = React.useState([{}]);

    useEffect(() => {
        setName("Hollie77");
        setVictories(15);
        setBattles(28);
        setPokemonList([
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
        ]);
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
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}
                >{`Hi, this is ${name}! 🎉`}</p>
                <ul
                    style={{
                        fontFamily: "Inter",
                        fontSize: "14px",
                        // fontWeight: "bold",
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
                            color: ORANGE,
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
                        <img src={pokemonPlaceholder} 
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
                    overflow: "hidden"
                }}
            >
                <Visualization  />
            </div>
        </div>

    );
};

export default Overview;