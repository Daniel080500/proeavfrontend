import axios from 'axios';
import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../components/Context/AppContext';
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { UserContext } from '../components/Context/UserContext';

function Login() {
    const { logIn, isLogged } = useContext(UserContext);
    const { setLoading } = useContext(AppContext)
    const form = useRef(null)
    const router = useRouter();
    useEffect(() => {
        if (isLogged) {
            router.push("/admin");
        }
    }, [isLogged, router]);


    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: form.current["email"].value,
                password: form.current["password"].value,
            });
            logIn(data.jwt);
            router.push("/admin");

        } catch (error) {
            Swal.fire({
                title: "Error!!",
                text: "Email o contraseña incorrectos",
                icon: "error",
            });
        }
        setLoading(false)
    }
    return (
        <div>
            <div className='container'>
                <div className="tab-content">
                    <div className="tab-pane fade show active row" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form className='col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4 mt-3 d-flex flex-column border py-4 px-4 mb-4' onSubmit={handleLogin} ref={form}>
                            <div className="form-outline mb-4">
                                <input type="email" id="loginName" name="email" className="form-control" placeholder='Ingrese su correo electronico' />
                                <label className="form-label" htmlFor="loginName"></label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="loginPassword" name="password" className="form-control" placeholder='Ingrese su contraseña' />
                                <label className="form-label" htmlFor="loginPassword"></label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login