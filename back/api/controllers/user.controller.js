
const User = require ('../models/user.model')
const bcrypt = require('bcrypt')

async function getOwnProfile (req, res) {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            attributes: {
                exclude: ['password', 'role', 'id']
            }
        })
        return !user ? res.status(404).send('No user found') : res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOwnProfile(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const [,user] = await User.update(req.body, {
            returning: true,
            where: {
                id: res.locals.user.id
            }
        })
       return res.status(200).send('Profile Updated!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOwnProfile (req, res) {
    try {
        const user = await User.destroy({
            where: {
            id: res.locals.user.id
            }
        })
        return !user ? res.status(404).send('User not found') : res.status(200).send('User deleted')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getUserById (req, res) {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ['password']
            }
        })
        return !user ? res.status(404).send('No user found') : res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getOwnProfile,
    updateOwnProfile,
    deleteOwnProfile,
    getUserById
}