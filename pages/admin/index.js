import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../components/Context/UserContext';
import { faBoxOpen, faIdCard, faScrewdriverWrench, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const index = () => {
    const { logIn, isLogged } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (!isLogged) {
            router.push("/login");
        }
    }, [isLogged, router]);

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-12 col-sm-10 col-lg-8 col-xl-6 justify-content-center offset-sm-1 offset-lg-2 offset-xl-3 mt-3">
                    <div className="border-bottom border-5 border-dark d-flex justify-content-center">
                        <h3>Administración EAV</h3>
                    </div>
                </div>
                <div className="col-12 col-md-12 justify-content-center offset-md-2 mt-5">
                    <div className="row">
                        <div className="col-6 col-md-2 d-flex justify-content-center">
                            <Link href="/admin/usuarios" passhref >
                                <a type="button" className="btn btn-floating btn-green btn-lg " ><FontAwesomeIcon className="icon-admin" icon={faIdCard} /></a>
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 d-flex justify-content-center">
                            <Link href="/admin/productos" passhref >
                                <a type="button" className="btn btn-floating btn-green btn-lg" ><FontAwesomeIcon className="icon-admin" icon={faBoxOpen} /></a>
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 d-flex justify-content-center">
                            <Link href="/admin/servicios" passhref >
                                <a type="button" className="btn btn-floating btn-green btn-lg" ><FontAwesomeIcon className="icon-admin" icon={faScrewdriverWrench} /></a>
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 d-flex justify-content-center">
                            <Link href="/admin/contacto" passhref >
                                <a type="button" className="btn btn-floating btn-green btn-lg " ><FontAwesomeIcon className="icon-admin" icon={faClipboardList} /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default index;