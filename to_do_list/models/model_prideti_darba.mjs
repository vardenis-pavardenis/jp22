import mongodb from "mongodb"
import config from "../config.mjs"

const model_prideti_darba = async function (param_darbo_aprasas)
{
    const mongodb_client_1 = new mongodb.MongoClient(
        config.prisijungimo_prie_mongodb_uri
    )

    // const result_of_db = mongodb_client_1.db(config.duomenu_bazes_vardas)
    // const result_of_collection = result_of_db.collection(config.kolekcijos_vardas)
    // const result_of_insertOne = result_of_collection.insertOne({ "darbo_aprasas": param_darbo_aprasas })

    var result_of_insertOne

    try
    {
        result_of_insertOne = await mongodb_client_1
            .db(config.duomenu_bazes_vardas)
            .collection(config.kolekcijos_vardas)
            .insertOne({ "darbo_aprasas": param_darbo_aprasas })

        mongodb_client_1.close()
    }
    catch (err)
    {
        return false
    }

    if (result_of_insertOne.acknowledged !== true ||
        result_of_insertOne.insertedId === undefined)
    {
        return false
    }

    //
    
    return true
}

export default model_prideti_darba