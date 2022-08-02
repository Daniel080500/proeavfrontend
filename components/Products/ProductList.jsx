import React from "react";

export const ProductList = ({ children }) => {
    return (
        <table className="table table-hover w-75">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Creación</th>
                    <th scope="col">Actualización</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};