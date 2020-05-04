const bcrypt = require('bcrypt');

app.post("/register", async (req, res, next) => {
    
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
        "email":req.body.email,
        "password":encryptedPassword
    }
    
    // connection.query('INSERT INTO users SET ?', users, (error, results, fields) => {
    //     if (error) {
    //     res.send({
    //         "code":400,
    //         "failed":"error ocurred"
    //     })
    //     } else {
    //     res.send({
    //         "code":200,
    //         "success":"user registered sucessfully"
    //         });
    //     }
    // });
});

module.exports = app;