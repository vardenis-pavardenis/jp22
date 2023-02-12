const view_message = function (param_message, param_endpoint)
{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=>, initial-scale=1.0">
        <title>view_message</title>
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
                padding: 1em 0 1em 0;
                border: 0;
                margin: 0;
                background-color: #f0efeb;
                display: grid;
                grid-template-columns: 100%;
                grid-template-rows: auto;
                place-items: center center;
                place-content: center center;
            }
    
            input[type="submit"] {
                width: 75%;
                height: 3em;
                padding: 0;
                border: 0;
                margin-top: 1em;
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
    
        <form method="get" action="${param_endpoint}">
    
            <spam>${param_message}</spam>
    
            <p></p>
    
            <input type="submit" value="Gerai">
    
        </form>
    
    </body>
    
    </html>`
}

export default view_message