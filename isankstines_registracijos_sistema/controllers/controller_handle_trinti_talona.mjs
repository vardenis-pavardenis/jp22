import config from "../config.mjs"
import model_trinti_talona_pagal_id from "../models/model_trinti_talona_pagal_id.mjs"
import view_message from "../views/view_message.mjs"

const regexp_id = /^[a-z,0-9]{24}$/

const controller_handle_trinti_talona = async function (req, res)
{
    // req.cookies.slaptazodis

    if(req.cookies.slaptazodis !== config.slaptazodis)
    {
        res.statusCode = 401
        res.redirect("/admin")
        res.end()
        return
    }

    // regexp_id

    if (regexp_id.test(req.body._id)!== true)
    {
        const html = view_message("Klaida: _id netaisiklingo formato", "/admin")

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_trinti_talona_pagal_id

    const result_of_model_trinti_talona_pagal_id = await model_trinti_talona_pagal_id(req.body._id)

    if (result_of_model_trinti_talona_pagal_id !== true)
    {
        const html = view_message("Klaida: nepavyko", "/admin")

        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    //

    const html = view_message("Talonas ištrintas", "/admin")

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_handle_trinti_talona