var arrTeacher =[]  

const getAll = (req,res)=>{
    res.json({
         list : arrTeacher        
    })
}
const getOne = (req,res)=>{
    res.json({
        // query:req.query
        message :"GetOne Teacher Success"
    })
}

const create =(req,res)=>{
    var data = req.query
    var fname = data.fname
    var lname = data.lname
    var gender = data.gender
   //  var dataStaff = arrStaff.push(data)
    arrTeacher.push(data)
   res.json({
    data:data,
        message :"Create to Teacher Success"
    })
}

const update = (req,res)=>{
    res.json({
        // query:req.query
        message :"Update Teacher Success"  
    })
}

const remove = (req,res)=>{
    res.json({
        // query:req.query
        message :"Delete Teacher Success"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
}