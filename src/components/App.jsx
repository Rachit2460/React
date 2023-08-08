import React, { useState } from "react"; 
function App() {
let c=""
const[name,getName]=useState("")

function abc (event){
c =event.target.value
}
function oc(){
  getName(c)
}

  return (
    <div className="container">
      <h1>Hello,{name}</h1>
      <input onChange={abc} type="text" placeholder="What's your name?" />
      <button onClick={oc} >Submit</button>
    </div>
  );
}

export default App;
