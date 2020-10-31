import React from "react";
import "./../styles/App.css";

function App() {
  const [data, setdata] = React.useState([]);
  function handleclick() {
    let val = document.getElementById("task").value;
    document.getElementById("task").value = "";
    if (val === "") return;
    let arr = [...data];
    let obj = { data: val, show: false };
    arr.push(obj);
    setdata(arr);
  }
  function handleedit(i) {
    let temp = [...data];
    temp[i].show = true;
    setdata(temp);
  }
  function handledelete(index) {
    let temp = [...data];
    delete temp[index];
    setdata(temp);
  }
  function handlesave(index) {
    let temp = [...data];
    if (document.getElementById("ed").value === "") return;
    temp[index].show = false;
    temp[index].data = document.getElementById("ed").value;
    setdata(temp);
  }
  return (
    <div id="main">
      <input id="task" type="text"></input>
      <button id="btn" onClick={handleclick}></button>
      <div className="todo">
        {data.map((ele, index) => (
          <div key={ele.data}>
            {ele.data}
            <button onClick={() => handleedit(index)}>edit</button>
            <button onClick={() => handledelete(index)}>delete</button>
            {ele.show === true ? (
              <>
                <input type="text" id="ed"></input>
                <button onClick={() => handlesave(index)}>save</button>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
