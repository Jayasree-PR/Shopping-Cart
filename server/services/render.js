const axios= require('axios');

exports.displaycart=(req,res)=> {

  
    axios.get('http://localhost:5050/addtocart')
    .then(function(response){
    
        res.render('mycart',{users:response.data});
       
    })
    .catch(err=>{
        res.send(err);
    })

}

exports.displayhome=(req,res)=>{
    res.render('index');
}
/*
exports.remove = (req,res)=>{
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id= $(this).attr("data-id");

        var request = {
            "url" : `http://localhost:5050/addtocart/${id}`,
            "method" : "DELETE"
            
        }

})
}*/