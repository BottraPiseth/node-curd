const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testing',
  })


//INSERT INTO employee (firstname, lastname, gender, tel, position, email, salary, ) VALUES ('sok','na',1,'',wen developer,'',1000)

// db.connect()

// db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// db.end()


module.exports= db