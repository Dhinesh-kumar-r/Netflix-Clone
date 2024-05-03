
import LandingPage from "./Component/IndexPage/LandingPage";
import Login from "./Component/Authentication/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/MainPage/Home";
import Register from "./Component/Authentication/Register";
import ForgotPassword from "./Component/Authentication/ForgotPassword";
import Reset from "./Component/Authentication/Reset";





function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path = "forgot" element={<ForgotPassword/>}/>
        <Route path = "/reset/:token" element={<Reset/>}/>
      </Routes>
    </BrowserRouter>
   
     
    </>
  );
}

export default App;
