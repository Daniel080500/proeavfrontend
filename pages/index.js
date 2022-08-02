import { useState } from "react"
import { Carousel } from "../components/Carousel"


const index = () => {
  const [images, setImages] = useState(["/Prueba.jpg", "/Prueba2.jpg", "/Prueba.jpg"])
  return (
    <>
      <Carousel images={images} />
      <div className="container-fluid text-center">



        <div className="row mt-5">
          <div className="">
            <h1>Descripcion sobre lo que se hace</h1>
            <p>Texto ejemplo</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="">
            <h1>Nuestro Catalogo de productos</h1>
            <p>Texto ejemplo</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="">
            <h1>Mostrar algunos servicios en un carrucel talvez.</h1>
              <p>Texto ejemplo</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default index