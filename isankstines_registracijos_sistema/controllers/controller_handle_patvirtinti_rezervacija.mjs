import config from "../config.mjs"
import model_gauti_talona_pagal_id from "../models/model_gauti_talona_pagal_id.mjs"
import model_rezervuoti_talona from "../models/model_rezervuoti_talona.mjs"
import model_siusti_sms from "../models/model_siusti_sms.mjs"
import view_message from "../views/view_message.mjs"
import view_sms_administratoriaus_informavimas from "../views/view_sms_administratoriaus_informavimas.mjs"
import view_sms_kliento_informavimas from "../views/view_sms_kliento_informavimas.mjs"

const regexp_id = /^[a-z,0-9]{24}$/
const regexp_kliento_vardas = /[A-Z,a-z,a-z,ą,č,ę,ė,į,š,ų,ū,ž,Ą,Č,Ę,Ė,Į,Š,Ų,Ū,Ž -]{3,100}/
const regexp_kliento_tel_nr = /^\+370[0-9]{8}$/

const arr_paslaugu_pavadinimai = config.arr_paslaugu_pavadinimai

const regexp_patvirtinimo_kodas = /^[0-9]{4}$/

const controller_handle_patvirtinti_rezervacija = async function (req, res)
{
    // regexp_talonas_id

    if (regexp_id.test(req.body._id) !== true)
    {
        const html = view_message("Klaida: _id", "/")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_kliento_vardas

    if (regexp_kliento_vardas.test(req.body.kliento_vardas) !== true)
    {
        const html = view_message("Klaida: kliento_vardas", `/talonai/${req.body._id}`)
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_kliento_tel_nr

    if (regexp_kliento_tel_nr.test(req.body.kliento_tel_nr) !== true)
    {
        const html = view_message("Klaida: kliento_tel_nr", `/talonai/${req.body._id}`)
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // kliento_pasirinkta_paslauga

    if (arr_paslaugu_pavadinimai.includes(req.body.kliento_pasirinkta_paslauga) !== true)
    {
        const html = view_message("Klaida: kliento_pasirinkta_paslauga", `/talonai/${req.body._id}`)
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_gauti_talona_pagal_uid

    const result_of_model_gauti_talona_pagal_id = await model_gauti_talona_pagal_id(req.body._id)

    if (result_of_model_gauti_talona_pagal_id === null)
    {
        const html = view_message("Klaida: talonas nerastas.", "/")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // patvirtinimo_kodas

    if (req.body.patvirtinimo_kodas !== result_of_model_gauti_talona_pagal_id.patvirtinimo_kodas)
    {
        const html = view_message("Klaida: patvirtinimo kodas netinkamas.", `/talonai/${req.body._id}`)
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // patikrinti ar laisvas

    if (result_of_model_gauti_talona_pagal_id.kliento_vardas !== null)
    {
        const html = view_message("Klaida: talonas užimtas.", `/talonai/${req.body._id}`)
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_rezervuoti_talona

    const result_of_model_rezervuoti_talona = await model_rezervuoti_talona(req.body._id,
        req.body.kliento_vardas,
        req.body.kliento_tel_nr,
        req.body.kliento_pasirinkta_paslauga)

    if (result_of_model_rezervuoti_talona !== true)
    {
        const html = view_message("Klaida: nepavyko patvirtinti rezervacijos.", `/talonai/${req.body._id}`)

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_siusti_sms

    const message = view_sms_kliento_informavimas(
        result_of_model_gauti_talona_pagal_id.metai,
        result_of_model_gauti_talona_pagal_id.menesis,
        result_of_model_gauti_talona_pagal_id.diena,
        result_of_model_gauti_talona_pagal_id.valanda,
        result_of_model_gauti_talona_pagal_id.minutes,
        req.body.kliento_pasirinkta_paslauga)

    const result_of_siusti_sms = await model_siusti_sms(req.body.kliento_tel_nr, message)

    //

    const message_2 = view_sms_administratoriaus_informavimas(
        result_of_model_gauti_talona_pagal_id.metai,
        result_of_model_gauti_talona_pagal_id.menesis,
        result_of_model_gauti_talona_pagal_id.diena,
        result_of_model_gauti_talona_pagal_id.valanda,
        result_of_model_gauti_talona_pagal_id.minutes,
        req.body.kliento_vardas,
        req.body.kliento_tel_nr,
        req.body.kliento_pasirinkta_paslauga)

    const result_of_siusti_sms_2 = await model_siusti_sms(config.administratoriaus_tel_nr, message_2)

    //

    const html = view_message("Rezervacija patvirtinta.", `/`)

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_handle_patvirtinti_rezervacija