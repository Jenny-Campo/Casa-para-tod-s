const router = require('express').Router()
const { checkAuth, checkRole } = require('../utils')

const {
    getOwnProfile,
    updateOwnProfile,
    deleteOwnProfile
} = require('../controllers/user.controller')

router.get('/profile', checkAuth, getOwnProfile)
router.put('/profile', checkAuth, updateOwnProfile)
router.delete('/profile', checkAuth, deleteOwnProfile)


module.exports = router