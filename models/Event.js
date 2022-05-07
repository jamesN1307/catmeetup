const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Event extends Model {}

Event.init({
    // add properites here, ex:
    Eventname: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    Event_Time: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    Event_Date: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    Event_Location: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    // Event_pic: {
    //      type: DataTypes.STRING,
    //      allowNull:false,
    //      unique:true
    // },
    
},{

    sequelize,
});

module.exports=Event