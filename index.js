const express = require("express");
const app = express();

require("./src/route/student.route")(app)
require("./src/route/teacher.route")(app)
// require("./src/route/employee.route")(app)

  app.listen(8090,()=>{
    console.log("Sever run : http://localhost:8090")
})


