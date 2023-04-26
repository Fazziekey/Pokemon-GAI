import React, { useEffect } from "react";
import { cardAttributeContainerStyle, cardAttributeTitleStyle, cardModalContainerStyle, cardModalImgContainerStyle, contentContainerStyle, galleryItemDateStyle, galleryItemImgContainerStyle, galleryItemImgStyle, galleryItemTitleStyle, panelContainerStyle } from "../styles/content";
import pokemonPlaceholder from "../assets/pokemonBall.png";
import { Slider, Modal, Tag } from "antd";
import { ORANGE } from "../styles/colors";
import star from "../assets/star.png";
import pokemon from "../assets/pokemon.png";
import { ATTRIBUTE_LIST, ATTRIBUTE_TYPE } from "../helpers/constants";
import { USE_MOCK_DATA } from "../config";


const useMockData = USE_MOCK_DATA;


interface Props {
    numStars: number;
}


const StarRow: React.FC<Props> = ({ numStars }) => {
    const stars = Array.from({ length: numStars }, (_, index) => (
        <img
            key={index}
            src={star}
            style={{
                width: "50px",
                height: "50px"
            }}
        />
    ));

    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "center",
        position: "relative"
    }}>{stars}</div>;
};


interface GalleryItemProps {
    pokemon_date: string;
    pokemon_name: string;
    pokemon_img: string;
    pokemon_star: number;
}


const GalleryItem: React.FC<GalleryItemProps>  = ({ pokemon_date, pokemon_name, pokemon_img, pokemon_star }) => {

    const [title, setTitle] = React.useState(undefined);
    const [date, setDate] = React.useState(undefined);
    const [image, setImage] = React.useState(undefined);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [starNum, setStarNum] = React.useState(undefined);
    const [avatar, setAvatar] = React.useState(undefined);

    useEffect(() => {  
        setTitle(pokemon_name);
        setDate(pokemon_date);
        setImage(pokemonPlaceholder);
        setStarNum(pokemon_star);
        setAvatar(pokemon_img);
    }, []);

    const handleOk = () => {
        // handleEditProfile();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (<div>
        <div
            onClick={() => setIsModalOpen(true)}
            style={galleryItemImgContainerStyle}

        >
            <img
                src={image}
                style={{
                    ...galleryItemImgStyle,
                    objectFit: "cover",
                }}
            />
        </div>

        <div
            style={{
                margin: "0 10px",
            }}
        >
            <p style={{
                ...galleryItemTitleStyle,
                float: "left",
            }}>{title}</p>
            <p style={{
                ...galleryItemDateStyle,
                float: "right",
            }}>{date}</p>

        </div>

        <Modal
            title={title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={1000}
            centered
        >
            <div style={{
                ...cardModalContainerStyle,
                flexDirection: "column",
            }}>
                <div
                    style={{
                        ...contentContainerStyle,
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            ...panelContainerStyle,
                            height: "90%",
                            padding: "20px 0",
                            overflow: "hidden",
                            borderRadius: "30px",
                            border: "none",
                        }}
                    >
                        <div>
                            <StarRow numStars={starNum} />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "-50px",
                                }}
                            >
                                <img src={avatar} style={{
                                    width: "280px",
                                    height: "280px",
                                    borderRadius: "50%",
                                    border: "3px solid white",
                                }} />
                            </div>

                            <div style={{
                                ...cardModalImgContainerStyle,
                                flexDirection: "column",
                            }}>
                                {ATTRIBUTE_LIST.map((attribute, index) => (
                                    <div key={index} style={{
                                        ...cardAttributeContainerStyle,
                                        flexDirection: "row",
                                    }}>
                                        <p style={cardAttributeTitleStyle}>{attribute.title}</p>
                                        {attribute.type === ATTRIBUTE_TYPE.category ? (
                                            <div style={{
                                                width: "50%",
                                                marginLeft: "10px",
                                            }}>
                                                <Tag color="volcano">{attribute.value}</Tag>
                                            </div>
                                        ) : (
                                            <Slider
                                                defaultValue={Number(attribute.value)}
                                                style={{
                                                    width: "50%",
                                                    marginLeft: "10px",
                                                }}
                                                trackStyle={{
                                                    backgroundColor: ORANGE,
                                                }}
                                                railStyle={{
                                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                                }}
                                            />
                                        )}
                                    </div>)
                                )}
                            </div>

                        </div>

                    </div>
                    <div
                        style={{
                            ...panelContainerStyle,
                            height: "90%",
                            padding: "20px 0",
                            borderRadius: "30px",
                        }}
                    >
                        <iframe
                            src="https://fazzie-pokemongai.hf.space/"
                            frameBorder="0"
                            width="100%"
                            height="450"
                        ></iframe>

                    </div>
                </div>

            </div>
        </Modal>
    </div>
    );
};

export default GalleryItem;