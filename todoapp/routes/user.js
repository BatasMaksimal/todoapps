const express=require('express')
const app=express()
const multer  = require('multer');


app.use(express.json())
const userController=require('../controller/user.controller')
app.post("/register", userController.register)
app.post("/login", userController.login)
module.exports=app