const express = require("express");
const router = express.Router();
const {User,Cat,Event} = require("../../models");


//find all
//    /api/event
router.get("/", (req, res) => {
  Event.findAll({})
    .then(dbEvents => {
      res.json(dbEvents);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Event.findByPk(req.params.id,{})
    .then(dbEvent => {
      res.json(dbEvent);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Event

router.post("/", (req, res) => {
//   if(!req.session.user){
//     return res.status(401).json({msg:"ya gotta login to create a Event post!"})
// }
  Event.create({
    name:req.body.name,
    time:req.body.time,
    location:req.body.location,
    date:req.body.date,
    // UserId:req.session.user.id
  })
    .then(newEvent => {
      res.json(newEvent);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update Event
router.put("/:id", (req, res) => {
  Event.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedEvent => {
    res.json(updatedEvent);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a Event
router.delete("/:id", (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id
    }
  }).then(delEvent => {
    res.json(delEvent);
  })
  .catch(err => {
    //console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
