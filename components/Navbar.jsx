import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "./Context/UserContext"
export const Navbar = () => {
    const { isLogged, logOut } = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/" passhref>
                    <a><em><h1>EAV</h1></em></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav" >
                    <ul className="navbar-nav" >
                        <li className="nav-item custom-hover" >
                            <Link href="/nosotros" passhref >
                                <a className="nav-link active " style={{ color: 'Black' }} aria-current="page">Nuestra empresa</a>
                            </Link>
                        </li>
                        <li className="nav-item custom-hover">
                            <Link href="/productos" passhref >
                                <a className="nav-link active" style={{ color: 'Black' }} aria-current="page">Productos</a>
                            </Link>
                        </li>
                        <li className="nav-item custom-hover">
                            <Link href="/servicios" passhref >
                                <a className="nav-link active" style={{ color: 'Black' }} aria-current="page">Servicios</a>
                            </Link>
                        </li>
                        <li className="nav-item custom-hover">
                            <Link href="/contacto" passhref >
                                <a className="nav-link active" style={{ color: 'Black' }} aria-current="page">Contacto</a>
                            </Link>
                        </li>
                        {isLogged &&
                            <li className="nav-item custom-hover">
                                <a className="nav-link active" style={{ color: 'Black', cursor: "pointer" }} aria-current="page" onClick={logOut}>Cerrar sesión</a>
                            </li>}
                    </ul>
                </div>
            </div>
        </nav>

    )
}