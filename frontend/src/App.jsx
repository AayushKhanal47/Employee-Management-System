
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
    <Login/>
   <EmployeeDashboard/> 
   <AdminDashboard/> 
    </>
  );
}

export default App;
 