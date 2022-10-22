# Challenge-Game
buat controlers user: 
a. buat user kedalam data base yang passwordnya sudah bcrypt (tonton yang pertama dan rekaman malam ini )



step by step:
- npm ini -y
- npm install pg
- npm install sequelize
- rubah yang ada di config, sesuaikan config.jsonnya (postgres)
- sequelize db:create
- sequelize model:generate --name User --atributes username:string,password:string,email:string
- sequelize db:migrate
- pisah routingan di routes buat folder routes didalamnnya buat file index.js
- test data masuk ke database menggunakan sandbox 
- npm install routes-js
- npm install dotenv
- npm install bcrypt
- npm install express express-session express-flash sequelize pg ejs
- npm install passport passport-local
- npm install jsonwebtoken
sequelize validate (validations & contraction)


