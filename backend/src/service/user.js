"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  }).catch((error) => rest.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id_client = req.params.id_client;
  user.findById(id_client).then(user => {
    if(!user){
      return res.status(400).send({
        message: 'User not found!',
      });
    }
    res.jsonp(user);
  });
};
