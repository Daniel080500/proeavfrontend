import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import { AppContext } from '../../../components/Context/AppContext'
import { UserContext } from '../../../components/Context/UserContext'
import { ServiciosList } from '../../../components/Servicios/ServiciosList'
import { ServiciosRow } from '../../../components/Servicios/ServiciosRow'
import { useServicios } from '../../../hooks/useServicios'


function index() {
    const { servicios, setServicio, setServicios } = useServicios()
    const form = useRef(null)
    const { jwt } = useContext(UserContext)
    const { setLoading } = useContext(AppContext)
    const handleFilterServices = (e) => {
        e.preventDefault()
        setServicio(form.current["servicio"].value)
    }
    const handleDelete = (id, Nombre) => {
        Swal.fire({
            title: "¿Deseas eliminar el servicio: " + Nombre + "?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `Cancelar`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    };

                    setLoading(true)
                    axios.delete('http://localhost:1337/api/servicios/' + id, config)

                    setLoading(false)
                    Swal.fire("Eliminado", Nombre, "success");
                    setServicios(servicios.filter((servicio) => id != servicio.id));
                } catch (error) {
                    console.log("error" + error)
                    Swal.fire("Error al eliminar", Nombre, "error");
                }
            }
        });
    };
    return (
        <div className="container ">
            <h1 className="text-center mt-2">Administración de Servicios</h1>
            <form className="my-4" ref={form} onSubmit={handleFilterServices}>
                <input
                    className="form-control"
                    type="text"
                    name="servicio"
                    placeholder="Nombre Servicio"
                />
            </form>
            {servicios.length > 0 ? (
                <ServiciosList>
                    {servicios.map(({ id, Nombre, Descripcion, Imagen, createdAt, updatedAt }) => (
                        <ServiciosRow
                            key={id}
                            id={id}
                            Nombre={Nombre}
                            Descripcion={Descripcion}
                            Imagen={Imagen}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ServiciosList>
            ) : (
                <h4 className="text-center mt-5">Servicio no encontrado</h4>
            )}
            <div className="d-flex w-full gap-2 justify-content-center my-4">
                <button
                    className="btn btn-primary"
                >
                    Crear Servicio
                </button>

                <Link href="/admin">
                    <a className="btn btn-secondary">Volver</a>
                </Link>
            </div>
        </div>
    )
}

export default index