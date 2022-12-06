const User = require ('../models/user.model')

require('dotenv').config()
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

async function signup (req, res) {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10)
      const user = await User.create(req.body,
          {
          fields: ['name', 'age', 'direcction', 'location', 'email', 'password', 'phoneNumber']
      })
  
      const payload = { email: user.email }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
  
      return res.status(200).json({ message: 'User created!', email: user.email, token: token })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  module.exports = {
    signup
  }