import { useEffect, useState } from "react";
import { postInfo, getList } from "./api/api";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("Text will be displayed.");
  const [list, setList] = useState();

  const get = async () => {
    const res = await getList();
    console.log(res);
    setList(res);
  };

  const post = async (e) => {
    // e.preventDefault();
    const getName = document.getElementById("name").value;
    const getText = document.getElementById("text").value;
    postInfo({ name: getName, text: getText });
    const res = await getList();
    console.log(res);
    setList(res);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="App">
      <form onSubmit={post}>
        <p>
          name : <input id="name"></input>
        </p>
        <p>
          text : <input id="text"></input>
        </p>
        <button type="submit" value={"submit"}>
          Submit
        </button>
      </form>
      <div>
        {list?.map((el, i) => (
          <div key={i}>
            <span>{el.name}: </span>
            <span>{el.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
