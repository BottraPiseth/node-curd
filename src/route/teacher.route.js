const teacherCon = require("../controller/teacher.controller")

const teacher = (app) =>{
    app.get("/api/teacher/list",teacherCon.getAll)
    app.get("/api/teacher/:id",teacherCon.getOne)
    app.post("/api/teacher/create",teacherCon.create)
    app.put("/api/teacher/update",teacherCon.update)
    app.delete("/api/teacher/remove",teacherCon.remove)
}

module.exports = teacher