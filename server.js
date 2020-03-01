const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const Handlebars = require('handlebars')
const app = express()
const path = require("path")
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3080
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//require("./routes/adventure-api-routes")(app);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//custom handlebars helper to split scenario column
Handlebars.registerHelper('splitScene', (scene)=>{
    const str = scene.split("@")
    return scene.split("@").slice(0,str.length-2)
});
Handlebars.registerHelper('splitA', (optionA)=>{
    const str = optionA.split("@")
    return optionA.split("@").slice(1,str.length-1)
});
Handlebars.registerHelper('splitB', (optionB)=>{
    const str = optionB.split("@")
    return optionB.split("@").slice(2,str.length)
});

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'adventure_db'
})

app.get("/",(req,res)=>{
    connection.query("SELECT * FROM scenarios WHERE id = 1",(err, data)=>{
        if (err) throw err;
        res.render("index", {scenarios : data})
    })
})

app.get("/:id", (req,res)=>{
    console.log(req.params)
    connection.query("SELECT * FROM scenarios WHERE id ="+req.params.id,(err, data)=>{
        if (err) throw err;
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