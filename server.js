const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const Handlebars = require('handlebars')
const app = express()

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3080
const routes = require("./routes/adventure-api-routes")
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//custom handlebars helper to split scenario column
Handlebars.registerHelper('splitScene', (scene)=>{
    const str = scene.split(",")
    return scene.split(",").slice(0,str.length-2)
});
Handlebars.registerHelper('splitA', (optionA)=>{
    const str = optionA.split(",")
    return optionA.split(",").slice(1,str.length-1)
});
Handlebars.registerHelper('splitB', (optionB)=>{
    const str = optionB.split(",")
    return optionB.split(",").slice(2,str.length)
});
app.use(routes)
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'adventure_db'
})

app.listen(PORT, ()=>{
    connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log("Listening on http://localhost:"+PORT)
    console.log('connected as id ' + connection.threadId)
})})