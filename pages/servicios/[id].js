import { useRouter } from "next/router"
import { useFetchServicios } from "../../hooks/useFetchServicios"

export default function InformacionServicio() {
    const router = useRouter()
    const { id } = router.query
    const { servicios } = useFetchServicios(id)
    return (
        <div className="containter-fluid mb-3" >
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 mt-5">
                    <div className="row">
                        {servicios.attributes != undefined &&
                            <div className="col-md-4 mt-2 ">
                                <div className="text-center border rounded-3 mx-1 " >
                                    <div className="card" style={{ width: '100%' }}>
                                        <img style={{ height: "400px" }} src={servicios.attributes.Imagen} className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{servicios.attributes.Nombre}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
