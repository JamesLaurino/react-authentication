import {useContext, createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider ({ children })
{
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const loginAction = async (id) => {

        try {
            const response = await fetch(`http://localhost:8080/user/?id=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const res = await response.json();

            if (res) {
                setUser(res[0].id);
                setToken(res[0].token);
                localStorage.setItem("site", res[0].token);
                navigate("/dashboard");
                return;
            }

            throw new Error("une erreur s'est produite");

        } catch (err) {
            console.error(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};


export function useAuth ()
{
    return useContext(AuthContext);
}