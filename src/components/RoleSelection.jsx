import React, { useState, useContext, useEffect } from "react";
import Login from "./auth/Login";
import { AuthContext } from "../context/AuthProvider";

function RoleSelection({ setUser }) {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [authData, setUser]);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleLogin = (email, password) => {
    if (role === "admin" && authData?.admin.some((a) => a.email === email && a.password === password)) {
      const userData = { role: "admin" };
      setUser(userData);
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
    } else if (role === "user") {
      const employee = authData?.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        const userData = { ...employee, role: "employee" };
        setUser(userData);
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Please select a valid role.");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-5">
        {role ? (
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} />
        ) : (
          <>
            <h2 className="text-2xl mb-4">Are you an Admin or User?</h2>
            <button
              className="text-white bg-emerald-600 hover:bg-emerald-800 border-2 border-emerald-600 px-5 py-2 rounded-full mr-4"
              onClick={() => handleRoleSelection("admin")}
            >
              Admin
            </button>
            <button
              className="text-white bg-emerald-600 hover:bg-emerald-800 border-2 border-emerald-600 px-5 py-2 rounded-full"
              onClick={() => handleRoleSelection("user")}
            >
              User
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default RoleSelection;
