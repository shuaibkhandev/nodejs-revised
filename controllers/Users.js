const Users = require("../models/users");

async function getAllUsers(req, res){
      const users =  await Users.find({});
      return res.status(200).send({success:true, users:users})
}

async function createUser(req, res){
    const user = await Users.create(req.body);
    return res.status(201).send({success: true, user:user})
}

module.exports = {getAllUsers, createUser}