var Userdb = require('../model/model');

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
}
const user = new Userdb({
    name : req.body.name,
        //image : req.body.image,
        quantity: req.body.quantity
        

})
user
    .save(user)
    .then(data =>{
        //res.send(data);
    res.redirect('/mycart');
    })
    .catch(err =>{
        res.status(500).send({
            message : err.message || "Some error occurred"
        });
    });

}


exports.find = (req,res) => {

    /* if(req.query.id){
         const id= req.query.id;
         Userdb.findById(id)
         .then(data=>{
             if(!data){
                 res.status(404).send({ message : "Not found user with id "+ id})
             }
             else{
             res.send(data)
         }
     })
     .catch(err =>{
         res.status(500).send({ message: "Error retrieving user with id " + id})
     })
 
     }
     else{*/
 
 Userdb.find()
     .then(user=>{
         res.send(user);

     })
     .catch(err => {
         res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
     })
     }
     
     
 //}
 exports.delete = (req,res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "Item was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete Item with id=" + id
        });
    });
}