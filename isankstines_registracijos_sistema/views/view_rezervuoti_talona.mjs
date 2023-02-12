import config from "../config.mjs"

const view_rezervuoti_talona = function (param_metai,
    param_menesis,
    param_diena,
    param_valanda,
    param_minutes,
    param_talonas_id)
{

    var paslaugu_sarasas = ""

    for (var i = 0; i < config.arr_paslaugu_pavadinimai.length; i++)
    {
        const paslaugos_pavadinimas = config.arr_paslaugu_pavadinimai[i]

        paslaugu_sarasas += `
            <input type="radio" name="kliento_pasirinkta_paslauga" value="${paslaugos_pavadinimas}">
            <span>${paslaugos_pavadinimas}</span>
        `
    }

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=>, initial-scale=1.0">
        <title>view_rezervuoti_talona</title>
        <style>
            html {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: #e5e4df;
                color: #505050;
                font-family: "effraregular";
            }
    
            body {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
                display: grid;
                grid-template-columns: 20em;
                grid-template-rows: auto;
                place-items: center center;
                place-content: center center;
            }
    
            form {
                width: 100%;
                height: 100%;
                padding: 0 0 0 0;
                border: 0;
                margin: 0;
                background-color: #f0efeb;
                display: grid;
                grid-template-columns: 100%;
                grid-template-rows: auto;
                place-items: center center;
                place-content: center center;
            }
    
            h3 {
                text-transform: uppercase;
                font-weight: bold;
            }
    
            input[type="text"] {
                padding: 0;
                margin: 1em 0 1em 0;
                border: 0;
                border-bottom: 1px solid black;
                background-color: #f0efeb;
                border-color: #505050;
            }
    
            input[type="radio"] {
                padding: 0;
                border: 0;
                margin: 1em 0 1em 0;
            }
    
            input[type="submit"] {
                width: 75%;
                height: 3em;
                padding: 0;
                border: 0;
                margin: 0 0 1em 0;
                text-transform: uppercase;
                font-weight: normal;
                background-color: #505050;
                font-weight: 400;
                color: #f0efeb;
            }
    
            input[type="submit"]:hover {
                background-color: #ef7f1e;
            }
    
            #paslaugu_sarasas {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0 0 1em 0;
                display: grid;
                grid-template-columns: 2em 16em;
                grid-template-rows: auto;
                place-content: center center;
                place-items: center start;
                gap: 0.5em 0;
            }
        </style>
    </head>
    
    <body>
        <form method="post" action="/rezervuoti_talona">
    
            <h3>Rezervuoti taloną</h3>
    
            <span>${param_metai}-${param_menesis}-${param_diena}</span>
            <span>${param_valanda}:${param_minutes}</span>
    
            <input type="hidden" name="_id" value="${param_talonas_id}">
    
            <input type="text" name="kliento_vardas" placeholder="Vardenis Pavardenis">
    
            <input type="text" name="kliento_tel_nr" placeholder="+37012345678">
    
            <div id="paslaugu_sarasas">
                ${paslaugu_sarasas}
            </div>
    
            <p></p>
    
            <input type="submit" value="Rezervuoti">
    
        </form>
    
        <form method="get" action="/">
            <input type="submit" value="Grįžti">
        </form>
    
    </body>
    
    </html>`
}

export default view_rezervuoti_talona