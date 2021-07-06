$(document).ready(function(){

    var bagItems = [];
    $('#bagItemAdd').click(function(e){
        e.preventDefault();
        let bagItemName = $('#bagItemName').val();
        let bagItemWorth = $('#bagItemWorth').val();
        let bagItemWeight = $('#bagItemWeight').val();

        var bagItemObj ={
            name: bagItemName,
            worth: parseInt(bagItemWorth),
            weight: parseInt(bagItemWeight)        
        }
        bagItems.push(bagItemObj);

        let bagItem= '<tr><td>'+bagItemName+'</td><td>'+bagItemWorth + '</td><td>'+bagItemWeight+'</td></tr>'
        $('#bagItemsTable').append(bagItem);
        $('#bagItemName').val("");
        $('#bagItemWorth').val("");
        $('#bagItemWeight').val("");
    })

    $('#optimumBagSubmit').click(function(e){
        
        console.log("entered here");
        var capacity = $('#capacity').val();
        var data= {"capacity": capacity ,"items": bagItems };
        console.log(data);
        $.ajax({ 
            type: "POST",
            url: "/optimumBag",
            data: data,
            error: function(e){
                console.log(e);
            },
            success: function(response){
               console.log(response); 
               var items= '';
               response.result.set.forEach(item=>{
                   items += '<tr class="table table-striped w-100"><td>'+item.name+'</td><td>'+item.worth+'</td><td>'+item.weight+'</td></tr>'
               })
               var result = '<tr class="table table-striped w-100"><th>Item Name</th><th>Worth</th><th>Weight</th></tr>'+items
               $("#bagOptimizedItemsTable").append(result);
            }
        });  
        e.preventDefault();
        return false;  
    }) 
})