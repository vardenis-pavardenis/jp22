const view_prideti_talona = function()
{
    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=>, initial-scale=1.0">
        <title>view_prideti_talona</title>
    
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
    
            input[name="metai"] {
                width: 2.25em;
                text-align: center;
            }
    
            input[name="menesis"] {
                width: 2.25em;
                text-align: center;
            }
    
            input[name="diena"] {
                width: 2.25em;
                text-align: center;
            }
    
            input[name="valanda"] {
                width: 1.25em;
                text-align: center;
            }
    
            input[name="minutes"] {
                width: 1.25em;
                text-align: center;
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
        <form method="post" action="/prideti_talona">
    
            <h3>Pridėti taloną</h3>
    
            <div>
                <input type="text" name="metai" value="2023">
                -
                <input type="text" name="menesis" placeholder="01">
                -
                <input type="text" name="diena" placeholder="01">
            </div>
    
            <div>
                <input type="text" name="valanda" placeholder="12">
                :
                <input type="text" name="minutes" placeholder="00">
            </div>
    
            <p></p>
            
            <input type="submit" value="pridėti">
    
        </form>
    
        <form method="get" action="/admin">
    
            <input type="submit" value="Grižti">
    
        </form>
    
    </body>
    
    </html>`
}

export default view_prideti_talona