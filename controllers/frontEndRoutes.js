const express = require('express');
const router = express.Router();
const {User,Event,Cat} = require('../models');

router.get("/",(req,res)=>{
    Event.findAll().then(events=>{
        console.log(events)
        const hbsevents = events.map(event=>event.get({plain:true}))
        console.log("==========")
        console.log(hbsevents)
        const loggedIn = req.session.user?true:false
        res.render("home",{events:hbsevents,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Event]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("profile",hbsData)
    })
})

module.exports = router;