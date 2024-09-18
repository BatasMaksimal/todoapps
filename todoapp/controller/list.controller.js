const model = require(`../models/index`);
const Op = require(`sequelize`).Op;
const { request } = require("http");
const path = require("path");
const md5 = require("md5");
const moment = require("moment");
const multer = require("multer");
const jsonwebtoken = require("jsonwebtoken");
const SECRET_KEY = "secretcode";
const listModel = model.list;




exports.getAllList = async (request, res) => {
    try {
      let list = await listModel.findAll();
      return res.json({
        success: true,
        data: list,
        message: `All List have been loaded`,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };

  exports.AddList = async (request, response) => {
    console.log("Request body:", request.body); 
    let data = {
      user_id: request.body.user_id,
      name: request.body.name,
    };
  
    try {
      let result = await listModel.create(data);
      response.json({
        message: "success",
        data: result,
      });
    } catch (error) {
      console.error("Error inserting data:", error); 
      response.json({
        message: error.message,
      });
    }
};

exports.updateList = async (req, res) => {
  try {
      const id = {
          id: req.params.id
      };
      const data_edit = {
          user_id: req.body.user_id,
          name: req.body.name,
          
      };

      

      await listModel.update(data_edit, { where: id });
      return res.status(200).json({
          message: "Success updating room type",
          code: 200,
      });
  } catch (err) {
      console.log(err);
      return res.status(500).json({
          message: "Internal error",
          err: err,
      });
  }
};

exports.deleteList = (request, response) => {
  let id = request.params.id;

  listModel
    .destroy({ where: { id: id } })
    .then((result) => {
      return response.json({
        success: true,
        message: `Data List has been deleted`,
      });
    })
    .catch((error) => {
      return response.json({
        success: false,
        message: error.message,
      });
    });
};