const {User} = require("../models")
const bcrypt = require("bcrypt")
require('dotenv').config()
const saltRounds = process.env.SALTROUNDS
const toNumber = +saltRounds
class userControllers {
    
    static renderForm(req, res) {
        res.render("register")
        console.log(toNumber)
    }
    
    
    static async handleFormRegister(req, res) {
        const { username, firstname, password, email } = req.body
        const salt = bcrypt.genSaltSync(toNumber)
        const hash = bcrypt.hashSync(password, salt)
        
        const inputUser = {
            username,
            firtname : firstname,
            password: hash,
            email
        }
        

        
        // console.log(inputUser);
        try {

            const results = await User.create(inputUser)
            res.redirect("/login")
            // console.log(results);
            // res.status(200).json({messsage: "berhasil"})
        } catch (error) {
            console.log(error);
        }
        
    }

    static renderlogin(req, res) {
        res.render("login")
    }

}

module.exports = userControllers