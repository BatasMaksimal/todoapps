const express=require('express')
const app=express()
const multer  = require('multer');


app.use(express.json())
const listController=require('../controller/list.controller')
app.get("/", listController.getAllList)
app.post("/", listController.AddList)
app.put("/:id", listController.updateList)
app.delete("/:id", listController.deleteList)
module.exports=app