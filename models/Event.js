const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Event extends Model {}

Event.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    time: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    date: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    location: {
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