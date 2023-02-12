import express from "express"
import controller_handle_prideti_darba from "./controllers/controller_handle_prideti_darba.mjs"
import controller_show_view_prideti_darba from "./controllers/controller_show_view_prideti_darba.mjs"

const express_1 = express()

// middware

express_1.use(express.urlencoded())

// routing

express_1.get("/view_prideti_darba", controller_show_view_prideti_darba)
express_1.post("/prideti_darba",controller_handle_prideti_darba)

//

express_1.listen(80)