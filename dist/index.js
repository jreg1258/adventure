const express=require("express"),exphbs=require("express-handlebars"),mysql=require("mysql"),Handlebars=require("handlebars"),app=express(),path=require("path");let connection;const PORT=process.env.PORT||3080;app.use(express.urlencoded({extended:!0})),app.use(express.json()),app.use(express.static(path.join(__dirname,"public"))),app.engine("handlebars",exphbs({defaultLayout:"main"})),app.set("view engine","handlebars"),Handlebars.registerHelper("splitScene",a=>{const b=a.split("@");return a.split("@").slice(0,b.length-2)}),Handlebars.registerHelper("splitA",a=>{const b=a.split("@");return a.split("@").slice(1,b.length-1)}),Handlebars.registerHelper("splitB",a=>{const b=a.split("@");return a.split("@").slice(2,b.length)}),connection=process.env.JAWSDB_URL?mysql.createConnection(process.env.JAWSDB_URL):mysql.createConnection({host:"localhost",port:3306,user:"root",password:"password",database:"adventure_db"}),app.get("/",(a,b)=>{connection.query("SELECT * FROM scenarios WHERE id = 1",(a,c)=>{if(a)throw a;connection.query("DELETE FROM choices",(a,d)=>{if(a)throw a;b.render("index",{scenarios:c,choices:d})})})}),app.get("/:id",(a,b)=>{connection.query("SELECT * FROM scenarios WHERE id ="+a.params.id,(a,c)=>{if(a)throw a;connection.query("SELECT * FROM choices",(a,d)=>{if(a)throw a;b.render("index",{scenarios:c,choices:d})})})}),app.post("/:id",function(a){connection.query("INSERT INTO choices(choice) VALUES (?)",a.body.choice,a=>{if(a)throw a})}),app.listen(PORT,()=>{connection.connect(function(a){return a?void console.error("error connecting: "+a.stack):void(console.log("Listening on http://localhost:"+PORT),console.log("connected as id "+connection.threadId))})});

const optionA=$("#a"),optionB=$("#b"),playerSpace=$("#playerSpace"),a=optionA.val().trim(),b=optionB.val().trim();let sprite;const stopAnimate=()=>{clearInterval(sprite)},animateScript=()=>{let a=256;sprite=setInterval(()=>{document.getElementById("image").style.backgroundPosition=`-${a}px 0px`,1536>a?a+=256:a=256},100)};$(playerSpace).on("submit",a=>{a.preventDefault();const b=$(document.activeElement).val(),c=$(document.activeElement).text();$.post("/"+b,{choice:c},()=>{}),$.get("/"+b,a=>{id:;}).then(()=>{window.location.href="/"+b})});
