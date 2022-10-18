import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

import image from '../assets/images/register/signup-image.jpg';
import image2 from '../assets/images/register/kreno-logo.jpg';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();


  const saveUser = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/users', {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
      });
      navigate("/login");
      } catch (error) {
          if(error.response) {
              setMsg(error.response.data.msg);
          }
      }
  };

  return (
    <section style={{ marginTop: 80}} className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Register</h2>
             <form className="register-form" id="register-form" onSubmit={saveUser}>
             <p className="has-text-centered">{msg}</p>
              <div className="form-group">
                <label>
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label><i className="zmdi zmdi-lock"></i></label>
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label><i className="zmdi zmdi-lock"></i></label>
                <input type="password" className="input" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
             <img src={image2} alt='register'/>
              <img src={image} alt='register'/>
            </figure>
            <Link
            to={'/login'}
              className="signup-image-link">
              I am already register
              </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register