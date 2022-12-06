const User = require('../api/models/userModels')
const HouseAd = require('../api/models/houseAdModels')

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
