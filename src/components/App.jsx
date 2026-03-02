import React, {useState} from "react";

function App() {

  const [name , setName] = useState("");
  const [headingText, setHeading] = useState("");

function  handleChange(event){
  setName(event.target.value);
}
function handleOnClicked(event){
setHeading(name);

event.preventDefault();
}
  return (
    <div className="container">
      <form onSubmit={handleOnClicked}>
      <h1>Hello {headingText}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange} value={name} />
      <button type="submit">Submit</button>
       </form>
    </div>
  );
}

export default App;
