import React, {useEffect} from "react";
import Layout from "../pages/Layout";
import Welcome from "../Welcome";
import Tasklist from "../TaskList"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/AuthSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError} = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <Welcome/>
        <Tasklist/>
    </Layout>
  );
};

export default Dashboard;