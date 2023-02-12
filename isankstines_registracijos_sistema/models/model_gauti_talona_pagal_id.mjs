import mongodb from 'mongodb'
import config from '../config.mjs'

/**
 * iesko kolecijoje dokumento kurio _id atitinka pateikta
 * radus grazina dokumenta
 * neradus grazina null
 * klaidos atveju grazina null
 * @param {string} param_id
 * @returns {object}
 */
const model_gauti_talona_pagal_id = async function (param_id)
{
    const uri = config.prisijungimo_prie_mongodb_uri

    const mongodb_client_1 = new mongodb.MongoClient(uri)

    try
    {
        const result_of_findOne = await mongodb_client_1
            .db(config.talonai_duomenu_bazes_vardas)
            .collection(config.talonai_kolekcijos_vardas)
            .findOne({ "_id": mongodb.ObjectId(param_id) })

        mongodb_client_1.close()

        return result_of_findOne
    }
    catch (err)
    {
        return null
    }
}

export default model_gauti_talona_pagal_id