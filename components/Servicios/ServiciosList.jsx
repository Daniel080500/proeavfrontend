import React from "react";

export const ServiciosList = ({ children }) => {
    return (
        <table className="table table-hover w-75">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Creación</th>
                    <th scope="col">Actualización</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};