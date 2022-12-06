const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Province = sequelize.define(
    'province', {
        name: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: true
        }
    },
    { timestamps: false }
)

module.exports = Province