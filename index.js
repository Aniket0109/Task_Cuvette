require('dotenv').config()

let user = require("../Task_Cuvette/modules/userSchema");

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Task_Cuvette");

app.post('/user/address', async (req, res) =>{

  const userdata = await user.create({
    username : req.body.username,
    address : req.body.address
  });

  if(userdata){
    res.json(userdata);
  } else {
    res.json({"Msg":"User Data cannot be created"});
  }
})

const posts = [
  {
    username: 'Aniket',
    title: 'Post 1'
  },
  {
    username: 'Mohit',
    title: 'Post 2'
  }
]

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(3000, () => console.log("Server Running"))