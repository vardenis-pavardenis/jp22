import model_gauti_talona_pagal_id from "../models/model_gauti_talona_pagal_id.mjs"
import view_message from "../views/view_message.mjs"
import view_rezervuoti_talona from "../views/view_rezervuoti_talona.mjs"

const regexp_id = /^[a-z,0-9]{24}$/

const controller_show_view_rezervuoti_talona = async function (req, res)
{
    // regexp_id

    if (regexp_id.test(req.params._id) !== true)
    {
        const html = view_message("Klaida: _id blogas formatas", "/")

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_gauti_talona_pagal_id

    const result_of_model_gauti_talona_pagal_id = await model_gauti_talona_pagal_id(req.params._id)

    if (result_of_model_gauti_talona_pagal_id === null)
    {
        const html = view_message("Klaida: _id nerastas", "/")

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    //

    const html = view_rezervuoti_talona
        (   result_of_model_gauti_talona_pagal_id.metai,
            result_of_model_gauti_talona_pagal_id.menesis,
            result_of_model_gauti_talona_pagal_id.diena,
            result_of_model_gauti_talona_pagal_id.valanda,
            result_of_model_gauti_talona_pagal_id.minutes,
            result_of_model_gauti_talona_pagal_id._id)

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_rezervuoti_talona