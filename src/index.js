import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropSection from './PropsSection';
import HookSection from './HookSection';
import FormSection from './FormSection';

 import AllProject from './AllProject';

 const customStyle = {
  color: "white",
  backgroundColor: "black",
  fontFamily: "Arial",
  fontSize: "30px",
  padding: "20px",
  borderRadius: "5px",
  border: "2px solid red"
 };
 customStyle.fontFamily = "Times New Roman";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div style={customStyle}>
      <AllProject />
      <HookSection />
  <PropSection
      name="fatima"
      email="fatimaamj123@gmail.com"
      phone="0300-1234567"
      address="lahore"
      age="23"
      />
      <FormSection />
     </div>
  </React.StrictMode>
);


reportWebVitals();
