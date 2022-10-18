import User from "../models/UserModel.js";
import argon2 from "argon2";

//export const getUsers = async(req, res) => {
//    try {
//       const response = await User.findAll({
//        attributes:['uuid','name','email']
//    });
//       res.status(200).json(response);
//    } catch (error) {
//        res.status(500).json({msg: error.message});
//    }
//
//}

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            attributes:['uuid','name','email'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
     } catch (error) {
         res.status(500).json({msg: error.message});
     }
 
}

export const createUser = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    if (password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password Not Match"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword

        });
        res.status(201).json({msg:" Successfully Register"});
    } catch (error) {
        res.status(400).json({msg:"Register Cannot Be Made"});
        
    }
}


