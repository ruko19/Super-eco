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
import RecuperadoresPage from "../pages/RecuperadoresPage"
import EmpresasPage from "../pages/EmpresasPage"
import { SolicitudProvider } from "../context/SolicitudContex"

import HomeAdminPages from "../pages/PagesAdmin/HomeAdmin/HomeAdminPages"
import SoliditudesAdminPages from "../pages/PagesAdmin/SoliditudesAdminPages/SoliditudesAdminPages"
import RecuperadoresAdmin from "../pages/PagesAdmin/RecuperadoresAdmin/RecuperadoresAdmin"
import AlianzasAdmin from "../pages/PagesAdmin/AlianzasAdmin/AlianzasAdmin"



function App() {
  return (
    <SolicitudProvider>
      <BrowserRouter>
        <Layout>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/recuperadores" element={<RecuperadoresPage />} />
            <Route path="/empresas" element={<EmpresasPage />} />


            <Route path="/administracion" element={<Administracion />}>

              <Route path="/administracion/dashboard" element={<HomeAdminPages />} />
              <Route path="/administracion/solicitudes" element={<SoliditudesAdminPages />} />
              <Route path="/administracion/recuperadores" element={<RecuperadoresAdmin />} />
              <Route path="/administracion/alianzas" element={<AlianzasAdmin />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>

    </SolicitudProvider>

  )
}

export default App
