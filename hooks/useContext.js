import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const loginUser = ({email, password}) => {
        setEmail(email);
        setPassword(password);
        setIsAuth(true);
    };

    const registerUser = ({login, password, email}) => {
        setLogin(login);
        setEmail(email);
        setPassword(password);
        setIsAuth(true);
    };

    const logOut = () => {
        setLogin('');
        setEmail('');
        setPassword('');
        setIsAuth(false);
    };

    const getUserInfo = () => {
        return {
            login,
            email,
            password
        }
    }

    return (
        <AppContext.Provider value={{  
          isAuth, 
          loginUser,
          registerUser,
          logOut,
          getUserInfo
        }}>
        {children}
        </AppContext.Provider>
    );
}