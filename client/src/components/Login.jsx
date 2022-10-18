import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import {LoginUser, reset} from "../features/AuthSlice"

import image from '../assets/images/register/signin-image.jpg';
import image2 from '../assets/images/register/kreno-logo.jpg';

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);

  useEffect(() => {
    if(user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  },
  [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({email, password}));
  }

    return(
    <section style={{marginTop:80}} className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={image2} alt="login" />
                <img src={image} alt="login" />
              </figure>
              <Link
                to={'/'}
                className="signup-image-link">
                Create an account
              </Link>
            </div>

            <div className="signin-form">
             <h2 className="form-title">Login</h2>
              <form className="register-form" onSubmit={Auth}>
              {isError && <p className='has-text-centered'>{message}</p>}
                <div className="form-group">
                  <label>
                    <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="form-group">
                  <label ><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    className="form-submit"
                    value={isLoading ? 'Loading...' : 'Login'}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Login;