import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TimerComponent = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState([]);

  const adding = () => {
    const newTask = { id: uuidv4(), text: value };
    setShow([...show, newTask]);
    console.log("show", show);
  };

  show.map((item, index) => {
    {
      console.log("item", item);
    }
  });

  const deletethis = (id) => {
    setShow(show.filter((i) => i.id !== id));
  };

  return (
    <div>
      <p>To do list </p>
      <p>Create a task :</p>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={adding}>Add</button>

      <ul>
        {show.map((item, index) => (
          <li key={index}>
            {item.text}
            <button onClick={() => deletethis(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimerComponent;
