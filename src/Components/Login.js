import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import validate from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./toastify";
import { Link } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
   
    email: "",
    password: ""
   
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data,"Login"));
  }, [data, touch]);
  const changeHandler = (event) => {
    
      setData({ ...data, [event.target.name]: event.target.value });
    
  };

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You Login in successfully", "success");
      console.log(data);
    } else {
      notify("Invalid data!", "error");
      setTouch({
        
        email: true,
        password: true,
        
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Login</h2>
        
   
        <div className={styles.formField}>
          <label>Email</label>
          <input
           className={(errors.email && touch.email ) ? styles.uncompleted:styles.formInput}
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
           className={(errors.password && touch.password ) ? styles.uncompleted:styles.formInput}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
       
        
        
         
        <div className={styles.formButtons}>
          <Link to="/SignUp">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
