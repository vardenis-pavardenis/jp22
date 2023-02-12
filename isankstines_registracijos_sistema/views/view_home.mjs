const view_home = function (param_arr_talonai)
{
    // rodyti tik laisvus talonus

    var body = ""

    for (var i = 0; i < param_arr_talonai.length; i += 1)
    {
        const talonas = param_arr_talonai[i]

        if (talonas.kliento_vardas === null)
        {
            body += `<form method="get" action="/talonai/${talonas._id}">
                <button>
                    <span>${talonas.metai}-${talonas.menesis}-${talonas.diena}</span>
                    <span>${talonas.valanda}:${talonas.minutes}</span>
                </button>
            </form>`
        }
    }

    //

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=>, initial-scale=1.0">
        <title>view_home</title>
        <style>
            html {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 1em 0 0 0;
                background-color: #e5e4df;
                font-family: 'effraregular';
                color: #505050;
            }
    
            body {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
                display: grid;
                grid-template-columns: repeat(auto-fit, 12.94em);
                grid-template-rows: auto;
                gap: 1em;
                place-content: start center;
                place-items: center center;
            }
    
            form {
                width: 100%;
                height: 8em;
                padding: 0;
                border: 0;
                margin: 0;
            }
    
            button {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
                display: grid;
                place-items: center;
                background-color: #f0efeb;
                grid-template-columns: 100%;
                grid-template-rows: auto;
                place-content: center center;
                place-items: center center;
            }
    
            button:hover {
                background-color: #ff8239;
            }
        </style>
    </head>
    
    <body>
        ${body}
    </body>
    
    </html>`
}

export default view_home