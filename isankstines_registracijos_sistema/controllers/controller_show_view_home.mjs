import view_home from "../views/view_home.mjs"
import model_gauti_visus_galiojancius_talonas from "../models/model_gauti_visus_galiojancius_talonas.mjs"

const controller_show_view_home = async function (req, res)
{
    // model_gauti_visus_galiojancius_talonas

    const result_of_model_gauti_visus_galiojancius_talonas = await model_gauti_visus_galiojancius_talonas()

    //

    const html = view_home(result_of_model_gauti_visus_galiojancius_talonas)

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_home