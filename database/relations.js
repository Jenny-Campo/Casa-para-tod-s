const User = require('../api/models/user.model')
const HouseAd = require('../api/models/house.model')

function addRelationsModels() {
    try {
        User.hasOne(HouseAd)
        HouseAd.hasOne(User)

        console.log('Relations added to models')
        
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels
