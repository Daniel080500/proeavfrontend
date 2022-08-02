import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export const Footer = () => {
    return (
        <>

            <footer className="text-white text-center text-lg-start bg-light footer-light mt-auto">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 ">
                            <div className="mt-5 offset-2">
                                <a type="button" className="btn btn-floating btn-blue btn-lg" ><FontAwesomeIcon className="footer-icon-facebook" icon={faFacebook} /></a>
                                <a type="button" className="btn btn-floating btn-green btn-lg" ><FontAwesomeIcon className="footer-icon-whatsapp" icon={faWhatsapp} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <ul className="fa-ul mt-4 ml-2">
                                <li className="mb-3" style={{ color: 'Black' }}>
                                    <span className="fa-li" ><FontAwesomeIcon className="footer-icon " icon={faHouseUser} /></span><span className="ms-2">Cañas, Guanacaste, Costa Rica</span>
                                </li>
                                <li className="mb-3" style={{ color: 'Black' }}>
                                    <span className="fa-li" ><FontAwesomeIcon className="footer-icon" icon={faEnvelope} /></span><span className="ms-2">EAV@example.com</span>
                                </li>
                                <li className="mb-3" style={{ color: 'Black' }}>
                                    <span className="fa-li" ><FontAwesomeIcon className="footer-icon" icon={faPhone} /></span><span className="ms-2">+506 2669 0000</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 mt-2" >
                            <h5 className="mb-4" style={{ color: 'Black' }} ><FontAwesomeIcon className="footer-icon mr-3 " icon={faClock} /> Horario Atención</h5>
                            <table className="table text-center text-black">
                                <tbody className="fw-normal">
                                    <tr >
                                        <td ></td>
                                        <td ></td>
                                    </tr>
                                    <tr>
                                        <td>Lun - Vier:</td>
                                        <td>7am - 7pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sab - Dom:</td>
                                        <td>7am - 4pm</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link href="/login" passhref>
                                                Administrar
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className='' style={{ color: 'Black' }}>© 2022 Copyright: EAV</div>

                </div>
            </footer>
        </>
    )
}
