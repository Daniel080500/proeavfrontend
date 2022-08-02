import React from "react";

export const UserList = ({ children }) => {
    return (
        <table className="table table-hover w-75">
            <thead>
                <tr>
                    <th scope="col">Usuario</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Fecha Creación</th>
                    <th scope="col">Fecha Actualización</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};