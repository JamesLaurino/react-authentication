import {useAuth} from "./AuthProvider.jsx";


export default function Dashboard()
{
    const auth = useAuth();
    return (
        <div className="container">
            <div>
                <h1>Welcome! {auth.user?.username}</h1>
                <button onClick={() => auth.logOut()} className="btn-submit">
                    logout
                </button>
            </div>
        </div>
    );
};