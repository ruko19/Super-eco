import Header from "../layouts/Header"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
