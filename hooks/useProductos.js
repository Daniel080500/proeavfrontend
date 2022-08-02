import axios from 'axios'
import { useCallback, useContext } from 'react'
import { useEffect, useState } from "react"
import { AppContext } from '../components/Context/AppContext'
import { UserContext } from '../components/Context/UserContext'

export const useProductos = () => {
    const [producto, setProducto] = useState("")
    const [productos, setProductos] = useState([])
    const { setLoading } = useContext(AppContext)
    const { jwt } = useContext(UserContext)
    const parseProductos = (listaProductos) => {
        const newProductos = listaProductos.map(({ id, attributes }) => ({
            id,
            Nombre: attributes.Nombre,
            Descripcion: attributes.Descripcion,
            Imagen: attributes.Imagen,
            Precio: attributes.Precio,
            Stock: attributes.Stock,
            createdAt: attributes.createdAt,
            updatedAt: attributes.updatedAt

        }))
        return newProductos

    }

    const handleGetProductos = useCallback(async (jwt) => {

        setLoading(true)

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            };
            if (producto.length > 0) {

                const { data } = await axios.get('http://localhost:1337/api/productos?filters[Nombre][$contains]=' + producto, config)
                setProductos(parseProductos(data.data))
            }
            else {
                console.log("antes de")
                const { data } = await axios.get('http://localhost:1337/api/productos/', config)
                setProductos(parseProductos(data.data))
            }
        } catch (error) {
            console.log(error)
            setProductos([])
        }



        setLoading(false)
    }, [setLoading, producto])
    useEffect(() => {

        handleGetProductos(jwt)
    }, [jwt, producto])
    return {
        productos, handleGetProductos, setProducto, setProductos
    }
}