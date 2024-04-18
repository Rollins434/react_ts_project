import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);

  function handleClick() {
    setList([...list, name]);
    setName("");
  }
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}  onKeyPress={handleKeyPress}/>
        <button onClick={handleClick}>Add Guest</button>
        <h3>Guest List</h3>
        <ul>{list && list.map((data) => <li>{data}</li>)}</ul>
      </div>
    </>
  );
};

export default GuestList;
