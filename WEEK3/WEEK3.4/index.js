const express = require("express");
const app = express();

// Function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// app.get("/ride1", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "You have successfully ridden a ride",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Sorry you are not of age yet",
//     });
//   }
// });
// app.get("/ride2", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "You have successfully ridden a ride",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Sorry you are not of age yet",
//     });
//   }
// });

// -->Better way

// function isOldEnoughMiddleware(req,res,next){
//     if(age >=14){
//         next();
//     }else{
//         res.json(
//             msg:"Sorry you are not of the age yet ."
//         )
//     }
// }

// app.get("/ride1",isOldEnoughMiddleware, function(req,res){
//     res.json({
//         msg:"You have successfully riden the ride 2"
//     })
// })

// app.get("/ride1",function(req,res){
//     res.json({
//         msg:"You have successfully riden the ride 2"
//     })
// })
// app.listen(3000);
