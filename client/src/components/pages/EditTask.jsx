import React,{useEffect} from 'react';
import Layout from './Layout';
import FormEditTask from '../FormEditTask';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { getMe } from "../../features/AuthSlice";
import Welcome from '../Welcome';

const EditTask = () => {
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
        <FormEditTask/>
    </Layout>
  );
};

export default EditTask;