import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Duvidas from "./pages/Duvidas";

export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/duvidas" element={<Duvidas/>} />
      </Routes>
    </BrowserRouter>
   )
}