
import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        let storedData = getLocalStorage();

        if (!storedData || !storedData.employees) {
            storedData = {
                employees: [
                    { email: "user1@me.com", password: "1234" },
                    { email: "user2@me.com", password: "5678z" },
                    { email: "user3@me.com", password: "abcd" },
                ],
            };
            setLocalStorage(storedData);
        }

        setUserData(storedData.employees);
        console.log("Loaded employees:", storedData.employees);
    }, []);

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
