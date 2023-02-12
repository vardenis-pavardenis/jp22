const view_identifikuotis = function()
{
return`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=>, initial-scale=1.0">
    <title>view_identifikuotis</title>

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
    <form method="post" action="/identifikuotis">

        <h3>Indetifikuotis</h3>

        <span>Įveskite slaptažodį</span>

        <input type="text" name="slaptazodis" >

        <input type="submit" value="Tęsti">

    </form>

    <form method="get" action="/">
        <input type="submit" value="Grįžti">
    </form>

</body>

</html>`
}

export default view_identifikuotis