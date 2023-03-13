import Home from "../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout"
import QuienesSomos from "../pages/QuienesSomos"
import Eventos from "../pages/Eventos"
import Contacto from "../pages/Contacto"
import LoginAdmin from "../pages/LoginAdmin"
import Administracion from "../pages/Administracion"
import { EventosProvider } from "../context/EventosContext"
import EventoUnico from "../pages/EventoUnico"
import Ubicaciones from "../pages/Ubicaciones"
import { BlogProvider } from "../context/BlogContext"
import BlogsPage from "../pages/BlogsPage"
import RutaProtegida from "../utils/RutaProtegida"
import BlogUnico from "../pages/BlogUnico"
import IniciativaUnica from "../components/IniciativaUnica/IniciativaUnica"



function App() {
  return (
    <BlogProvider>
      <EventosProvider>
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
              <Route path="/administracion" element={<RutaProtegida><Administracion /></RutaProtegida>} />
              <Route path="/iniciativas" element={<IniciativaUnica />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EventosProvider>
    </BlogProvider>
  )
}

export default App
