import Home from "../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout"
import QuienesSomos from "../pages/QuienesSomos"
import LoginAdmin from "../pages/LoginAdmin"
import Administracion from "../pages/Administracion"
import RecuperadoresPage from "../pages/RecuperadoresPage"
import EmpresasPage from "../pages/EmpresasPage"
import { SolicitudProvider } from "../context/SolicitudContex"
import HomeAdminPages from "../pages/PagesAdmin/HomeAdmin/HomeAdminPages"
import SoliditudesAdminPages from "../pages/PagesAdmin/SoliditudesAdminPages/SoliditudesAdminPages"
import RecuperadoresAdmin from "../pages/PagesAdmin/RecuperadoresAdmin/RecuperadoresAdmin"
import AlianzasAdmin from "../pages/PagesAdmin/AlianzasAdmin/AlianzasAdmin"
import { RecuperadoresProvider } from "../context/RecuperadoresContext"
import { AlianzasProvider } from "../context/AlianzasContext"



function App() {
  return (
    <AlianzasProvider>
      <RecuperadoresProvider>
        <SolicitudProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
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
      </RecuperadoresProvider>
    </AlianzasProvider>

  )
}

export default App