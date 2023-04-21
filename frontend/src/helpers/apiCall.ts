import { getData, postData } from "./apiCallWrappers";


export const register = async (username: string, password: string, email: string) => {
    const payload = {
        username: username,
        password: password,
        email: email
    };
    const response = await postData("/register", payload);
    return response;
};
