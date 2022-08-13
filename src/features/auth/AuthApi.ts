import { HttpMethods } from "../../utils/AppConstants";
import { requestHeaders } from "../../utils/helpers/HttpHelpers";
import { RegisterType } from "./AuthTypes";

const registerApi = (register: RegisterType) => {
    return fetch(`/api/register`, {
        method: HttpMethods[HttpMethods.POST],
        headers: requestHeaders,
        body: JSON.stringify({ ...register }),
    }).then(response => {
        // if (!response.ok) {
        //     throw new Error(response.statusText)
        // }
        return response.json();
    })
};

export { registerApi }