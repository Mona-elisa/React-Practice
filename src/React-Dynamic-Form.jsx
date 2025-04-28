import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  
}
const errorStyle = {
  border: "1px solid red",
};
const schema = Yup.object().shape({
  emails: Yup.array().of(
    Yup.string()
    .email("invalid email")
    .required("email required")
    
  )

})
function ReactDynamicForm(){
const [emails, setEmails] = useState([""]);
const {register, handleSubmit, formState: {errors}}= useForm({
  resolver: yupResolver(schema)
})

const handleAddEmail = () => {
  setEmails([...emails, ""]);
};
const handleRemoveEmail = (index) => {
  const updatedEmails = emails.filter((_, idx) => idx !== index);
  setEmails(updatedEmails);
}
const onSubmit = (data) => {
  console.log("form submitted", data);
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>  
      <h1>Dynamic Form</h1>
      {emails.map((email, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter your email"
            {...register(`emails[${index}]`)}
            style={ errors.emails?.[index] ? errorStyle : inputStyle}
          />
          { errors.emails?.[index] && (
            <p style={{ color: "red" }}>{errors.emails[index]?.message}</p>
          )}
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
  
  


