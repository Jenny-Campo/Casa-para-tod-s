const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const HouseAd = sequelize.define(
  'houseAd',
  {
    houseType: {
      type: DataTypes.STRING,
      //type: DataTypes.ENUM('Piso', 'Casa'),
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
        //type: DataTypes.ENUM('Casi nuevo', 'Muy bueno', 'Bien', 'A reformar', 'Reformada'),
        // allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    // visibleDirecction: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
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