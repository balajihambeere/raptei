import { HttpMethods } from "../../utils/AppConstants";
import { requestHeaders } from "../../utils/helpers/HttpHelpers";
import { RegisterType } from "./AuthTypes";

const registerApi = async (register: RegisterType) => {
    const response = await fetch(`/api/auth/register`, {
        method: HttpMethods[HttpMethods.POST],
        headers: requestHeaders,
        body: JSON.stringify({ ...register }),
    });
    console.log("response", response);
    // if (!response.ok) {
    //     throw new Error(response.statusText);
    // }
    return await response.json();
};

export { registerApi }