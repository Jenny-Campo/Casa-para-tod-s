const HouseAd = require ('../models/house.model')
const User = require ('../models/user.model')

async function registerOwnAd (req, res) {
    try {
        const user = await User.findByPk(res.locals.user.id)
        const add = await user.createHouseAd(req.body, {
            fields: ['houseType', 'totalRooms', 'totalWc', 'houseState', 'address', 'location', 'rentalPrice', 'description']
        })
        return res.status(200).json({message: 'New ad registered', add:add})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOwnAd (req, res) {
    try {
        const user = await User.findByPk(res.locals.user.id)
        const [,houseAd] = await HouseAd.update(req.body, {
            returning: true,
            where: {
            userId: res.locals.user.id
            }        
        })
        return res.status(200).json({message: 'Ad updated', add:houseAd})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOwnAd (req, res) {
    try {
        const user = await HouseAd.findAll({
            where: {
                userId: res.locals.user.id
            }
        })
        const add = await HouseAd.destroy({
            where: {
                id: req.params.id
            }
        })
        return !add ? res.status(404).send('Add not found') : res.status(200).send('Add deleted')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOwnAd (req, res) {
    try {
        const add = await HouseAd.findAll({
            where: {
                userId: res.locals.user.id
            }
        }) 
        return !add ? res.status(404).send('This user has no adds') : res.status(200).json(add)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    registerOwnAd,
    updateOwnAd,
    deleteOwnAd,
    getOwnAd
}