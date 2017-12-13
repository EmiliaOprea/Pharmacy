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

exports.delete = function (req, res) {
  let id_client = req.params.id_client;
  user.findById(req.params.id_client).then(user => {
    if(!user){
      return res.status(400).send({
        message: 'User not found!',
      });
    }
    return user
      .destroy()
      .then(() => res.status(204).send())
      .catch(error => res.status(400).send(error));
  })
  .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
  let id_client = req.params.id_client;
  user.findById(id_client).then(user =>{
    if(!user){
      return res.status(400).send({
        message: 'Client Not Found',
      });
    }
    
    user.nume = req.body.name;
    user.prenume = req.body.prenume;
    user.varsta = req.body.varsta;
    user.sex = req.body.sex;
    user.createdAt = req.body.createdAt;
    user.updateAt = req.body.updateAt;
    
    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Client was updated!'});
    });
  });
};
    

