import { PURPLE } from "./colors";

export const contentContainerStyle = {
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    padding: "10px",
};

export const panelContainerStyle = {
    width: "40%",
    height: "60%",
    border: `1px solid ${PURPLE}`,
    borderRadius: "10px",
    margin: "10px 0 10px 0",
    padding: "20px",
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