$(document).ready(function(){

     // console.log($.cookie('user_login'));

  if($.cookie('user_login')){
      $("#user-icon").css('display','block');
      $("#logout-icon").css('display','block');
      $("#login-icon").css('display','none');
  }else{
  	  $("#user-icon").css('display','none');
      $("#logout-icon").css('display','noen');
      $("#login-icon").css('display','block');
  }



           
  

  // login and singup form
  $('form').submit(function (event) {
        event.preventDefault();
        var form = $(this);

      // if (!form.hasClass('fupload')) {

        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize(),
          success: function (result) {
             console.log(result);
             switch(result.res_code){
             	 case 1:
             	 $("#login .alert").css('display','block').text(result.res_msg);	
                   setTimeout(function(){
                   $("#login .alert").css('display','none');
                   },2000);
                   break;
                 case 2:
                   $("#login .alert").css('display','block').text(result.res_msg);
                    setTimeout(function(){
                   $("#login .alert").css('display','none');
                   },2000);
                    break;
                 case 3:
                    
                    window.location.reload();
                 break;
                 case 4:
                    $("#signup .alert-danger").css('display','block').text(result.res_msg);	
                     setTimeout(function(){
                     $("#signup .alert").css('display','none');
                     },2000);
                 break;
                 case 5:
                     $("#signup .form-control").removeClass("is-invalid");
                     $("#signup .invalid-feedback").text("");
                     $("#signup-username input").addClass("is-invalid");
                     $("#signup-username .invalid-feedback").text(result.res_msg);
                 break;
                 case 6:
                     $("#signup .form-control").removeClass("is-invalid");
                     $("#signup .invalid-feedback").text("");
                     $("#signup-email input").addClass("is-invalid");
                     $("#signup-email .invalid-feedback").text(result.res_msg);
                 break;
                 case 7:
                     $("#signup .form-control").removeClass("is-invalid");
                     $("#signup .invalid-feedback").text("");
                     $("#signup-email input").addClass("is-invalid");
                     $("#signup-email .invalid-feedback").text(result.res_msg);
                 break;
                 case 8:
                     $("#signup .form-control").removeClass("is-invalid");
                     $("#signup .invalid-feedback").text("");
                     $("#signup-password input").addClass("is-invalid");
                     $("#signup-password .invalid-feedback").text(result.res_msg);
                 break;
                 case 9:
                     $("#signup .form-control").removeClass("is-invalid");
                     $("#signup .invalid-feedback").text("");
                     $("#signup-passwordconfirm input").addClass("is-invalid");
                     $("#signup-passwordconfirm .invalid-feedback").text(result.res_msg);
                 break;
                 case 10:
                     $("#signup .alert-success").css('display','block').text(result.res_msg);
                     setTimeout(function(){
                     $("#signup .alert").css('display','none');
                    },2000);
                 break; 

             }
            
             
          },
              
          fail: function (jqXHR, textStatus, errorThrown) {
               
           }
        });

    
       
      //  }
      // else {

      //   var formData = new FormData(this);
      //   $.ajax({
      //     type: form.attr('method'),
      //     url: form.attr('action'),
      //     data: formData,
      //     mimeType: "multipart/form-data",
      //     contentType: false,
      //     cache: false,
      //     processData: false,
      //     success: function(result){

      //        console.log(result);


      //     },
      //     fail: function (jqXHR, textStatus, errorThrown) {
      //     }
      //   });
      // }
      

    // form
    });

     
    // dlete history
    $(".h-delete").click(function(){
        
         var project_id=$(this).attr("name");
         // console.log(project_id);
           $.ajax({
                  url: "/user/historydelete",
                  type: "get",
                  dataType:"json",
                  data:{
                     project_id:project_id
                  },
                  success:function(result){

                     console.log(result);
                     alert(result.res_msg);
                     location.reload();
                     
                  }

         });
 

    });


      // if recomendation is helpful




    // suggest new technique
   $("#addtag-button").click(function(){

       tag=$("#addtag-content").val();
       // console.log(tag);
       if(tag==""){
            alert("Please input a tag.")
       }else{

       tags_number=$("#tags").children().length;
       // console.log(tags_number);
       if(tags_number<5){
       $("#tags").prepend(
             "<span class='ntn-tag badge badge-pill badge-secondary' id='tag-"+tags_number+"' >"
                  +"<span>"
                  +" "
                  +  tag
                  +" "
                  +"</span>"
                  +"<a class='ntn-tag-close btn btn-secondary btn-sm'>"
                  +"<span aria-hidden='true'>"
                  +"&times;"
                  +"</span>"
                  +"</a>"
                  +"</span>"
                  );
           $("#addtag-content").val("");
         }else{
          alert("Can't add more tags!");
         }


       }

   });


      $("#tags").on("click", ".ntn-tag-close", function(){
              
              $(this).parent().remove();
      });

          
          var tn_name; var tn_dc; var tn_is; var tn_rf; var tn_dp; var tn_td; var tn_d; var tn_up; var tn_et;
          var tn_tag0; var tn_tag1; var tn_tag2; var tn_tag3; var tn_tag4;
         
          $("#preview").click(function(){
             
             
             tn_name=$("#st-name").val();
             tn_dc=$("#st-dc").val();
             tn_is=$("#st-is").val();
             tn_rf=$("#st-rf").val();
             tn_dp=$("#st-dp").val();
             tn_td=$("#st-td").val();
             tn_d=$("#st-d").val();
             tn_up=$("#st-up").val();
             tn_et=$("#st-et").val();  
             tn_tag0=$("#tag-0 span:eq(0)").text();
             tn_tag1=$("#tag-1 span:eq(0)").text();
             tn_tag2=$("#tag-2 span:eq(0)").text();
             tn_tag3=$("#tag-3 span:eq(0)").text();
             tn_tag4=$("#tag-4 span:eq(0)").text();



             $("#ct-name").text(tn_name);
             $("#ct-dc").text(tn_dc);
             $("#ct-is").text(tn_is);
             $("#ct-rf").text(tn_rf);
             $("#ct-dp").text(tn_dp);
             $("#ct-td").text(tn_td);
             $("#ct-d").text(tn_d);
             $("#ct-up").text(tn_up);
             $("#ct-et").text(tn_et);
             $("#ct-tag0").text(tn_tag0);
             $("#ct-tag1").text(tn_tag1);
             $("#ct-tag2").text(tn_tag2);
             $("#ct-tag3").text(tn_tag3);
             $("#ct-tag4").text(tn_tag4);
          });
          
           $("#confirm").click(function(){


              if(!tn_name || !tn_dc || !tn_is){

                alert("Please input the the basic information (Name, Description, Instruction) of your technique!");
            
               }else{
              

              file=$("#st-picture")[0].files[0];
              // console.log(file);
              var formData = new FormData();
              formData.append("file",file);
              formData.append("tn_name",tn_name);
              formData.append("tn_dc",tn_dc);
              formData.append("tn_is",tn_is);
              formData.append("tn_rf",tn_rf);
              formData.append("tn_dp",tn_dp);
              formData.append("tn_td",tn_td);
              formData.append("tn_d",tn_d);
              formData.append("tn_up",tn_up);
              formData.append("tn_et",tn_et);
              formData.append("tn_tag0",tn_tag0);
              formData.append("tn_tag1",tn_tag1);
              formData.append("tn_tag2",tn_tag2);
              formData.append("tn_tag3",tn_tag3);
              formData.append("tn_tag4",tn_tag4);


              // console.log(formData);
              $.ajax({
              type: $("#s-form").attr('method'),
              url: $("#s-form").attr('action'),
              data: formData,
              mimeType: "multipart/form-data",
              contentType: false,
              cache: false,
              processData: false,
              success: function(result){
                   
                    console.log(result);
                    alert(result);
                    

                 }
             });


           }

             // $.ajax({ 

             //      url: "/user/suggestTechnique",
             //      type: "post",
             //      dataType:"json",
             //      data: {
                      
             //          tn_name:tn_name,
             //          tn_dc:tn_dc,
             //          tn_is:tn_is,
             //          tn_rf:tn_rf,
             //          tn_dp:tn_dp,
             //          tn_td:tn_td,
             //          tn_d:tn_d,
             //          tn_up:tn_up,
             //          tn_et:tn_et,
             //          tn_tag0:tn_tag0,
             //          tn_tag1:tn_tag1,
             //          tn_tag2:tn_tag2,
             //          tn_tag3:tn_tag3,
             //          tn_tag4:tn_tag4

                      
                     
             //         },
             //       success: function(result){ 
                      
             //          alert(result.res_msg);


             //       }

             // });

           });







// document ready function

});