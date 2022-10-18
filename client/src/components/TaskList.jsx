import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:5000/tasks");
    setTasks(response.data);
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    getTasks();
  };

  return (
    <div>
     <div className="container">
      <h2 className="text-center w-100">List of Tasks</h2>
      <Link to="/tasks/add" className="btn btn-info mx-2">
        Add New
      </Link>
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th>No</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.uuid}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>{task.status}</td>
              <td>
                <Link
                  to={`/tasks/edit/${task.uuid}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTask(task.uuid)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TaskList;