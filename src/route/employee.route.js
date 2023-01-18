const employeeCon = require("../controller/teacher.controller")

const teacher = (app) =>{
    app.get("/api/teacher/list",employeeCon.getAll)
    app.get("/api/teacher/:id",employeeCon.getOne)
    app.post("/api/teacher/create",employeeCon.create)
    app.put("/api/teacher/update",employeeCon.update)
    app.delete("/api/teacher/remove",employeeCon.remove)
}

module.exports = employee