import { User } from "./UsersTable";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onEditForm: (event: React.FormEvent<HTMLFormElement>, id:number) => void;
  user?: User
};

export default function UserForm({ onSubmit, onEditForm, user }: Props) {
  return (
    <form onSubmit={!user? onSubmit :(e)=>{onEditForm(e,user?.id)}}>
      <div className="flex flex-col gap-3 p-2">
        <div>
          <label htmlFor="name">name: </label>
          <input
            className="block px-2 py-1 border"
            type="text"
            id={"name"}
            name="name"
            placeholder="name"
            defaultValue={user?.name}
          />
        </div>
        <div>
          <label htmlFor="lastName">lastName: </label>
          <input
            className="block px-2 py-1 border"
            type="text"
            id={"lastName"}
            name="lastName"
            placeholder="lastName"
            defaultValue={user?.lastName}
          />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            className="block px-2 py-1 border"
            type="text"
            id={"email"}
            name="email"
            placeholder="email"
            defaultValue={user?.email}
          />
        </div>
        <div>
          <button type="submit" className="px-4 py-2 border bg-blue-300">
            save
          </button>
        </div>
      </div>
    </form>
  );
}
