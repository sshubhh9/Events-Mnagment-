const mysql = require('mysql');

const con = mysql.createConnection({
      database : 'events',
      user : 'root',
      host  : 'localhost',
});

con.connect((err) => {
    if (err) {
        console.log("error in db connection" , err)
        
    } else {
        console.log("db connect.")
    }
})

module.exports = con 

