const router = require('express').Router() 

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
//const houseRouter = require('./user')

router.use('/user', userRouter)
router.use('/auth', authRouter)

module.exports = router