import config from "../config.mjs"
import model_gauti_visus_talonus from "../models/model_gauti_visus_talonus.mjs"
import view_message from "../views/view_message.mjs"

const regexp_slaptazodis = /^[a-z,A-Z,0-9]{10,20}$/

const controller_handle_identifikuotis =async function (req, res)
{
    // regexp_slaptazodis

    if (regexp_slaptazodis.test(req.body.slaptazodis) !== true)
    {
        const html = view_message("Klaida: slaptazodis netinkamo formato", "/")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // config.slaptazodis

    if (req.body.slaptazodis !== config.slaptazodis)
    {
        const html = view_message("Klaida: ivestas netinkamas slaptazodis ", "/")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_gauti_visus_talonus

    const arr_talonai = await model_gauti_visus_talonus()

    //

    res.cookie("slaptazodis", config.slaptazodis, { "maxAge": 180000, "httpOnly": true })

    res.redirect("\admin")
    res.end()
}

export default controller_handle_identifikuotis