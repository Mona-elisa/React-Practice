import React,{useEffect,useState} from "react";


function HookSection(){
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Fatima Khan");
  useEffect(() => {
    alert("Component is mounted");
  },[count]);
  return(
    <div>
      <h1>Hook Section</h1>
      <p>Current count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
     
      <p>Current name : {name}</p>
      <button onClick={() => setName("Fatima Waqar")}>Heading</button>
    </div>

  )
}
export default HookSection;