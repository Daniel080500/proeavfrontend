import { Carousel } from "../components/Carousel"
import { useState } from 'react'

function nosotros() {
    const [images, setImages] = useState(["/Prueba.jpg", "/Prueba2.jpg", "/Prueba.jpg"])
    return (
        <>
            <Carousel images={images} />
            <div className="container-fluid text-center">


                <div className="row mt-5">
                    <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                        <div className="border-bottom border-5 border-dark d-flex justify-content-center">
                            <h3>Sobre nosotros</h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                        <p>
                            Somos una empresa familiar registrada en el año 1998, fuimos los primeros
                            en implementar la venta de vidrios, aluminios y brindar estos servicios
                            en cañas, originalmente fundada por el actual esposo de la dueña de la
                            empresa, Don Heinner Espinoza Murillo, quien es el actual gerente de
                            ventas y operaciones de la empresa.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                        <div className="border-bottom border-5 border-dark d-flex justify-content-center">
                            <h3>Misión</h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                        <p>
                            Nuestra misión es elevar continuamente el nivel de la satisfacción del
                            cliente mediante asesoramiento, para ayudar a los consumidores a encontrar,
                            descubrir y comprar lo requerido brindando calidad a un buen precio.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-5">
                        <div className="border-bottom border-5 border-dark d-flex justify-content-center">
                            <h3>Visión</h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                        <p>
                            Es ser la empresa más centrada en el cliente moderno y vanguardista;
                            que desee aprovechar el arte del cristal y los diferentes diseños que este posee;
                            siendo, número uno en calidad y elegancia.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default nosotros