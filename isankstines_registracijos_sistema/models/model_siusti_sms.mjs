import axios from 'axios'
import querystring from 'querystring'

const model_siusti_sms = async function (param_kliento_tel_nr, param_patvirtinimo_kodas)
{
    //

    const form = {
        "password": "labasrytas",
        "to": param_kliento_tel_nr,
        "message": param_patvirtinimo_kodas
    }

    const result_of_stringify = querystring.stringify(form)

    // result_of_post

    try
    {
        const result_of_post = await axios
            .post('https://exciting-glory-variraptor.glitch.me/sms_outbox', result_of_stringify)

        return true
    }
    catch (err)
    {
        return false
    }
}

export default model_siusti_sms