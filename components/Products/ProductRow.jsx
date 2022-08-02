import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { useRouter } from "next/router";
import { TableIcon } from "../TableIcon";

export const ProductRow = ({
    id,
    Nombre,
    Descripcion,
    Imagen,
    Precio,
    Stock,
    createdAt,
    updatedAt,
    handleDelete
}) => {
    const router = useRouter();
    const handleRedirectToProductForm = () => {
        router.push({
            pathname: "/admin/productos/forms",
            query: {
                id,
                Nombre,
                Descripcion,
                Imagen,
                Precio,
                Stock,
                createdAt,
                updatedAt
            },
        });
    };
    return (
        <tr>
            <th>
                {Nombre}
            </th>
            <td>
                {Precio}
            </td>
            <td>
                {Stock}
            </td>
            <td>
                {moment(createdAt).format('DD/MM/YYYY')}
            </td>
            <td>
                {moment(updatedAt).format('DD/MM/YYYY')}
            </td>
            <td className="d-flex gap-3">
                <TableIcon
                    icon={faTrash}
                    title="Eliminar"
                    onClick={() => handleDelete(id, Nombre)}
                />
                <TableIcon
                    icon={faPen}
                    title="Actualizar"
                    onClick={handleRedirectToProductForm}
                />
            </td>
        </tr>
    );
};