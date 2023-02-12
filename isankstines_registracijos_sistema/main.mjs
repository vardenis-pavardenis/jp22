import express from 'express'
import cookieparser from 'cookie-parser'
import controller_handle_patvirtinti_rezervacija from './controllers/controller_handle_patvirtinti_rezervacija.mjs'
import controller_handle_prideti_talona from './controllers/controller_handle_prideti_talona.mjs'
import controller_handle_rezervuoti_talona from './controllers/controller_handle_rezervuoti_talona.mjs'
import controller_show_view_home from './controllers/controller_show_view_home.mjs'
import controller_show_view_home_admin from './controllers/controller_show_view_home_admin.mjs'
import controller_show_view_prideti_talona from './controllers/controller_show_view_prideti_talona.mjs'
import controller_show_view_trinti_talona from './controllers/controller_show_view_trinti_talona.mjs'
import controller_show_view_rezervuoti_talona from './controllers/controller_show_view_rezervuoti_talona.mjs'
import controller_handle_trinti_talona from './controllers/controller_handle_trinti_talona.mjs'
import controller_handle_identifikuotis from './controllers/controller_handle_identifikuotis.mjs'

const express_1 = express()

//middleware

express_1.use(express.urlencoded())
express_1.use(cookieparser())

//endpoints

express_1.get("/", controller_show_view_home)
express_1.get("/talonai/new", controller_show_view_prideti_talona)
express_1.get("/talonai/:_id", controller_show_view_rezervuoti_talona)
express_1.get("/admin", controller_show_view_home_admin)
express_1.get("/talonai/:_id/trinti", controller_show_view_trinti_talona)
express_1.post("/patvirtinti_rezervacija", controller_handle_patvirtinti_rezervacija)
express_1.post("/prideti_talona", controller_handle_prideti_talona)
express_1.post("/identifikuotis", controller_handle_identifikuotis)
express_1.post("/trinti_talona", controller_handle_trinti_talona)
express_1.post("/rezervuoti_talona", controller_handle_rezervuoti_talona)

//

express_1.listen(process.env.PORT | 80)