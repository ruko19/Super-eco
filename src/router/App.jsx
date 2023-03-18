import Home from "../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout"
import QuienesSomos from "../pages/QuienesSomos"
import Eventos from "../pages/Eventos"
import Contacto from "../pages/Contacto"
import LoginAdmin from "../pages/LoginAdmin"
import Administracion from "../pages/Administracion"
import Ubicaciones from "../pages/Ubicaciones"
import BlogsPage from "../pages/BlogsPage"

import BlogUnico from "../pages/BlogUnico"
import IniciativaUnica from "../components/IniciativaUnica/IniciativaUnica"
import RecuperadoresPage from "../pages/RecuperadoresPage"
import EmpresasPage from "../pages/EmpresasPage"
import { SolicitudProvider } from "../context/SolicitudContex"

import HomeAdminPages from "../pages/PagesAdmin/HomeAdmin/HomeAdminPages"
import SoliditudesAdminPages from "../pages/PagesAdmin/SoliditudesAdminPages/SoliditudesAdminPages"
import RecuperadoresAdmin from "../pages/PagesAdmin/RecuperadoresAdmin/RecuperadoresAdmin"
import AlianzasAdmin from "../pages/PagesAdmin/AlianzasAdmin/AlianzasAdmin"
import { RecuperadoresProvider } from "../context/RecuperadoresContext"



function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/evento/:id" element={<EventoUnico />} />
          <Route path="/blog/:id" element={<BlogUnico />} />
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/ubicaciones" element={<Ubicaciones />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/iniciativa/:id" element={<IniciativaUnica />} />

          <Route path="/recuperadores" element={<RecuperadoresPage />} />
          <Route path="/empresas" element={<EmpresasPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
