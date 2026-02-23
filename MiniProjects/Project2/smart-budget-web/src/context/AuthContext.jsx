import { createContext, useEffect, useState } from "react";

// create global auth context
export const AuthContext = createContext();

export function AuthProvider(props) {
  // store user
  const [user, setUser] = useState(null);

  // Load user from localstorage when app starts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Singup Function (register new user )
  const signup = (name, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const existingUser = users.find((u) => u.name === name);
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const role = name.toLowerCase() === "admin" ? "admin" : "user";

    const newUser = { name, password, role };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    console.log("Saving to localStorage");

    setUser(newUser);

    return { success: true };
  };

  // Login Function (save user to state & localstorage)
  const login = (name, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.name === name && u.password === password,
    );

    // login validation
    if (!foundUser) {
      return { success: false, message: "Invalid credentials" };
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setUser(foundUser);

    return { success: true };
  };

  // Logout Function (Clear user session)
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
