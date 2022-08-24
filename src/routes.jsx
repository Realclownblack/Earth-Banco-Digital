import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Cadastro from "./pages/Cadastro"

const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
   )
}

export default RoutesJS;