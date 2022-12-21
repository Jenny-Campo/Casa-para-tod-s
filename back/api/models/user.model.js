const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const User = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      // allowNull: false   
    },
    surname: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {                        
        type: DataTypes.INTEGER,
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
    phoneNumber: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    aboutYou: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    lookingFor: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    hobbies: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    smoker: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    pets: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    employment: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    rules: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    roommate: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  },
  { timestamps: false }
)

module.exports = User