import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../assets/images/register/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {LogOut, reset} from "../features/AuthSlice";

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch (reset());
    navigate("/login");
  }

  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-light p-1">
          <div className="container-fluid">
            <a className="navbar-brand" href="!#"><img src={logo} alt="logo" width="150" height="100"/></a>
              <form className="form-inline">   
                <button className="btn btn-outline-info" type="submit" onClick={logout}>Logout</button>
              </form>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;