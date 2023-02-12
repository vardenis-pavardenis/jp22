import mongodb from 'mongodb'
import config from '../config.mjs'

const model_gauti_visus_galiojancius_talonas = async function ()
{
    const uri = config.prisijungimo_prie_mongodb_uri

    const mongodb_client_1 = new mongodb.MongoClient(uri)

    const timestamp_1 = Date.now() + 300000 //dabar + 5 min

    try
    {
        const result_of_find = await mongodb_client_1
            .db(config.talonai_duomenu_bazes_vardas)
            .collection(config.talonai_kolekcijos_vardas)
            .find({ "timestamp": { "$gt": timestamp_1 } })
            .sort({ "timestamp": 1 })
            .toArray()

        mongodb_client_1.close()

        return result_of_find
    }
    catch (err)
    {
        return []
    }
}

export default model_gauti_visus_galiojancius_talonas