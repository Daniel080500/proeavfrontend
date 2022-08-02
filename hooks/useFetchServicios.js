import { useContext } from 'react'
import { useEffect, useState } from "react"
import { AppContext } from '../components/Context/AppContext'

export const useFetchServicios = (idReceived) => {
    const [id, setId] = useState(idReceived)
    const [servicios, setServicios] = useState([])
    const { setLoading } = useContext(AppContext)

    async function getServicios() {
        setLoading(true)
        if (id != undefined) {
            console.log("id" + id)
            const response = await fetch('http://localhost:1337/api/servicios/' + id)
            const newServicios = await response.json()
            setServicios(newServicios.data)
        }
        else {
            const response = await fetch('http://localhost:1337/api/servicios')
            const newServicios = await response.json()
            setServicios(newServicios.data)
        }

        setLoading(false)
    }
    useEffect(() => {
        getServicios()
    }, [])
    return {
        servicios, getServicios
    }
}
