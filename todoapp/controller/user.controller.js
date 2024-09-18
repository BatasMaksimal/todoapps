const model = require(`../models/index`);
const Op = require(`sequelize`).Op;
const { request } = require("http");
const path = require("path");
const md5 = require("md5");
const moment = require("moment");
const multer = require("multer");
const jsonwebtoken = require("jsonwebtoken");
const SECRET_KEY = "secretcode";
const userModel = model.user;

exports.register = async (request, response) => {
    console.log("Request body:", request.body); 
    let data = {
      email: request.body.email,
      password: request.body.password,
      nama: request.body.nama
    };
  
    try {
      let result = await userModel.create(data);
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
  
exports.login = async (req, res) => {
    try {
        const params = {
            email: req.body.email,
            password: md5(req.body.password),
        };

        const findUser = await user.findOne({ where: params });
        if (findUser == null) {
            return res.status(404).json({
                message: "username or password doesn't match",
            });
        }
        //generate jwt token
        let tokenPayload = {
            email: findUser.email,
        };
        tokenPayload = JSON.stringify(tokenPayload);
        let token = await jsonwebtoken.sign(tokenPayload, SECRET_KEY);

        return res.status(200).json({
            message: "Success login",
            data: {
                logged: true,
                token: token,
                email: findUser.email,
            },
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal error",
            err: err,
        });
    }
};