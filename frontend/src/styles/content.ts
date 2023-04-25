import { PURPLE } from "./colors";
import cardBackground from "../assets/card.png";


export const contentContainerStyle = {
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    padding: "10px",
};

export const panelContainerStyle = {
    width: "45%",
    height: "65vh",
    border: `1px solid ${PURPLE}`,
    borderRadius: "30px",
    margin: "10px",
    padding: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

export const searchBoxStyle = {
    borderRadius: "15px",
    border: "1px solid #D9D9D9",
    width: "30%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    margin: "10px 0 0 10px",
};

export const galleryItemImgContainerStyle = {
    width: "300px",
    height: "185px",
    borderRadius: "15px",
    border: `1px solid ${PURPLE}`,
    margin: "10px 10px 0 10px",
    overflow: "hidden",
    cursor: "pointer",
};

export const galleryItemImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

export const galleryItemTitleStyle = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    float: "left",
    marginLeft: "10px",
};

export const galleryItemDateStyle = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "lighter",
    color: "#B6B6B6",
    fontSize: "14px",
    float: "right",
    marginRight: "10px",
};

export const friendNameStyle = {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: 900,
    fontSize: "20px",
    lineHeight: "24px",
    margin: "0px",
};

export const friendIDStyle = {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#959595",
    margin: "0px",
};

export const friendVisitButtonStyle = {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: 900,
    fontSize: "16px",
    padding: "5px 20px 5px 20px",
    border: "1px solid",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
    height: "50px",
    backgroundColor: "white",
};

export const createTextStyle = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    color: PURPLE,
};

export const createInputStyle = {
    width: "80%",
    height: "40px",
    borderRadius: "8px",
    border: `1px solid ${PURPLE}`
};

export const createGroupContainerStyle = {
    padding: "10px 0",
    display: "flex",
    alignItems: "center",
};

export const cardModalContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "600px"
};

export const cardModalImgContainerStyle = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${cardBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "60vh",
    marginTop: "-140px",
    borderRadius: "30px",
    paddingTop: "150px"
};

export const cardAttributeTitleStyle = {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "19px",
    color: "white",
    width: "100px",
    textShadow: "0px 4px 4px #ED9111",
};

export const cardAttributeContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "45px",

};