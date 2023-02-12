const view_trinti_talona = function (param_id,
    param_metai,
    param_menesis,
    param_diena,
    param_valanda,
    param_minutes,
    param_kliento_vardas,
    param_kliento_tel_nr,
    param_kliento_pasirinkta_paslauga)
{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=>, initial-scale=1.0">
        <title>view_trinti_talona</title>
    
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
    
        </style>
    
    </head>
    
    <body>
        <form method="post" action="/trinti_talona">
    
            <h3>Trinti talona</h3>
    
            <span>${param_metai}-${param_menesis}-${param_diena}</span>
            <span>${param_valanda}:${param_minutes}</span>
            <span>${param_kliento_vardas}</span>
            <span>${param_kliento_tel_nr}</span>
            <span>${param_kliento_pasirinkta_paslauga}</span>
    
            <p></p>
    
            <input type="hidden" name="_id" value="${param_id}">
    
            <input type="submit" value="Trinti">
    
        </form>
    
        <form method="get" action="/admin">
    
            <input type="submit" value="Grįžti">
    
        </form>
    </body>
    
    </html>`
}

export default view_trinti_talona