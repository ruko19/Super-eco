import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import { useLocation } from "react-router-dom"

const Layout = ({ children }) => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname.startsWith("/administracion") ? null : <Header />
            }
            {children}

            <Footer />
        </div>
    )
}

export default Layout
