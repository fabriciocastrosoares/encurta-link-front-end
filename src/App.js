import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";
import RgistrationScreen from "./pages/RgistrationScreen";
import LoginScreen from "./pages/LoginScreen";
import HomePageLoggedIn from "./pages/HomePageLoggedIn";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/main-screen" element = {<MainScreen />} />
        <Route path = "/registration-screen" element = {<RgistrationScreen />} />
        <Route path = "/login-screen" element = {<LoginScreen />} />
        <Route path = "/logged-in" element = {<HomePageLoggedIn />} />
      </Routes>
    </BrowserRouter>
  );
};
