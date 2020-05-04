const express = require('express');
const app = express();

app.post("/login", async (req, res, next) => {
    const email= req.body.email;
    const password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], async function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
    //   if(results.length >0){
    //     const comparision = await bcrypt.compare(password, results[0].password)
    //     if(comparision){
    //         res.send({
    //           "code":200,
    //           "success":"login sucessfull"
    //         })
    //     }
    //     else{
    //       res.send({
    //            "code":204,
    //            "success":"Email and password does not match"
    //       })
    //     }
    //   }
    //   else{
    //     res.send({
    //       "code":206,
    //       "success":"Email does not exits"
    //         });
    //   }
    }
    });
});

app.post("/login2", (req, res, next) => {
    var message = '';
    var sess = req.session; 
 
    if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
     
      var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";                           
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/home/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
    } else {
      res.render('index.ejs',{message: message});
    }         
})

module.exports = app