import React, { useEffect, useState } from "react";
import RoleSelection from "./components/RoleSelection";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployDashboard from "./components/dashboard/EmployDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize local storage if not already set
    setLocalStorage();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <>
      {!user ? (
        <RoleSelection setUser={setUser} />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployDashboard data={user} />
      )}
    </>
  );
}

export default App;
