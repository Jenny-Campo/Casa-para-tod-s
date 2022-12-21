const router = require('express').Router()
const { checkAuth } = require('../utils')

const {
    getAllProvince,
    findProvince,
} = require('../controllers/province.controller')

router.get('/', getAllProvince)
router.get('/:province', findProvince)

module.exports = router