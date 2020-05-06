$(document).ready(function(){
    $(".tablehead").click(function(){
        $(this).next("div").slideToggle("slow");
    });
});


function invoice() {

        document.getElementById("name").innerHTML = document.getElementById("FLName").value;

        var E = document.getElementsByName("size");
        for(i=0; i < E.length; i++){
            if(E[i].checked){
                document.getElementById("PizzaSize").value = E[i].value;
            } 
        }   
        
       

        var M = document.getElementsByName("meat");
        for(i=0; i < M.length; i++){
            if(M[i].checked){
                document.getElementById("style").value = M[i].value;
            }  
        }   
      

       if(document.getElementById("PizzaSize").value == "Small"){
           var sizePrice = 6;
       }
       else if(document.getElementById("PizzaSize").value == "Medium"){
           var sizePrice = 10;
       }
       else if(document.getElementById("PizzaSize").value == "Large"){
           var sizePrice = 14;
       }

       if(document.getElementById("style").value == "Pepperoni"){
           var meatPrice = 5;
       }
       else if(document.getElementById("style").value == "Sausage"){
           var meatPrice = 6;
       }
       else if(document.getElementById("style").value == "Canadian Bacon"){
           var meatPrice = 7;
       }
       else if(document.getElementById("style").value == "Ground Beef"){
           var meatPrice = 8;
       }
        
        document.getElementById("total").value = (sizePrice + meatPrice);
   
       // var totalPrice = (meatPrice + sizePrice); console.log("totalPrice="+totalPrice);
    
    
          
    };
