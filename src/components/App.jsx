import React from "react";

function App() {
  const [heading,setheading]=React.useState("Hello")
  function handleclick()
  {
    setheading("Submitted");
  }

  const [ismouseover,setmouseover]=React.useState(false);
  function handlemouseover()
  {
    setmouseover(true);
  }

  function handlemouseout()
  {
    setmouseover(false);
  }
  
  
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={handleclick} 
      onMouseOver={handlemouseover} 
      onMouseOut={handlemouseout}
      style={{backgroundColor: ismouseover ? "black" : "white"}}>Submit</button>
    </div>
  );
}

export default App;
