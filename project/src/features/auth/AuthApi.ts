import { HttpMethods } from "../../shared/utils/AppConstants";
import { requestHeaders } from "../../shared/utils/HttpHelpers";
import { RegisterType } from "./AuthTypes";

const registerApi = async (register: RegisterType) => {
    const response = await fetch(`/api/auth/register`, {
        method: HttpMethods[HttpMethods.POST],
        headers: requestHeaders,
        body: JSON.stringify({ ...register }),
    });
    // if (!response.ok) {
    //     throw new Error(response.statusText);
    // }
    return await response.json();
};

export { registerApi }