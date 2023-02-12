import config from "../config.mjs"
import model_prideti_talona from "../models/model_prideti_talona.mjs"
import view_message from "../views/view_message.mjs"

const regexp_metai = /^202[2-9]$/
const regexp_menesis = /(^0[1-9]$)|(^1[0-2]$)/
const regexp_diena = /(^0[1-9]$)|(^[1][0-9]$)|(^[2][0-9]$)|(^[3][0,1]$)/
const regexp_valanda = /(^0[7-9]$)|(^1[0-9]$)|(^2[0-1]$)/
const regexp_minutes = /(^[0-5][0-9]$)/

const controller_handle_prideti_talona = async function (req, res)
{
    // req.cookies.slaptazodis

    if(req.cookies.slaptazodis !== config.slaptazodis)
    {
        res.statusCode = 401
        res.redirect("/admin")
        res.end()
        return
    }

    // regexp_metai

    if (regexp_metai.test(req.body.metai) === false)
    {
        const html = view_message("Klaida: metai įvesti netaisiklingai", "/talonai/new")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_menesis

    if (regexp_menesis.test(req.body.menesis) === false)
    {
        const html = view_message("Klaida: menesis įvestas netaisiklingai", "/talonai/new")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_diena

    if (regexp_diena.test(req.body.diena) === false)
    {
        const html = view_message("Klaida: diena įvesta netaisiklingai", "/talonai/new")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_valanda

    if (regexp_valanda.test(req.body.valanda) === false)
    {
        const html = view_message("Klaida: valanda įvesta netaisiklingai", "/talonai/new")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // regexp_minutes

    if (regexp_minutes.test(req.body.minutes) === false)
    {
        const html = view_message("Klaida: minutes įvestos netaisiklingai", "/talonai/new")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    // model_prideti_talona

    const result_model_prideti_talona = await model_prideti_talona(req.body.metai,
        req.body.menesis,
        req.body.diena,
        req.body.valanda,
        req.body.minutes)

    //

    if (result_model_prideti_talona !== true)
    {
        const html = view_message("Klaida: nepavyko prideti talono", "/talonai/new")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    //

    const html = view_message("Talonas sukurtas", "/talonai/new")
    res.statusCode = 201
    res.write(html)
    res.end()
}

export default controller_handle_prideti_talona