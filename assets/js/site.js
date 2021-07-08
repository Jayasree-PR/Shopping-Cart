$('#delete').submit(function(event){
    
    

    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id= $(this).attr("id");

        var request = {
            "url" : `http://localhost:4040/cart/delete/${id}`,
            "method" : "DELETE"
            
        }

        if(confirm("Do you really want to delete this record?")){
            
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
    }
})


})

