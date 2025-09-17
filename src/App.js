import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";
import RegistrationScreen from "./pages/RgistrationScreen";
import LoginScreen from "./pages/LoginScreen";
import HomePageLoggedIn from "./pages/HomePageLoggedIn";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";


export default function App() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <UserContext.Provider value={{ name, setName, token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main-screen" element={<MainScreen />} />
            <Route path="/registration-screen" element={<RegistrationScreen />} />
            <Route path="/login-screen" element={<LoginScreen />} />
            <Route path="/logged-in" element={<HomePageLoggedIn />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};
