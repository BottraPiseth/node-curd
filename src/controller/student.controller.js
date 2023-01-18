var arrStudent =[]  

const getAll = (req,res)=>{
    res.json({
         list : arrStudent
    })
}
const getOne = (req,res)=>{
    res.json({
        // query:req.query
        message :"GetOne Student Success"
    })
}

const create =(req,res)=>{
    var data = req.query
    var fname = data.fname
    var lname = data.lname
    var gender = data.gender
   //  var dataStaff = arrStaff.push(data)
    arrStudent.push(data)
   res.json({
    data:data,
        message :"Create to Student Success"
    })
}

const update = (req,res)=>{
    res.json({
        // query:req.query
        message :"Update Student Success"
    })
}

const remove = (req,res)=>{
    res.json({
        // query:req.query
        message :"Remove Student Success"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
}