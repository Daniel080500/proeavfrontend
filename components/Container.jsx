import { Footer } from "./footer"
import { Navbar } from "./Navbar"

export const Container = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div >
                {children}
            </div>
            <Footer />
        </div>
    )
}