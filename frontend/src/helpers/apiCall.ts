import { getData, postData } from "./apiCallWrappers";


export const postRegister = async (username: string, password: string, email: string) => {
    const payload = {
        username: username,
        password: password,
        email: email
    };
    const response = await postData("/register", payload);
    return response;
};


export const postLogin = async (email: string, password: string) => {
    const payload = {
        email: email,
        password: password
    };
    const response = await postData("/login", payload);
    return response;
};


export const getProfile = async (userID: string) => {
    const payload = {
        userID: userID
    };
    const response = await getData("/profile", payload);
    return response;
};


export const postProfileEdit = async (userID: string, age?: number, role?: string, like?: string, motto?: string, contact?: string) => {
    const payload = {
        userID: userID,
        age: age,
        role: role,
        like: like,
        motto: motto,
        contact: contact
    };
    const response = await postData("/profile/info", payload);
    return response;
};


export const postProfileAvatar = async (userID: string, avatar: string) => {
    const payload = {
        userID: userID,
        avatar: avatar
    };
    const response = await postData("/profile/avatar", payload);
    return response;
};
