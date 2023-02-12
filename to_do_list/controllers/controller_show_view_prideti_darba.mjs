import view_prideti_darba from "../views/view_prideti_darba.mjs"

const controller_show_view_prideti_darba = function (req, res)
{
    const html = view_prideti_darba()

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_prideti_darba