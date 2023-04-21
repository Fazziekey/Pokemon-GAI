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