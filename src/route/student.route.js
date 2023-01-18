const studentCon = require("../controller/student.controller")

const student = (app) =>{
    app.get("/api/student/list",studentCon.getAll)
    app.get("/api/student/:id",studentCon.getOne)
    app.post("/api/student/create",studentCon.create)
    app.put("/api/student/update",studentCon.update)
    app.delete("/api/student/remove",studentCon.remove)
}

module.exports = student