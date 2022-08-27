import { useCallback, useState } from "react";
import { HttpMethods } from "../../../shared/constants";
import { requestHeaders } from "../../../shared/utils/HttpHelpers";
import { RegisterType } from "../types/Auth";

const useAuth = () => {
    const [data, setData] = useState();
    const [error, setError] = useState<string>('');

    const registerUser = useCallback(async (input: RegisterType) => {
        try {
            const response = await fetch(`/api/auth/register`, {
                method: HttpMethods[HttpMethods.POST],
                headers: requestHeaders,
                body: JSON.stringify({ ...input }),
            });
            setData(await response.json());
        }
        catch (e: any) {
            setError(e.message);
        }
    }, []);

    return { data, error, registerUser }
}

export default useAuth;