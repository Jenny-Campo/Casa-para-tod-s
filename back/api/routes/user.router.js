const router = require('express').Router()
const { checkAuth } = require('../utils')

const {
    getOwnProfile,
    updateOwnProfile,
    deleteOwnProfile,
    getUserById
} = require('../controllers/user.controller')

router.put('/profile', checkAuth, updateOwnProfile)
router.delete('/profile', checkAuth, deleteOwnProfile)
router.get('/profile', checkAuth, getOwnProfile)
router.get('/profile/:id', getUserById)


module.exports = router