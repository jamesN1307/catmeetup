const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model {}

Cat.init({
    // add properites here, ex:
    Catname: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    Cat_motto: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    // Cat_pic: {
    //      type: DataTypes.STRING,
    //      allowNull:false,
    //      unique:true
    // },
    
},{
    sequelize,
});

module.exports=Cat