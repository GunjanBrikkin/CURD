import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <ButtonContent visible>Next</ButtonContent>
      <ButtonContent hidden>
        <Icon name="arrow right" />
      </ButtonContent>
    </Button>
  </div>
);

const TimerComponent = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState([]);
  const [changeId, setchangeId] = useState("");
  const [edittext, setEditText] = useState("");

  const adding = () => {
    if (!value) {
      alert("Do not put empty task please!!");
      return;
    }
    const newTask = { id: uuidv4(), text: value };

    setShow([...show, newTask]);
    setValue("");

    console.log("show", show);
  };

  const deletethis = (id) => {
    setShow(show.filter((i) => i.id !== id));
  };

  const updateThis = (id, text) => {
    setchangeId(id);
    setEditText(text);
    console.log("this is intial pahse value", changeId);
  };

  const handleSave = (id) => {
    setShow(
      show.map((item) => (item.id === id ? { ...item, text: edittext } : item))
    );
    setchangeId(null);
  };

  return (
    <div>
      <p>To do list : CURD in React </p>
      <p>Create a task :</p>
      <div className="ui input">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <button
        onClick={adding}
        className="ui button green"
        style={{ marginLeft: "15px" }}
      >
        Add
      </button>

      <ul>
        {show.map((item, index) => (
          <li key={index}>
            {changeId === item.id ? (
              <>
                <div className="ui input">
                  <input
                    value={edittext}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => handleSave(item.id)}
                  className="ui button olive"
                >
                  Save
                </button>
                <button
                  className="ui button red"
                  onClick={() => setchangeId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {item.text}
                <button
                  className="ui button blue"
                  onClick={() => updateThis(item.id, item.text)}
                  style={{ marginLeft: "15px", marginBottom: "12px" }}
                >
                  Update
                </button>
                <button
                  onClick={() => deletethis(item.id)}
                  className="ui button red"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimerComponent;
