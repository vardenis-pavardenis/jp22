// objekto kurimas JSON(JavaScript Object Notation) 

const zaidejas = {
    "vardas": "vardenis",
    "x": 1,
    "y": 1,
    "givybes": 100,
    "prisistatyti": function ()
    {
        console.log(this.vardas)
    }
}

zaidejas.prisistatyti()

// objekto kurimas (Objeta formuojanti funkcija) konstruktorius

const Zaidejas = function (param_vardas)
{
    this.vardas = param_vardas
    this.x = 1
    this.y = 1
    this.givybes = 100
}

Zaidejas.prototype.prisistatyti = function ()
{
    console.log(this.vardas)
}

const zaidejas_1 = new Zaidejas("jurgis")
const zaidejas_2 = new Zaidejas("antanas")
const zaidejas_3 = new Zaidejas("aluyzas")

zaidejas_1.prisistatyti()

zaidejas_2.prisistatyti()

zaidejas_3.prisistatyti()

// objekto kurimas (Objeta formuojanti funkcija) konstruktorius
// class notacija (ES7)

class Player
{
    constructor(param_vardas)
    {
        this.vardas = param_vardas
        this.x = 1
        this.y = 1
        this.givybes = 100
    }
    prisistatyti()
    {
        console.log(this.vardas)
    }
}

const player_1 = new Player("aldona")
const player_2 = new Player("genoefa")

player_1.prisistatyti()

player_2.prisistatyti()
