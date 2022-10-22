const route = require("express").Router()
const userRoutes = require("./userRoutes")

route.use("/", userRoutes)

module.exports = route
