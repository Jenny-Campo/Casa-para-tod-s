const router = require('express').Router()
const { checkAuth } = require('../utils')

const {
    registerOwnAd,
    updateOwnAd,
    deleteOwnAd,
    getOwnAd
} = require('../controllers/house.controller')

router.post('/ad', checkAuth, registerOwnAd)
router.put('/ad', checkAuth, updateOwnAd)
router.get('/ad', checkAuth, getOwnAd)
router.delete('/ad/:id', checkAuth, deleteOwnAd)

module.exports = router