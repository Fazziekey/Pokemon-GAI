import { getData, postData } from "./apiCallWrappers";
import axios from "axios";


export const postRegister = async (username: string, password: string, email: string) => {
    const params = {
        username: username,
        password: password,
        email: email
    };
    const response = await postData("/register", null, params);
    return response;
};


export const postLogin = async (email: string, password: string) => {

    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: formData
    })

    return response

    // TODO: Adapt to axios
    // const params = {
    //     email: email,
    //     password: password
    // };
    // const response = await postData("/login", null, params);
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