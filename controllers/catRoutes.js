const express = require("express");
const router = express.Router();
const {User,Event,Cat} = require("../models/");
const bcrypt  = require("bcrypt");