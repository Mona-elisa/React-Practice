import React , {useEffect} from "react";
var number = 10;
 const fname = "fatima";
 const lname = "khan";
 
function FirstProject(){
  
  return (
    <div>
    {/*why we not use class to access classes of element 
    (Invalid DOM property `class`. Did you mean `className`?)*/}
  <h1 className="heading" contentEditable="true">My First React App</h1>
    <p>This is a simple React application.</p>
 
  <ul>
    <li  tabIndex="1">HCI</li>
    <li tabIndex="3">SC</li>
    <li tabIndex="2">FORMAL</li>
  </ul>
  <p>My number is: {number}</p>
  <p>My number is: {3 + 4}</p>
  <p>My number is: {Math.random()}</p>
  <p>My number is: {Math.floor(Math.random() * 10)}</p>
  {/* template literals */}
  <p>My name is {`${fname} ${lname}`}</p>
  {/* accesskey is shortcut like for link g is shortcut,
  for every browser shortcut key press method different
   like for edge alt+accesskey(g) */}
  
  <a href="https://www.google.com" accessKey='g' title='google website'>Google</a>

</div>
  )
}
export default FirstProject;