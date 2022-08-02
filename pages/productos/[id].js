import { useRouter } from "next/router"
import { useFetchProductos } from "../../hooks/useFetchProductos"

export default function InformacionProducto() {
    const router = useRouter()
    const { id } = router.query
    const { productos } = useFetchProductos(id)
    return (
        <div className="containter-fluid mb-3" >
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 mt-5">
                    <div className="row">
                        {productos.attributes != undefined &&
                            <>
                                <div className="col-md-4 mt-2 ml-2">
                                    <div className="text-center border rounded-3 mx-1 " >
                                        <div className="card" style={{ width: '100%' }}>
                                            <img style={{ height: "400px" }} src={productos.attributes.Imagen} className="card-img-top" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-2 justify-content-center">
                                    <div className="card-body">
                                        <h1 className="card-title">{productos.attributes.Nombre}</h1>
                                        <p className="card-text">{productos.attributes.Descripcion}</p>
                                    </div>

                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
