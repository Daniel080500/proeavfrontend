import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import { AppContext } from '../../../components/Context/AppContext'
import { UserContext } from '../../../components/Context/UserContext'
import { ProductList } from '../../../components/Products/ProductList'
import { ProductRow } from '../../../components/Products/ProductRow'
import { useProductos } from '../../../hooks/useProductos'

function index() {
    const { productos, setProducto, setProductos } = useProductos()
    const form = useRef(null)
    const { jwt } = useContext(UserContext)
    const { setLoading } = useContext(AppContext)
    const handleFilterProducts = (e) => {
        e.preventDefault()
        setProducto(form.current["producto"].value)
    }
    const handleDelete = (id, Nombre) => {
        Swal.fire({
            title: "¿Deseas eliminar el producto: " + Nombre + "?",
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
                    axios.delete('http://localhost:1337/api/productos/' + id, config)

                    setLoading(false)
                    Swal.fire("Eliminado", Nombre, "success");
                    setProductos(productos.filter((producto) => id != producto.id));
                } catch (error) {
                    console.log("error" + error)
                    Swal.fire("Error al eliminar", Nombre, "error");
                }
            }
        });
    };
    return (
        <div className="container ">
            <h1 className="text-center mt-2">Administración de Productos</h1>
            <form className="my-4" ref={form} onSubmit={handleFilterProducts}>
                <input
                    className="form-control"
                    type="text"
                    name="producto"
                    placeholder="Nombre Producto"
                />
            </form>
            {productos.length > 0 ? (
                <ProductList>
                    {productos.map(({ id, Nombre, Descripcion, Imagen, Precio, Stock, createdAt, updatedAt }) => (
                        <ProductRow
                            key={id}
                            id={id}
                            Nombre={Nombre}
                            Descripcion={Descripcion}
                            Imagen={Imagen}
                            Precio={Precio}
                            Stock={Stock}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ProductList>
            ) : (
                <h4 className="text-center mt-5">Producto no encontrado</h4>
            )}
            <div className="d-flex w-full gap-2 justify-content-center my-4">
                <button
                    className="btn btn-primary"
                >
                    Crear Producto
                </button>

                <Link href="/admin">
                    <a className="btn btn-secondary">Volver</a>
                </Link>
            </div>
        </div>
    )
}

export default index