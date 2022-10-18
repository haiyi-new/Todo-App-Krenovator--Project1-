import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import './assets/bootstrap/style.css.map'

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from "./components/pages/Dashboard";
import AddTask from "./components/pages/AddTask";
import EditTask from "./components/pages/EditTask";


function App() {

  return (
     <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tasks/add" element={<AddTask/>} />
        <Route path="/tasks/edit/:id" element={<EditTask/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
