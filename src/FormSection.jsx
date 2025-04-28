import React from "react";
import { useForm } from "react-hook-form";
function FormSection() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log("form submitted",data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>React hook form basic</h1>
        <div>
        <label>Name</label>
        <input type="text" {...register("name",
          { required: "name is required" })} />
        {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
        </div>
        <div>
        <label>email</label>
        <input type="email" {...register("email",
          { required: "email is required" })} />
        {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </div>
      </form>
  )
}
export default FormSection;
