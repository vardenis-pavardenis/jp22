import config from "../config.mjs"
import model_gauti_talona_pagal_id from "../models/model_gauti_talona_pagal_id.mjs"
import model_siusti_sms from "../models/model_siusti_sms.mjs"
import view_message from "../views/view_message.mjs"
import view_patvirtinti_rezervacija from "../views/view_patvirtinti_rezervacija.mjs"
import view_sms_patvirtinimo_kodas from "../views/view_sms_patvirtinimo_kodas.mjs"

const regexp_id = /^[a-z,0-9]{24}$/
const regexp_vardas = /[A-Z,a-z,a-z,ą,č,ę,ė,į,š,ų,ū,ž,Ą,Č,Ę,Ė,Į,Š,Ų,Ū,Ž -]{3,100}/
const regexp_tel_nr = /^\+370[0-9]{8}$/
const arr_paslaugu_pavadinimai = config.arr_paslaugu_pavadinimai

const controller_handle_rezervuoti_talona = async function (req, res)
{
    // regexp_id

    if (regexp_id.test(req.body._id) !== true)
    {
        const html = view_message("Klaida: _id", `/${req.body._id}`)

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_vardas

    if (regexp_vardas.test(req.body.kliento_vardas) !== true)
    {
        const html = view_message("Klaida: kliento_vardas", `/talonai/${req.body._id}`)

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // tel_nr

    if (regexp_tel_nr.test(req.body.kliento_tel_nr) !== true)
    {
        const html = view_message("Klaida: kliento_tel_nr", `/talonai/${req.body._id}`)

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // arr_paslaugu_pavadinimai 

    const result_of_includes = arr_paslaugu_pavadinimai.includes(req.body.kliento_pasirinkta_paslauga)

    if (result_of_includes !== true)
    {
        const html = view_message("Klaida: kliento_pasirinkta_paslauga")

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // patikrinti ar laisvas

    const result_of_gauti_talona_pagal_id = await model_gauti_talona_pagal_id(req.body._id)

    if (result_of_gauti_talona_pagal_id.kliento_vardas !== null)
    {
        const html = view_message("Klaida: talonas užimtas.", "/")

        res.statusCode = 400
        res.write(html)
        res.end()
        return

    }

    // to do send sms with patvirtinimo_kodas

    const result_of_view_sms_patvirtinimo_kodas = view_sms_patvirtinimo_kodas(result_of_gauti_talona_pagal_id.patvirtinimo_kodas)

    const siusti_sms_su_patvirtinimo_kodu = await model_siusti_sms(req.body.kliento_tel_nr, result_of_view_sms_patvirtinimo_kodas)

    //

    const html = view_patvirtinti_rezervacija(
        req.body._id,
        req.body.kliento_vardas,
        req.body.kliento_tel_nr,
        req.body.kliento_pasirinkta_paslauga
    )

    //

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_handle_rezervuoti_talona