
$(document).ready(function(){
      

        
         // login
         
     // login  form
     
     $('form').submit(function (event) {
        event.preventDefault();
        var form = $(this);


        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize(),
          success: function (result) {

             console.log(result);

             switch (result.res_code){   

                case 0:
                window.location.href="dashbord";
                break;


                case 1:
                alert(result.res_msg);
                break;

               }

             }      
          });
        });


         
         
          
         

         // edit
         $(".st-edit").click(function(){


         	 if($(this).hasClass("save")){
         	 	$(".state").css("display","block")
         	    $(".edit").css("display","none");
         	    $(this).text("Edit");
         	    $(this).removeClass("save");



         	   var parent= $(this).parent();
         	   console.log(parent);

               
               var tn_id; var tn_name; var tn_dc; var tn_is; var tn_rf; var tn_dp; var tn_td; var tn_d; var tn_up; var tn_et;
               var tn_tag0; var tn_tag1; var tn_tag2; var tn_tag3; var tn_tag4;

               tn_id=parent.attr("id")
               tn_name= parent.find(".edit:eq(0)").val();
               tn_dc=parent.find(".edit:eq(1)").val();
               tn_is=parent.find(".edit:eq(2)").val();
               tn_rf=parent.find(".edit:eq(3)").val();
               tn_dp=parent.find(".edit:eq(4)").val();
               tn_td=parent.find(".edit:eq(5)").val();
               tn_d=parent.find(".edit:eq(6)").val();
               tn_up=parent.find(".edit:eq(7)").val();
               tn_et=parent.find(".edit:eq(8)").val();
               tn_tag0=parent.find(".edit:eq(9)").val();
               tn_tag1=parent.find(".edit:eq(10)").val();
               tn_tag2=parent.find(".edit:eq(11)").val();
               tn_tag3=parent.find(".edit:eq(12)").val();
               tn_tag4=parent.find(".edit:eq(13)").val();
               
               $.ajax({

               	  url: "/admin/newupdate",
                  type: "get",
                  dataType:"json",
                  data: {
                  	  tn_id:tn_id,
                      tn_name:tn_name,
                      tn_dc:tn_dc,
                      tn_is:tn_is,
                      tn_rf:tn_rf,
                      tn_dp:tn_dp,
                      tn_td:tn_td,
                      tn_d:tn_d,
                      tn_up:tn_up,
                      tn_et:tn_et,
                      tn_tag0:tn_tag0,
                      tn_tag1:tn_tag1,
                      tn_tag2:tn_tag2,
                      tn_tag3:tn_tag3,
                      tn_tag4:tn_tag4

                     
                     },
                   success: function(result){

                         alert(result.res_msg);
                         location.reload();  


                   }
   



               });
              
         	 	


         	 }else{
         	 	$(this).addClass("save");
         	 	$(".state").css("display","none")
         	    $(".edit").css("display","block");
         	    $(this).text("Save");
         	 	


         	 }
  

         });


         // delete
         $(".st-delete").click(function(){

         	 var id = $(this).parent().attr("id");
         	 console.log(id);

         	  $.ajax({
                  url: "/admin/newdelete",
                  type: "get",
                  dataType:"json",
                  data: {
                      
                      id:id
                     
                     },
                   success: function(result){

                         alert(result.res_msg);
                         location.reload();  


                   }
               });

         });


         // add to technique library
         $(".st-addto").click(function(){

               var parent= $(this).parent();
               console.log(parent);

               
               var tn_id; var tn_name; var tn_dc; var tn_is; var tn_rf; var tn_dp; var tn_td; var tn_d; var tn_up; var tn_et;
               var tn_tag0; var tn_tag1; var tn_tag2; var tn_tag3; var tn_tag4;

               tn_id=parent.attr("id")
               tn_name= parent.find(".edit:eq(0)").val();
               tn_dc=parent.find(".edit:eq(1)").val();
               tn_is=parent.find(".edit:eq(2)").val();
               tn_rf=parent.find(".edit:eq(3)").val();
               tn_dp=parent.find(".edit:eq(4)").val();
               tn_td=parent.find(".edit:eq(5)").val();
               tn_d=parent.find(".edit:eq(6)").val();
               tn_up=parent.find(".edit:eq(7)").val();
               tn_et=parent.find(".edit:eq(8)").val();
               tn_tag0=parent.find(".edit:eq(9)").val();
               tn_tag1=parent.find(".edit:eq(10)").val();
               tn_tag2=parent.find(".edit:eq(11)").val();
               tn_tag3=parent.find(".edit:eq(12)").val();
               tn_tag4=parent.find(".edit:eq(13)").val();
               
               $.ajax({

                  url: "/admin/addtolibrary",
                  type: "post",
                  dataType:"json",
                  data: {
                      tn_id:tn_id,
                      tn_name:tn_name,
                      tn_dc:tn_dc,
                      tn_is:tn_is,
                      tn_rf:tn_rf,
                      tn_dp:tn_dp,
                      tn_td:tn_td,
                      tn_d:tn_d,
                      tn_up:tn_up,
                      tn_et:tn_et,
                      tn_tag0:tn_tag0,
                      tn_tag1:tn_tag1,
                      tn_tag2:tn_tag2,
                      tn_tag3:tn_tag3,
                      tn_tag4:tn_tag4

                     
                     },
                   success: function(result){

                         alert(result.res_msg);
                         location.reload();  


                   }

               });
            });
         
         







});