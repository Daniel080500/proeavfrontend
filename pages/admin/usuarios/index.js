import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import Swal from 'sweetalert2'
import { AppContext } from '../../../components/Context/AppContext'
import { UserContext } from '../../../components/Context/UserContext'
import { UserList } from '../../../components/Users/UserList'
import { UserRow } from '../../../components/Users/UserRow'
import { useFetchUsers } from '../../../hooks/useFetchUsers'


function index() {
    const { users, setUser, setUsers } = useFetchUsers()
    const form = useRef(null)
    const { jwt } = useContext(UserContext)
    const { setLoading } = useContext(AppContext)
    const handleFilterUser = (e) => {
        e.preventDefault()
        setUser(form.current["usuario"].value)
    }
    const handleDelete = (id, username) => {
        Swal.fire({
            title: "¿Deseas eliminar a " + username + "?",
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
                    axios.delete("http://localhost:1337/api/users/" + id, config)

                    setLoading(false)
                    Swal.fire("Eliminado", username, "success");
                    setUsers(users.filter((user) => id != user.id));
                } catch (error) {
                    console.log("error" + error)
                    Swal.fire("Error al eliminar", username, "error");
                }
            }
        });
    };
    return (
        <div className="container ">
            <h1 className="text-center mt-2">Administración de Usuarios</h1>
            <form className="my-4" ref={form} onSubmit={handleFilterUser}>
                <input
                    className="form-control"
                    type="text"
                    name="usuario"
                    placeholder="Usuario"
                />
            </form>
            {users.length > 0 ? (
                <UserList>
                    {users.map(({ id, username, email, createdAt, updatedAt }) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                            handleDelete={handleDelete}
                        />
                    ))}
                </UserList>
            ) : (
                <h4 className="text-center mt-5">Usuario no encontrado</h4>
            )}
            <div className="d-flex w-full gap-2 justify-content-center my-4">
                <button
                    className="btn btn-primary"
                >
                    Crear Usuario
                </button>

                <Link href="/admin">
                    <a className="btn btn-secondary">Volver</a>
                </Link>
            </div>
        </div>
    )
}

export default index