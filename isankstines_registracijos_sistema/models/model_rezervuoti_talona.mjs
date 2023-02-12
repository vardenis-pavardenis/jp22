import mongodb from 'mongodb'
import config from '../config.mjs'

const model_rezervuoti_talona = async function (param_id,
    param_kliento_vardas,
    param_kliento_tel_nr,
    param_kliento_pasirinkta_paslauga)
{
    //

    const uri = config.prisijungimo_prie_mongodb_uri
    const mongodb_client_1 = new mongodb.MongoClient(uri)

    // result_of_updateOne

    const timestamp_1 = Date.now() + 300000 //dabar + 5 min

    const filter = {}
    filter._id = mongodb.ObjectId(param_id)
    filter.timestamp = { "$gt": timestamp_1 }

    const updates = {}
    // updates.kliento_vardas = { "$cond": [{ "$eq": ["$kliento_vardas", null] }, param_kliento_vardas, "$kliento_vardas"] }
    // updates.kliento_tel_nr = { "$cond": [{ "$eq": ["$kliento_tel_nr", null] }, param_kliento_tel_nr, "$kliento_tel_nr"] }
    // updates.kliento_pasirinkta_paslauga = { "$cond": [{ "$eq": ["$kliento_pasirinkta_paslauga", null] }, param_kliento_pasirinkta_paslauga, "$kliento_pasirinkta_paslauga"] }

    updates.kliento_vardas = param_kliento_vardas
    updates.kliento_tel_nr = param_kliento_tel_nr
    updates.kliento_pasirinkta_paslauga = param_kliento_pasirinkta_paslauga
    
    try
    {
        const result_of_updateOne = await mongodb_client_1
            .db(config.talonai_duomenu_bazes_vardas)
            .collection(config.talonai_kolekcijos_vardas)
            .updateOne(filter, { $set: updates })

        mongodb_client_1.close()

        if (result_of_updateOne.modifiedCount === 0)
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

export default model_rezervuoti_talona