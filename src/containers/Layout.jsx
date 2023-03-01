import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
