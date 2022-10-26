const route = require("express").Router()
const userControllers = require("../../controllers/userControllers")
const user = require("../../models/user")
// const swaggerJson = require("../openapi.json")
// const swaggerUi = require("swagger-ui-express")


route.get("/register", userControllers.renderForm)
route.post("/register", userControllers.handleFormRegister)
route.get("/login", userControllers.renderlogin)

// route.post('/register', passport.authenticate('register', {
//     successRedirect: '/',
//     failureRedirect: '/register',
//     failureFlash: true
//     }))



module.exports = route