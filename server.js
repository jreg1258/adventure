var express = require('express')
var exphbs = require('express-handlebars')
var mysql = require('mysql')

var app = express()

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3080
const routes = require("./routes/adventure-api-routes")
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// app.use(routes)
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'adventure_db'
})

app.get("/",(req,res)=>{
    connection.query("SELECT * FROM scenarios WHERE id = 1",(err, data)=>{
        if (err) throw err;
        console.log(data)
        res.render("index", {scenarios : data})
    })
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