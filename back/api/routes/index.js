const router = require('express').Router() 

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const provinceRouter = require('./province.router')
const houseRouter = require('./house.router')

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/province', provinceRouter)
router.use('/house', houseRouter)


module.exports = router