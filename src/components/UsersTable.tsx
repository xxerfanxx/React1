import UserRow from "./UserRow";
import UserTableHead from "./UserTableHead";

export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};

type Props = {
  users: User[];
  onDeleteUser: (id: number) => void;
  onEdit: (id: number) => void;
};

export default function UsersTable({ users, onDeleteUser, onEdit }: Props) {
  console.log('users in userTable' , users)
  return (
    <table className="border">
      <UserTableHead />
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} onDeleteUser={onDeleteUser} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}
