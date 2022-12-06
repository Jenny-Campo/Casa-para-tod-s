const Province = require ('../models/province.model')


// async function createProvince (req, res) {
//     try {
//         const listProvince = await Province.bulkCreate([
//             {name: 'Alava'},{name: 'Albacete'},{name: 'Alicante'},{name: 'Almería'},{name: 'Asturias'},{name: 'Avila'},{name: 'Badajoz'},{name: 'Barcelona'},{name: 'Burgos'},{name: 'Cáceres'},
//             {name: 'Cádiz'},{name: 'Cantabria'},{name: 'Castellón'},{name: 'Ciudad Real'},{name: 'Córdoba'},{name: 'La Coruña'},{name: 'Cuenca'},{name: 'Gerona'},{name: 'Granada'},{name: 'Guadalajara'},
//             {name: 'Guipúzcoa'},{name: 'Huelva'},{name: 'Huesca'},{name: 'Islas Baleares'},{name: 'Jaén'},{name: 'León'},{name: 'Lérida'},{name: 'Lugo'},{name: 'Madrid'},{name: 'Málaga'},{name: 'Murcia'},{name: 'Navarra'},
//             {name: 'Orense'},{name: 'Palencia'},{name: 'Las Palmas'},{name: 'Pontevedra'},{name: 'La Rioja'},{name: 'Salamanca'},{name: 'Segovia'},{name: 'Sevilla'},{name: 'Soria'},{name: 'Tarragona'},
//             {name: 'Santa Cruz de Tenerife'},{name: 'Teruel'},{name: 'Toledo'},{name: 'Valencia'},{name: 'Valladolid'},{name: 'Vizcaya'},{name: 'Zamora'},{name: 'Zaragoza'}
//         ])
        
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

async function getAllProvince (req, res) {
    try {
        const provinces = await Province.findAll()
        return res.status(200).json(provinces)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    //createProvince,
    getAllProvince
}