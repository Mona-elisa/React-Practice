import React, { useState } from "react";

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const errorStyle = {
  border: "1px solid red",
};

function ReactFormBasic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    country: "",
    gender: "",
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age, gender, acceptTerms } = formData;

    if (!name || !email || !age || !gender || !acceptTerms) {
      setMessage("❌ Please fill all fields");
    } else if (Number(age) <= 23 || isNaN(age)) {
      setMessage("❌ Age should be greater than 23");
    } else {
      setMessage("✅ Form submitted successfully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={formData.name ? inputStyle : { ...inputStyle, ...errorStyle }}
        />
        {!formData.name && <span style={{ color: "red" }}>Name is required</span>}
        <br />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={formData.email ? inputStyle : { ...inputStyle, ...errorStyle }}
        />
        {!formData.email && <span style={{ color: "red" }}>Email is required</span>}
        <br />

        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          style={
            Number(formData.age) > 23 && !isNaN(formData.age)
              ? inputStyle
              : { ...inputStyle, ...errorStyle }
          }
        />
        {(Number(formData.age) <= 23 || !formData.age || isNaN(formData.age)) && (
          <span style={{ color: "red" }}>Age should be greater than 23</span>
        )}
        <br />

        <label>Select Country</label>
        <select name="country" value={formData.country} onChange={handleInputChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <br />

        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
            checked={formData.gender === "male"}
            style={formData.gender === "male" ? inputStyle : { ...inputStyle, ...errorStyle }}
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
            checked={formData.gender === "female"}
            style={formData.gender === "female" ? inputStyle : { ...inputStyle, ...errorStyle }}
          /> Female
        </div>
        {!formData.gender && <span style={{ color: "red" }}>Gender is required</span>}
        <br />

        <label>Accept Terms and Conditions</label>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleInputChange}
          style={formData.acceptTerms ? inputStyle : { ...inputStyle, ...errorStyle }}
        />
        {!formData.acceptTerms && <span style={{ color: "red" }}>You must accept the terms</span>}
        <br />

        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ReactFormBasic;
