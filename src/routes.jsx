import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Duvidas from "./pages/Duvidas";
import ContaEarth from "./pages/ContaEarth";
import EarthJoy from "./pages/EarthJoy"
import TemEarth from "./pages/TemEarth"
import SobreNos from "./pages/SobreNos"
import OpenFinance from "./pages/OpenFinance"
import EarthShop from "./pages/EarthShop"
import Contato from "./pages/Contato"

export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/duvidas" element={<Duvidas/>} />
        <Route path="/contaearth" element={<ContaEarth/>} />
        <Route path="/earthjoy" element={<EarthJoy/>} />
        <Route path="/temaearth" element={<TemEarth/>} />
        <Route path="/sobrenos" element={<SobreNos/>} />
        <Route path="/openfinance" element={<OpenFinance/>} />
        <Route path="/earthshop" element={<EarthShop/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
   )
}