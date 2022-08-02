import axios from 'axios'
import { useCallback, useContext } from 'react'
import { useEffect, useState } from "react"
import { AppContext } from '../components/Context/AppContext'
import { UserContext } from '../components/Context/UserContext'

export const useFetchUsers = () => {
    const [user, setUser] = useState("")
    const [users, setUsers] = useState([])
    const { setLoading } = useContext(AppContext)
    const { jwt } = useContext(UserContext)

    const handleGetUsers = useCallback(async (jwt) => {

        setLoading(true)

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            };
            if (user.length > 0) {

                const { data } = await axios.get('http://localhost:1337/api/users?filters[username][$contains]=' + user, config)
                setUsers(data)
            }
            else {
                const { data } = await axios.get('http://localhost:1337/api/users/', config)
                setUsers(data)
            }
        } catch (error) {
            setUsers([])
        }

        setLoading(false)
    }, [setLoading, user])
    useEffect(() => {

        handleGetUsers(jwt)
    }, [jwt, user])
    return {
        users, handleGetUsers, setUser, setUsers
    }
}