import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../components/Context/AppContext";

export const useUserInfo = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [jwt, setJwt] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const { setLoading } = useContext(AppContext)

    const handleGetUserInfo = useCallback(async (jwt) => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            };
            const { data } = await axios.get("http://localhost:1337/api/users/me", config)
            setUserInfo({ ...data });

        } catch (err) {
            logOut();
        }
        setLoading(false);
    }, [setLoading]);

    useEffect(() => {
        setJwt(localStorage.getItem("jwt"));
        if (jwt) {
            handleGetUserInfo(jwt);
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [handleGetUserInfo, jwt]);

    const logOut = () => {
        setJwt("");
        localStorage.removeItem("jwt");
    };
    const logIn = (jwt) => {
        setJwt(jwt);
        localStorage.setItem("jwt", jwt);
    };
    return {
        jwt,
        isLogged,
        logIn,
        logOut,
        userInfo,
    };
};