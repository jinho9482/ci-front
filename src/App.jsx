import { useEffect, useState } from "react";
import { postInfo, getList } from "./api/api";
import "./App.css";

function App() {
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
    // 여기에서 await을 안 걸어서 insert 되기 전에 getList를 진행하면 새로 추가한 데이터를 가져오지 못할 수 있다.
    await postInfo({ name: getName, text: getText });
    const res = await getList();
    console.log(res);
    setList(res); // state 가 바뀌어야 re rendering 이 된다.
  };

  useEffect(() => {
    get();
    console.log(location.host);
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
