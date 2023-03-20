import Home from "../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout"
import QuienesSomos from "../pages/QuienesSomos"
import LoginAdmin from "../pages/LoginAdmin"
import Administracion from "../pages/Administracion"
import RecuperadoresPage from "../pages/RecuperadoresPage"
import EmpresasPage from "../pages/EmpresasPage"
import { SolicitudProvider } from "../context/SolicitudContex"
import SoliditudesAdminPages from "../pages/PagesAdmin/SoliditudesAdminPages/SoliditudesAdminPages"
import RecuperadoresAdmin from "../pages/PagesAdmin/RecuperadoresAdmin/RecuperadoresAdmin"
import AlianzasAdmin from "../pages/PagesAdmin/AlianzasAdmin/AlianzasAdmin"
import { RecuperadoresProvider } from "../context/RecuperadoresContext"
import { AlianzasProvider } from "../context/AlianzasContext"
import RutaProtegida from "../utils/RutaProtegida"
import EmpresasRecuperador from "../pages/PagesRecuperador/EmpresasRecuperador/EmpresasRecuperador"
import BonosRecuperador from "../pages/PagesRecuperador/BonosRecuperador/BonosRecuperador"
import UbicacionesRecuperados from "../pages/PagesRecuperador/Ubicaciones/UbicacionesRecuperados"
import RecuperadorUnico from "../pages/RecuperadorUnico"



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

                <Route path="/administracion" element={<RutaProtegida><Administracion /></RutaProtegida>}>
                  <Route path="/administracion/solicitudes" element={<RutaProtegida><SoliditudesAdminPages /></RutaProtegida>} />
                  <Route path="/administracion/recuperadores" element={<RutaProtegida><RecuperadoresAdmin /></RutaProtegida>} />
                  <Route path="/administracion/alianzas" element={<RutaProtegida><AlianzasAdmin /></RutaProtegida>} />
                </Route>

                <Route path="/recuperador" element={<RecuperadorUnico />} >
                  <Route path="/recuperador/ubicaciones" element={<UbicacionesRecuperados />} />
                  <Route path="/recuperador/bonos" element={<BonosRecuperador />} />
                  <Route path="/recuperador/empresas" element={<EmpresasRecuperador />} />

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