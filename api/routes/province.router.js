const router = require('express').Router()
const { checkAuth } = require('../utils')

const {
    getAllProvince
    //createProvince
} = require('../controllers/province.controller')

//router.post('/', createProvince)
router.get('/', getAllProvince)

module.exports = router