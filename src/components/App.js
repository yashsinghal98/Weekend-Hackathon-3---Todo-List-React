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
      <button id="btn" onClick={handleclick}>
        Add
      </button>
      {data.map((ele, index) => (
        <div className="list">
          {ele.data}
          <button onClick={() => handleedit(index)} className="edit">
            edit
          </button>
          <button onClick={() => handledelete(index)} className="delete">
            delete
          </button>
          {ele.show === true ? (
            <>
              <input type="text" id="ed" className="editTask"></input>
              <button onClick={() => handlesave(index)} className="saveTask">
                save
              </button>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default App;
