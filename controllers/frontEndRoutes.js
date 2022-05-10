const express = require('express');
const router = express.Router();
const {User,Event,Cat} = require('../models');

router.get("/",(req,res)=>{
    Event.findAll().then(events=>{
        //console.log(events)
        const hbsEvents = events.map(event=>event.get({plain:true}))
        //console.log("==========")
        console.log(hbsEvents)
        const loggedIn = req.session.user?true:false
        res.render("home",{hbsEvents})
    }).catch(err=>{
        console.log(err);
        res.json(err);
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})
router.get("/signup",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("signup")
})
// router.get("/event",(req,res)=>{
//     if(req.session.user){
//         return res.redirect("/profile")
//     }
//     res.render("event")
// })
//=============
router.get("/event",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    Event.findByPk(req.session.user.id,{
        include:[User]
    }).then(userData=>{
        //console.log(userData);
        const hbsData = userData.get({plain:true})
        //console.log("=======")
       // console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("event",hbsData)
    })
})
//=================
router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Event]
    }).then(userData=>{
       // console.log(userData);
        const hbsData = userData.get({plain:true})
        //console.log("=======")
        //console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("profile",hbsData)
    })
})

module.exports = router;