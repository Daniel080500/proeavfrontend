import axios from 'axios'
import { useCallback, useContext } from 'react'
import { useEffect, useState } from "react"
import { AppContext } from '../components/Context/AppContext'
import { UserContext } from '../components/Context/UserContext'

export const useServicios = () => {
    const [servicio, setServicio] = useState("")
    const [servicios, setServicios] = useState([])
    const { setLoading } = useContext(AppContext)
    const { jwt } = useContext(UserContext)
    const parseServicios = (listaServicios) => {
        const newServicios = listaServicios.map(({ id, attributes }) => ({
            id,
            Nombre: attributes.Nombre,
            Descripcion: attributes.Descripcion,
            Imagen: attributes.Imagen,
            createdAt: attributes.createdAt,
            updatedAt: attributes.updatedAt

        }))
        return newServicios

    }

    const handleGetServicios = useCallback(async (jwt) => {

        setLoading(true)

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            };
            if (servicio.length > 0) {

                const { data } = await axios.get('http://localhost:1337/api/servicios?filters[Nombre][$contains]=' + servicio, config)
                setServicios(parseServicios(data.data))
            }
            else {
                console.log("antes de")
                const { data } = await axios.get('http://localhost:1337/api/servicios/', config)
                setServicios(parseServicios(data.data))
            }
        } catch (error) {
            console.log(error)
            setServicios([])
        }



        setLoading(false)
    }, [setLoading, servicio])
    useEffect(() => {

        handleGetServicios(jwt)
    }, [jwt, servicio])
    return {
        servicios, handleGetServicios, setServicio, setServicios
    }
}