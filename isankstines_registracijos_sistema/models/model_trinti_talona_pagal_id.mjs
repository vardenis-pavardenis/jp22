import mongodb from 'mongodb'
import config from '../config.mjs'

const model_trinti_talona_pagal_id = async function (param_id)
{
    //

    const uri = config.prisijungimo_prie_mongodb_uri
    const mongodb_client_1 = new mongodb.MongoClient(uri)

    // result_of_deleteOne

    try
    {
        const result_of_deleteOne = await mongodb_client_1
            .db(config.talonai_duomenu_bazes_vardas)
            .collection(config.talonai_kolekcijos_vardas)
            .deleteOne({ "_id": mongodb.ObjectId(param_id) })

        mongodb_client_1.close()

        if (result_of_deleteOne.deletedCount !== 1)
        {
            return false
        }

        return true
    }
    catch (err)
    {
        return false
    }
}

export default model_trinti_talona_pagal_id