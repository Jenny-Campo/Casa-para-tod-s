const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const User = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {                        //ojo, en front y figma tenemos fecha de nacimiento
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direcction: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    role: {
      type: DataTypes.STRING,
      //type: DataTypes.ENUM(['user', 'admin']),
      defaultValue: 'user'
    }
  },
  { timestamps: false }
)

module.exports = User