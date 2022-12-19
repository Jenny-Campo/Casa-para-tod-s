const router = require('express').Router()
const { checkAuth } = require('../utils')

const {
    getAllProvince,
    findProvince,
    //createProvince
} = require('../controllers/province.controller')

//router.post('/', createProvince)
router.get('/', getAllProvince)
router.get('/:province', findProvince)

module.exports = router