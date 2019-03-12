$(document).ready(function(){

	// add and remove like
         $("#tn-details").on("click","li",function(){
           if($.cookie('user_login')){

             if($(this).hasClass("like")){
               $(this).removeClass("like");
               $(this).addClass("notlike");
               tn_id=$(this).attr('name');
               console.log(tn_id);
               $.ajax({
                  url: "/user/removelike",
                  type: "get",
                  dataType:"json",
                  data: {
                      tn_id:tn_id
                     
                     },
                   success: function(tns){  

                    console.log(tns);
                   }
                 });

             }else{
               $(this).removeClass("notlike");
               $(this).addClass("like");
               tn_id=$(this).attr('name');
               console.log(tn_id);
               $.ajax({
                  url: "/user/addlike",
                  type: "get",
                  dataType:"json",
                  data: {
                      tn_id:tn_id
                     
                     },
                   success: function(tns){  

                    console.log(tns);
                   }
                 });

             }

         }else{
               alert("Please log in first!");
         }
       });



});