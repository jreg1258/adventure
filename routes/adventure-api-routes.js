// const db = require("../models")

// module.exports = (app)=>{

//     app.get("/", (req,res)=>{
//         db.Scenarios.findOne({
//             where: {
//                 id: 1
//             }
//         })
//         .then((result)=>{
//             console.log(result)
//         })

//     app.get("/api/scenarios/:choice", (req,res)=>{
//         db.Scenarios.findOne({
//             where: {
//                 choiceA: req.params
//             }
//         })
//         .then((result)=>{
//             res.json(result)
//         })
//     })
// })}