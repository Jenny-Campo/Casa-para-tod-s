const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const HouseAd = sequelize.define(
  'houseAd',
  {
    houseType: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    totalRooms: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    totalWc: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    houseState: {
      type: DataTypes.STRING,
        // allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: false
    },

    location: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    rentalPrice: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull: false
    }
  },
  { timestamps: false }
)

module.exports = HouseAd