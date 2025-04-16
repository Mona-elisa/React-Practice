import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
function FormSection(){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
 async function onSubmit(data) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a network request
    console.log("Submitting form",data);
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        
      <input 
      className={errors.FirstName ? "input-error" : ""}
      placeholder="Enter your first name"
      {...register("FirstName", 
        { required: true,
          minLength: { value: 3, message: "Name must be at least 3 characters" },
          maxLength: { value: 20, message: "Name must be at most 20 characters" },
         })}  />
          {errors.FirstName && <p className="error-msg">{errors.FirstName.message}</p>}
</div>
<br/>
<div>
  <label >Email</label>
  <input type="email" 
  className={errors.Email ? "input-error" : ""}
  {...register("Email", {
    required: true,
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address",
    },
  })} />
  {errors.Email && <p className="error-msg">{errors.Email.message}</p>}
</div>
<br/>
<div>
  <label >Password</label>
  <input type="password"
  className={errors.Password ? "input-error" : ""}
  {...register("Password", {
    required: true,
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be at most 20 characters",
      },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "Password must contain at least one letter and one number",
      },
      })} />
      {errors.Password && <p className="error-msg">{errors.Password.message}</p>}
</div>
<br/>
<div>
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
</div>
    </form>
  )
}
export default FormSection;