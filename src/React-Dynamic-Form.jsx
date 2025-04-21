import React, { useState } from "react";
const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  
}
const errorStyle = {
  border: "1px solid red",
};
function ReactDynamicForm(){
const [emails, setEmails] = useState([{ value: "" }]);
const handleInputChange = (e, index) => {
  const updatedEmails = [...emails];
  updatedEmails[index].value = e.target.value;
  setEmails(updatedEmails);
}
const handleAddEmail = () => {
  setEmails([...emails, { value: "" }]);
};
const handleRemoveEmail = (index) => {
  const updatedEmails = emails.filter((_, idx) => idx !== index);
  setEmails(updatedEmails);
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted with emails:", emails.map(email => email.value));
  // Add your form submission logic here
}
return (
<form onSubmit={handleSubmit}>  
  <h1>Dynamic Form</h1>
  {emails.map((email, index) => (
    <div key={index}>
      <input
        type="text"
        placeholder="Enter your email"
        value={email.value}
        onChange={(e) => handleInputChange(e, index)}
        style={email.value ? inputStyle : { ...inputStyle, ...errorStyle }}
      />
      {!email.value && <span style={{ color: "red" }}>Email is required</span>}
    { index > 0 && <button type="button" onClick={() => handleRemoveEmail(index)}>Remove email {index + 1}</button> }
     
    </div>
  ))}
  <button type="button" onClick={handleAddEmail}>
    Add Email</button>
  <br />
  <button type="submit">Submit</button>
  </form>
  );
  
}
  export default ReactDynamicForm;
  
  


