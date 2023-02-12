const view_patvirtinti_rezervacija = function(
param_talonas_id,
param_kliento_vardas,
param_kliento_tel_nr,
param_kliento_pasirinkta_paslauga)
{
    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=>, initial-scale=1.0">
        <title>view_patvirtinti_rezervacija</title>
    
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
                width: 4ch;
                padding: 0;
                border: 0;
                border-bottom: 1px solid black;
                margin: 1em 0 1em 0;
                background-color: #f0efeb;
                border-color: #505050;
            }
    
            input[type="submit"] {
                width: 75%;
                height: 3em;
                padding: 0;
                border: 0;
                margin: 0 0 1em 0;
                background-color: #505050;
                text-transform: uppercase;
                font-weight: 400;
                color: #f0efeb;
            }
    
            input[type="submit"]:hover {
                background-color: #ef7f1a;
            }
    
            span{
                text-align: center;
            }
    
        </style>
    
    </head>
    
    <body>
        <form method="post" action="/patvirtinti_rezervacija">
    
            <h3>Patvirtinti rezervaciją</h3>
    
            <span>Įveskite SMS žinute gautą  rezervacijos patvirtinimo kodą.</span>
    
            <input type="hidden" name="_id" value="${param_talonas_id}">
    
            <input type="hidden" name="kliento_vardas" value="${param_kliento_vardas}">
    
            <input type="hidden" name="kliento_tel_nr" value="${param_kliento_tel_nr}">
    
            <input type="hidden" name="kliento_pasirinkta_paslauga" value="${param_kliento_pasirinkta_paslauga}">
    
            <input type="text" name="patvirtinimo_kodas" maxlength="4" placeholder="1234">
    
            <p></p>
    
            <input type="submit" value="Tęsti">
    
        </form>
    
        <form method="get" action="/">
    
            <input type="submit" value="Grįžti">
    
        </form>
    
    </body>
    
    </html>`
}

export default view_patvirtinti_rezervacija