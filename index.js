//require('dotenv').config()
const express = require ('express')
const morgan = require('morgan')

const { checkConnection, syncModels } = require('./database/indexDatabase')
const addRelationsModels = require('./database/relations')

async function checkAndSyncPostgreSQL() {
    await checkConnection()
    addRelationsModels()
    await syncModels()
}

function initilizeAndListenWithExpress() {
    const app = express()
    //.use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', require('./api/routes'))
    .listen(process.env.PORT, () => {
        console.log(`Listening on port: ${process.env.PORT}`)
    })
}

(async function startAPI () {
    await checkAndSyncPostgreSQL()
    initilizeAndListenWithExpress()
}) ()