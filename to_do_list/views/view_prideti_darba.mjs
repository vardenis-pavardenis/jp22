const view_prideti_darba = function ()
{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>view_prideti_darba</title>
    
        <style>
            html,
            body {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
            }
    
            header {
                width: 100%;
                height: 5em;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: rgb(150, 100, 100);
                display: grid;
                grid-template-columns: auto;
                place-items: center center;
                place-content: center center;
            }
    
            main{
                width: 100%;
                height: auto;
                padding: 0;
                border: 0;
                margin: 0;
            }

            form {
                width: 100%;
                height: auto;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: rgb(100, 150, 100);
                display: grid;
                grid-template-columns: auto;
                place-items: center center;
                place-content: center center;
                gap: 1em;
            }
        </style>
    
    </head>
    
    <body>
    
        <header>
            <a href="/view_prideti_darba">view_prideti_darba</a>
        </header>
    
        <main>
            <form method="post" action="/prideti_darba">
                <span>darbo_aprasas</span>
                <input type="text" name="darbo_aprasas">
                <input type="submit" value="Prideti">
            </form>
        </main>
    
    </body>
    
    </html>`
}

export default view_prideti_darba