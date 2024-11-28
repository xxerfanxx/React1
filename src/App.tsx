import { useState } from "react";
import UsersTable, { User } from "./components/UsersTable";
import UserForm from "./components/UserForm";

function App() {
  const [selectedUserInEditMode, setSelectedUserInEditMode] = useState<number | null>(null)
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
    { id: 2, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
    { id: 5, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
    { id: 3, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
  ]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser = Object.fromEntries(formData.entries()) as unknown as User;
    const max = Math.max(...users.map((user) => user.id));
    setUsers([...users, { ...newUser, id: max + 1 }]);
    event.currentTarget.reset();
  };
  const handleSelectedUserInEditMode = (id: number) => {
    const selectedUserIndex = users.findIndex((value)=>value.id == id)
    setSelectedUserInEditMode(selectedUserIndex)
  }
  const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>, id: number) => {
    event.preventDefault();
    const selectedUserIndex = users.findIndex((value)=>value.id == id)
    const backupUsers = users
    const formData = new FormData(event.currentTarget);
    const newUser = Object.fromEntries(formData.entries()) as unknown as User;
    backupUsers[selectedUserIndex].name = newUser.name
    backupUsers[selectedUserIndex].email = newUser.email
    backupUsers[selectedUserIndex].lastName = newUser.lastName
    setUsers([...backupUsers]);
    event.currentTarget.reset();
    setSelectedUserInEditMode(null)
  }
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div className="container mx-auto p-2">
      <div className="flex items-start gap-3">
        <UsersTable users={users} onDeleteUser={handleDeleteUser} onEdit={handleSelectedUserInEditMode}/>
        <UserForm onSubmit={handleSubmit} onEditForm={handleUpdateUser} user={selectedUserInEditMode?users[selectedUserInEditMode]: selectedUserInEditMode == 0? users[selectedUserInEditMode] : undefined} />
      </div>
    </div>
  );
}

export default App;
