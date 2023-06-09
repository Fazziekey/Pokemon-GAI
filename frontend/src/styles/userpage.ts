import { PURPLE, YELLOW } from "./colors";

export const userNameStyle = {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: 900,
    fontSize: "32px",
    lineHeight: "8px",
    color: "#000000",
    marginBottom: "0"
};

export const userIDStyle = {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "8px",
    color: "#959595"
};

export const userAvatarStyle = {
    width: "30vh",
    height: "30vh",
    borderRadius: "50%",
    overflow: "hidden",
};

export const userEditProfileInputStyle = {
    color: "#4E4E4E",
    border: `1px solid ${PURPLE}`,
    borderRadius: "5px",
    fontSize: "14px",
    padding: "0 8px",
};

export const userEditProfileButtonStyle = {
    marginTop: "20px",
    padding: "5px 0",
    width: "200px",
    height: "30px",
    border: `1px solid ${PURPLE}`,
    borderRadius: "10px",
    color: PURPLE,
    backgroundColor: "white",
};

export const userProfileListStyle = {
    lineHeight: "24px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontStyle: "normal",
    color: "#4E4E4E",
};

export const userProfileBackgroundStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export const userProfileUploadStyle = {
    backgroundColor: YELLOW,
    color: "white",
    height: "30px",
    width: "30px",
    borderRadius: "15px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 900,
    cursor: "pointer",
    marginLeft: "150px",
    marginTop: "-40px",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export const userProfileContainerStyle = {
    position: "fixed",
    top: "10vh",
    width: "25vw",
    height: "100vh",
};

export const userHeaderStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    width: "100vw",
    height: "25vh",
    left: "0px",
    top: "0px"
};


export const navigationListStyle = {
    listStyle: "none",
    height: "20px",
    bottom: 0,
    left: "25vw",
    marginBottom: "10px"
};


export const navigationLinkStyle = {
    color: "white",
    backgroundColor: "rgba(65, 35, 207, 0.35)",
    padding: "5px 20px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    borderRadius: "10px",
    textDecoration: "none"
};

export const outletContainerStyle = {
    position: "fixed",
    top: "25vh",
    left: "25vw",
    width: "75vw",
    height: "100vh",
    overflow: "scroll",
};