import { User } from "./UsersTable";

type Props = {
  user: User;
  onDeleteUser: (id: number) => void;
  onEdit: (id: number) => void;
};
export default function UserRow({ user, onDeleteUser, onEdit}: Props) {
  return (
    <tr>
      <td className="border p-2">{user.id}</td>
      <td className="border p-2">{user.name}</td>
      <td className="border p-2">{user.lastName}</td>
      <td className="border p-2">{user.email}</td>
      <td className="border p-2">
        <button
          className="border px-4 py-2 hover:bg-red-600 hover:text-white transition-all ease-in"
          onClick={() => onDeleteUser(user.id)}
        >
          delete
        </button>
      </td>
      <td className="border p-2">
      <button
          className="border px-4 py-2 hover:bg-blue-600 hover:text-white transition-all ease-in"
          onClick={() => onEdit(user.id)}
        >
          update
        </button>
      </td>
    </tr>
  );
}
