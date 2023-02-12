import config from "../config.mjs"
import model_gauti_visus_talonus from "../models/model_gauti_visus_talonus.mjs"
import view_home_admin from "../views/view_home_admin.mjs"
import view_identifikuotis from "../views/view_identifikuotis.mjs"

const controller_show_view_home_admin = async function (req, res)
{
    // req.cookies.slaptazodis

    if (req.cookies.slaptazodis !== config.slaptazodis)
    {
        const html = view_identifikuotis()

        res.statusCode = 401
        res.write(html)
        res.end()
        return
    }

    // model_gauti_visus_talonus

    const result_of_model_gauti_visus_talonus = await model_gauti_visus_talonus()
    
    //

    const html = view_home_admin(result_of_model_gauti_visus_talonus)
    
    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_home_admin