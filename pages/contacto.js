import axios from "axios"
import { useContext, useRef } from "react"
import Swal from "sweetalert2"
import { AppContext } from "../components/Context/AppContext"

const contacto = () => {
    const form = useRef(null)
    const { setLoading } = useContext(AppContext)
    const handlePostContact = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:1337/api/contactos/', {
                data: {
                    NombreCompleto: form.current["name"].value,
                    Correo: form.current["email"].value,
                    Telefono: form.current["telefono"].value,
                    Direccion: form.current["direccion"].value,
                    Asunto: form.current["asunto"].value,
                }

            });
            form.current["name"].value = ""
            form.current["email"].value = ""
            form.current["telefono"].value = ""
            form.current["direccion"].value = ""
            form.current["asunto"].value = ""

            Swal.fire({
                title: "Exito!!",
                text: "Exito al enviar el formulario",
                icon: "success",

            });
        } catch (error) {
            Swal.fire({
                title: "Error!!",
                text: "Error al enviar el formulario",
                icon: "error",
            });
        }
        setLoading(false)
    }
    return (
        <div>
            <div class="container">
                <form ref={form} onSubmit={handlePostContact}>
                    <div className="row">
                        <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                            <div className="border-bottom border-5 border-dark d-flex justify-content-center">
                                <h3>Contáctenos</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 offset-md-1 mt-5">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label htmlFor="nameInput" className="col-form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" name="name" placeholder="Ingrese su nombre completo" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label htmlFor="emailInput" className="col-form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" name="email" placeholder="Ingrese su dirección de correo" />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label htmlFor="numberInput" className="col-form-label">Teléfono</label>
                                    <input type="number" className="form-control" name="telefono" placeholder="Ingrese su número de teléfono" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label htmlFor="direccionInput" className="col-form-label">Dirección</label>
                                    <input type="text" className="form-control" name="direccion" placeholder="Ingrese su dirección" />
                                </div>

                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label htmlFor="FormControlTextarea" className="col-form-label">Asunto</label>
                                    <textarea className="form-control" name="asunto" rows={3} defaultValue={""} placeholder="Ingrese el motivo por el cual nos contacta" />
                                </div>
                            </div>

                            <button
                                type="submit" className="btn btn-primary">Enviar
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default contacto