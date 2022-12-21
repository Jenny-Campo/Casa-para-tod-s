const router = require('express').Router()

const {
    getAllProvince,
    findProvince,
    createProvince
} = require('../controllers/province.controller')

router.get('/', getAllProvince)
router.get('/:province', findProvince)
router.post('/province', createProvince )

module.exports = router