import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          setUserData([]);
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:5005/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data.users); 
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;