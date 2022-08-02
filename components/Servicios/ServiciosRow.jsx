import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { useRouter } from "next/router";
import { TableIcon } from "../TableIcon";

export const ServiciosRow = ({
    id,
    Nombre,
    Descripcion,
    Imagen,
    createdAt,
    updatedAt,
    handleDelete
}) => {
    const router = useRouter();
    const handleRedirectToServiceForm = () => {
        router.push({
            pathname: "/admin/servicios/forms",
            query: {
                id,
                Nombre,
                Descripcion,
                Imagen,
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
                    onClick={handleRedirectToServiceForm}
                />
            </td>
        </tr>
    );
};