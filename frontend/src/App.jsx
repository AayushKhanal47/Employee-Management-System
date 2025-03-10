import { useContext, useState } from "react";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const { userData } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "1234") {
      setUser("admin");
    } else if (
      userData.some((emp) => emp.email === email && emp.password === password)
    ) {
      setUser("employee");
    } else {
      alert("Invalid Credentials! Please try again.");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;
