const router = require('express').Router() 

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const provinceRouter = require('./province.router')
//const houseRouter = require('./user')

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/province', provinceRouter)


module.exports = router