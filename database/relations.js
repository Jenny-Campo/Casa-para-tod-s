const User = require('../api/models/user.model')
const HouseAd = require('../api/models/house.model')
const Province = require('../api/models/province.model')

function addRelationsModels() {
    try {
        User.hasOne(HouseAd)
        HouseAd.hasOne(User)
        Province.hasMany(User)
        Province.hasMany(HouseAd)

        console.log('Relations added to models')
        
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels
