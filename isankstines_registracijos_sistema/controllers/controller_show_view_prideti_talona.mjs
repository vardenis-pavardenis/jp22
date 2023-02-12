import config from "../config.mjs"
import view_prideti_talona from "../views/view_prideti_talona.mjs"

const controller_show_view_prideti_talona = function (req, res)
{
    // req.cookies.slaptazodis

    if(req.cookies.slaptazodis !== config.slaptazodis)
    {
        res.statusCode = 401
        res.redirect("/admin")
        res.end()
        return
    }

    //

    const html = view_prideti_talona()
    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_prideti_talona