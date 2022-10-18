import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Tasks = db.define('task',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNUll: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNUll: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    description:{
        type: DataTypes.STRING,
        allowNUll: false,
        validate:{
            notEmpty: true,
        }
    },
    date:{
        type: DataTypes.DATEONLY,
        allowNUll: false,
        validate:{
            notEmpty: true,
            isDate: true
        }
    },
    status:{
        type: DataTypes.STRING,
        allowNUll: false,
        validate:{
            notEmpty: false,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNUll: false,
        validate:{
            notEmpty: true,
        }
    }
    
},{
    freezeTableName: true
});

Users.hasMany(Tasks);
Tasks.belongsTo(Users, {foreignKey: 'userId'});
export default Tasks;