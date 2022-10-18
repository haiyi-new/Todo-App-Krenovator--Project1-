import React, {useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const FormAddTask = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
   

    const saveTask = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/tasks', {
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
            <h2 className="title mx-5 mt-5 text-center">Add New Task</h2>
            <div className="form-group">
                <Link to={'/dashboard'} className="btn btn-warning text-center w-25 " >
                Cancel
                </Link>
            </div>
            <form onSubmit={saveTask}>
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
                    <select className="select w-100 form-control" placeholder="" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">--Choose Status--</option>
                        <option value="Plan">Plan</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                  </div>            
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-info text-center w-100 ">Save</button>
                </div>
                <div className="form-group">
                </div>
            </form>

         </div>   

      );
    };
    
    export default FormAddTask;

