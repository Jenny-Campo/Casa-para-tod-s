const express = require ('express')

const { checkConnection, syncModels } = require('./database/indexDatabase')
const addRelationsModels = require('./database/relations')

// pte. cors y morgan

async function checkAndSyncPostgreSQL() {
    await checkConnection()
    addRelationsModels()
    await syncModels()
}

function initilizeAndListenWithExpress() {
    const app = express()
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