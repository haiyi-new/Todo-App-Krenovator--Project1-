import Task from "../models/TaskModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getTasks = async (req, res) => {
    try {
        const response = await Task.findAll({
                attributes:['uuid','name','description', 'date', 'status'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        res.status(200).json(response);    
        }
    catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            where:{
                uuid: req.params.id
            }
        });
        const response = await Task.findOne({
            attributes:['uuid','name','description', 'date', 'status'],
            where:{
                    [Op.and]:[{id: task.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
            res.status(200).json(response);    
        }
    catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createTask = async (req, res) => {
    const {name, description, date, status} = req.body;
    try {
        await Task.create({
            name: name,
            description: description,
            date: date,
            status: status,
            userId: req.userId
        });
        res.status(201).json({msg: "Task Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!task) return res.status(404).json({msg: "Please Choose Task"});
        const {name, description, date, status} = req.body;
        await Task.update({name, description, date, status},{
                where:{
                    [Op.and]:[{id: task.id}, {userId: req.userId}]
                }
            });
            res.status(200).json({msg: "Task Updated Successfuly"});
        }       
    catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!task) return res.status(404).json({msg: "Please Choose Task"});
        const {name, description, date, status} = req.body;
        await Task.destroy({
            where:{
                [Op.and]:[{id: task.id}, {userId: req.userId}]
            }
        });
        res.status(200).json({msg: "Task deleted successfuly"});
    }

    catch (error) {
    res.status(500).json({msg: error.message});
    }
}
    

