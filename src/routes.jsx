import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"

export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
   )
}