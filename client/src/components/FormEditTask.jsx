import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams } from 'react-router-dom';

const FormEditTask = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getTaskById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/tasks/${id}`);
                setName(response.data.name);
                setDescription(response.data.description);
                setDate(response.data.date);
                setStatus(response.data.status);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        getTaskById();
    },[id]);

    const updateTask = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/tasks/${id}`, {
                name: name,
                description: description,
                date : date,
                status: status
        });
        navigate("/dashboard");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div className="container">      
            <h2 className="title mx-5 mt-5 text-center">Update Task</h2>
            <div className="form-group">
                <Link to={'/dashboard'} className="btn btn-warning text-center w-25 " >
                Cancel
                </Link>
            </div>
            <form onSubmit={updateTask}>
                    <p className="has-text-centered">{msg}</p>
                <div className="form-group">
                    <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />            
                </div>
                <div className="form-group">
                    <input type="text" className="input" placeholder="Description" 
                    value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="date" className="input"
                    value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="form-group">        
                  <div className="select">
                    <select className="select w-100 form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value=""></option>
                        <option value="Plan">Plan</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                  </div>            
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-info text-center w-100 ">Update</button>
                </div>
                <div className="form-group">
                </div>
            </form>
         </div>   
  );
};

export default FormEditTask;