import mongodb from "mongodb"
import config from "../config.mjs"

const model_gauti_visus_darbus = async function ()
{
    const mongodb_client_1 = new mongodb.MongoClient(
        config.prisijungimo_prie_mongodb_uri
    )

    var result_of_toArray

    try
    {
        result_of_toArray = await mongodb_client_1
            .db(config.duomenu_bazes_vardas)
            .collection(config.kolekcijos_vardas)
            .find({})
            .toArray()

        mongodb_client_1.close()
    }
    catch (err)
    {
        return null
    }

    return result_of_toArray
}

export default model_gauti_visus_darbus