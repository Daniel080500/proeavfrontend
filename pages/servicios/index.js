import Link from "next/link"
import { useFetchServicios } from "../../hooks/useFetchServicios"


const Servicios = () => {

    const { servicios } = useFetchServicios()
    return (
        <div className="containter-fluid mb-3" >
            <div className="row ">
                <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                    <div className="border-bottom border-5 border-dark d-flex justify-content-center">
                        <h3>Nuestros servicios EAV</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 mt-5">
                        <div className="row">
                            {servicios.length > 0 && servicios.map(({ id, attributes }) => (
                                <div className="col-md-4 mt-2 " key={"servicios-" + id}>
                                    <div className="text-center border rounded-3 mx-1 " >
                                        <div className="card" style={{ width: '100%' }}>
                                            <img style={{ height: "400px" }} src={attributes.Imagen} className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{attributes.Nombre}</h5>
                                                <Link href={"/servicios/" + id} passhref>
                                                    <a className="btn btn-primary">Más información</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servicios