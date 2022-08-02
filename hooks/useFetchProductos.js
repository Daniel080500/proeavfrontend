import { useContext } from 'react'
import { useEffect, useState } from "react"
import { AppContext } from '../components/Context/AppContext'

export const useFetchProductos = (idReceived) => {
    const [id, setId] = useState(idReceived)
    const [productos, setProductos] = useState([])
    const { setLoading } = useContext(AppContext)

    async function getProductos() {
        setLoading(true)
        
        if (id != undefined) {
            const response = await fetch('http://localhost:1337/api/productos/' + id)
            const newProductos = await response.json()
            setProductos(newProductos.data)
        }
        else {
            const response = await fetch('http://localhost:1337/api/productos')
            const newProductos = await response.json()
            setProductos(newProductos.data)
        }
        setLoading(false)
    }
    useEffect(() => {
        getProductos()
    }, [])
    return {
        productos, getProductos
    }
}