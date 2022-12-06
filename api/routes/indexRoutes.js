const router = require('express').Router() 

const userRouter = require('./user')
const houseAdRouter = require('./user')

router.use('/user', userRouter)