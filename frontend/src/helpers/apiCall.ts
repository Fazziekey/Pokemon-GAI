import { getData, postData } from "./apiCallWrappers";
import axios from "axios";


export const postRegister = async (username: string, password: string, email: string) => {
    const params = {
        email: email
    };
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await postData("/register", formData, params, "multipart/form-data");
    return response;
};


export const postLogin = async (email: string, password: string) => {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    const response = await postData("/login", formData, null, "multipart/form-data");
    
    return response;
};


export const getProfile = async (userID: string) => {
    const params = {
        userID: userID
    };
    const response = await getData("/profile", params);
    return response;
};


export const postProfileInfo = async (userID: string, age?: number, role?: string, like?: string, motto?: string, contact?: string) => {
    const payload = {
        info:
        {
            age: age,
            role: role,
            like: like,
            motto: motto,
            contact: contact
        }
    };
    const params = {
        userID: userID,
    };
    const response = await postData("/profile/info", payload, params);
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


export const getImagenGenerate = async (prompt: string, pokeType: string, pokeName: string) => {
    const params = {
        prompt: prompt,
        pokeType: pokeType,
        pokeName: pokeName
    };
    const response = await getData("/imagen/generate", params);
    return response;
};