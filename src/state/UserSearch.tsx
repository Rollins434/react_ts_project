import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Barah", age: 20 },
  { name: "Terah", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  function handleClick() {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    console.log(foundUser);
    setUser(foundUser);
  }
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Find User</button>
      {user && JSON.stringify(user)}
    </div>
  );
};

export default UserSearch;
