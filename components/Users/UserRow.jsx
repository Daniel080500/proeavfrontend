import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { useRouter } from "next/router";
import { TableIcon } from "../TableIcon";

export const UserRow = ({
    id,
    username,
    email,
    createdAt,
    updatedAt,
    handleDelete
}) => {
    const router = useRouter();
    const handleRedirectToUserForm = () => {
        router.push({
            pathname: "/admin/usuarios/forms",
            query: {
                id,
                username,
                email,
                createdAt,
                updatedAt
            },
        });
    };
    return (
        <tr>
            <th>
                {username}
            </th>
            <td>
                {email}
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
                    onClick={() => handleDelete(id, username)}
                />
                <TableIcon
                    icon={faPen}
                    title="Actualizar"
                    onClick={handleRedirectToUserForm}
                />
            </td>
        </tr>
    );
};