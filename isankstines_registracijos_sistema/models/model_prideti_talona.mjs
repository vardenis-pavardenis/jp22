import mongodb from 'mongodb'
import config from '../config.mjs'
import generate_random_integer from '../utilities/generate_random_integer.mjs'

const model_prideti_talona = async function (param_metai,
    param_menesis,
    param_diena,
    param_valanda,
    param_minutes,
    param_kliento_vardas,
    param_kliento_tel_nr,
    param_kliento_pasirinkta_paslauga)
{
    const talonas = {}

    talonas.metai = param_metai
    talonas.menesis = param_menesis
    talonas.diena = param_diena
    talonas.valanda = param_valanda
    talonas.minutes = param_minutes

    talonas.timestamp = Date.parse(`${param_metai}-${param_menesis}-${param_diena} ${param_valanda}:${param_minutes}`)

    talonas.kliento_vardas = null
    talonas.kliento_tel_nr = null
    talonas.kliento_pasirinkta_paslauga = null

    talonas.patvirtinimo_kodas = 1000 + generate_random_integer(8999)
    talonas.patvirtinimo_kodas = talonas.patvirtinimo_kodas.toString()

    //

    const uri = config.prisijungimo_prie_mongodb_uri

    const mongodb_client_1 = new mongodb.MongoClient(uri)

    // insertOne

    try
    {
        const result_of_insertOne = await mongodb_client_1
            .db(config.talonai_duomenu_bazes_vardas)
            .collection(config.talonai_kolekcijos_vardas)
            .insertOne(talonas)


        if (result_of_insertOne.acknowledged !== true)
        {
            mongodb_client_1.close()
            return false
        }

        return true
    }
    catch (err)
    {
        return false
    }
}
export default model_prideti_talona