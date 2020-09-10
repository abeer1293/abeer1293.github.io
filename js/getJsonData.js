
$(document).ready(function(){

    //AJAX service request to get the main text data form the json data store
    $.getJSON('./model/data.json', function(jsonObj){
        console.log(jsonObj);
        
        //Get the home page main text data
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '<h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');
        
     
        
        
 
        

    });

    
});