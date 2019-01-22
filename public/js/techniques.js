
//back to top button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//mouse on timo image event
$("#asktimo").mouseenter(function(){
       $("#asktimo-popup").css("display","block");
});
$("#asktimo").mouseleave(function(){
       $("#asktimo-popup").css("display","none");
});





  // initialization of all techniques
  
  function initialization(){
  
        $.ajax({
            url: "/techniques/search",
            type: "get",
            dataType:"json",
            success: function(tn){  
                console.log(tn);

                  function insertCard(){

                     if(tn.user_like_tn!=null){
                         var user_tn=[];
                         for(i=0;i<tn.user_like_tn.length;i++){
                          user_tn.push(tn.user_like_tn[i].tn_id);
                          }
                          // console.log(user_tn);
                          for(i=0;i<tn.tns.length;i++){
                            if(user_tn.indexOf(tn.tns[i].tn_id) != -1){
                                $("#cards").append(
                                "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               // +"<i class='fa fa-fw fa-eye'>"
                               // +"</i>"
                               +"<li class='fa fa-fw fa-heart like'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                              else{
                               $("#cards").append(
                               "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart notlike'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                          }

                     }else{
                         for(i=0;i<tn.tns.length; i++){
                            $("#cards").append(
                           "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                           +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                           +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                           +"</a>"
                           +"<div class='card-footer'>"
                           // +"<li class='fa fa-fw fa-eye'>"
                           // +"</li>"
                           +"<li class='fa fa-fw fa-heart notlike'>"
                           +"</li>"
                           +"</div>"
                           +"</div>"
                            );

                         }
                       }           
                     }             
                      insertCard();
                   }              
            });
       }













$(document).ready(function(){

          initialization();
         
         // techniques search
         $("#search-input").on("keyup", function(){
            var value=$(this).val().toLowerCase();
            // console.log(value);
             $.ajax({
                  url: "/techniques/tnsearch",
                  type: "get",
                  dataType:"json",
                  data: {
                      
                      value: value
                     
                     },
                   success: function(tn){  
                    // console.log(tn);
                    if(tn.tns.length>0){
                      function insertCard(){
                      if(tn.user_like_tn!=null){
                         var user_tn=[];
                         for(i=0;i<tn.user_like_tn.length;i++){
                          user_tn.push(tn.user_like_tn[i].tn_id);
                          }
                          // console.log(user_tn);
                          for(i=0;i<tn.tns.length;i++){
                            if(user_tn.indexOf(tn.tns[i].tn_id) != -1){
                                $("#cards").append(
                                "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart like'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                              else{
                               $("#cards").append(
                               "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart notlike'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                          }

                     }else{
                         for(i=0;i<tn.tns.length; i++){
                            $("#cards").append(
                           "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                           +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                           +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                           +"</a>"
                           +"<div class='card-footer'>"
                           +"<li class='fa fa-fw fa-heart notlike'>"
                           +"</li>"
                           +"</div>"
                           +"</div>"
                            );
                         }
                       } 
                      // function insertcard 
                      }   
                       $("#cards").empty();
                       insertCard();       
                     }else{
                       $("#cards").text('New techniques coming soon.');
                     }  
                   // ajax success function             
                  }
                   // ajax
                 });
             // tnsearch function
         });


         // search by tags
         $("#tag a").click(function(){


           
           $(".filter-attr").remove();
           $('.tnpar').removeClass("selected");
           var tag= $(this).text();
           var tag_number=$(this).attr("tag-number");
           $.ajax({
            url: "/techniques/tag",
            type: "get",
            dataType:"json",
            data: {
                tag: tag,
                tag_number:tag_number
            },
            success: function(tn){  
              // console.log(tn); 
                if(tn.tns.length>0){
                      function insertCard(){
                      if(tn.user_like_tn!=null){
                         var user_tn=[];

                         for(i=0;i<tn.user_like_tn.length;i++){
                          user_tn.push(tn.user_like_tn[i].tn_id);
                          }
                          // console.log(user_tn);

                         for(i=0;i<tn.tns.length;i++){
                            if(user_tn.indexOf(tn.tns[i].tn_id) != -1){
                                    // tag_number=tn.tag_number;
                                    // if(tn.tns[i][tag_number]>=30){
                                    //      color="green";
                                    // }else
                                    //   if(tn.tns[i][tag_number]>=10 && tn.tns[i][tag_number]<30){
                                    //   color="orange";
                            
                                    // }else
                                    //   if(tn.tns[i][tag_number]<10){
                                    //    color="red";
                                    // }
                                      $("#cards").append(
                                      "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                                      +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                                      +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_id+".jpg' alt='Card image cap'>"
                                      +"</a>"
                                      +"<div class='card-footer'>"
                                      // +"<span style='color:"+color+";'>"
                                      // +tn.tns[i][tag_number]+"%"
                                      // +"</span>"
                                      +"<li class='fa fa-fw fa-heart like'>"
                                      +"</li>"
                                      +"</div>"
                                      +"</div>"
                                     );

                              }
                              else{
                                    // tag_number=tn.tag_number;
                                    // if(tn.tns[i][tag_number]>=30){
                                    //     color="green";
                                    //  }else
                                    //  if(tn.tns[i][tag_number]>=10 && tn.tns[i][tag_number]<30){
                                    //      color="orange";
                            
                                    //  }else
                                    //  if(tn.tns[i][tag_number]<10){
                                    //     color="red";
                                    //  }
                                      $("#cards").append(
                                       "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                                       +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                                       +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_id+".jpg' alt='Card image cap'>"
                                       +"</a>"
                                       +"<div class='card-footer'>"
                                       // +"<span style='color:"+color+";'>"
                                       // +tn.tns[i][tag_number]+"%"
                                       // +"</span>"
                                       +"<li class='fa fa-fw fa-heart notlike'>"
                                       +"</li>"
                                       +"</div>"
                                       +"</div>"
                                    );

                                  }
                                }  
                              

                     }else{
                         for(i=0;i<tn.tns.length; i++){
                         //    tag_number=tn.tag_number;
                         //    if(tn.tns[i][tag_number]>=30){
                         //      color="green";
                         //    }else
                         //    if(tn.tns[i][tag_number]>=10 && tn.tns[i][tag_number]<30){
                         //       color="orange";
                            
                         //    }else
                         //    if(tn.tns[i][tag_number]<10){
                         //       color="red";
                         //    }
                            $("#cards").append(
                           "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                           +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                           +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_id+".jpg' alt='Card image cap'>"
                           +"</a>"
                           +"<div class='card-footer'>"
                           // +"<span style='color:"+color+";'>"
                           // +tn.tns[i][tag_number]+"%"
                           // +"</span>"
                           +"<li class='fa fa-fw fa-heart notlike'>"
                           +"</li>"
                           +"</div>"
                           +"</div>"
                            );
                            
                         }
                       }
                      // function insertcard 
                      }   
                       $("#cards").empty();
                       insertCard();       
                     }else{
                       $("#cards").text('New techniques coming soon.');
                     }  

                // ajax success function
               }


         });
         // search by tags
        });



         // add and remove like
         $("#cards").on("click","li",function(){
           if($.cookie('user_login')){

             if($(this).hasClass("like")){
               $(this).removeClass("like");
               $(this).addClass("notlike");
               tn_id=$(this).parent().parent('.tn-card').attr('id');
               // console.log(tn_id);
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
               tn_id=$(this).parent().parent('.tn-card').attr('id');
               // console.log(tn_id);
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

      
      
    

        // refresh cards after selected attributes changed
        function refreshcards(){

             var dp=$("#filter-textA").text();
             var td=$("#filter-textB").text();
             var d =$("#filter-textC").text();
             var up=$("#filter-textD").text();
             var et=$("#filter-textE").text();
              
              $.ajax({
            url: "/techniques/search",
            type: "get",
            dataType:"json",
            data: {
                tn_dp:dp,
                tn_td:td,
                tn_d:d,
                tn_up:up,
                tn_et:et
            },
            success: function(tn){  
                console.log(tn);
              if(tn.tns.length>0){
                function insertCard(){

                 if(tn.user_like_tn!=null){
                         var user_tn=[];
                         for(i=0;i<tn.user_like_tn.length;i++){
                          user_tn.push(tn.user_like_tn[i].tn_id);
                          }
                          // console.log(user_tn);
                          for(i=0;i<tn.tns.length;i++){
                            if(user_tn.indexOf(tn.tns[i].tn_id) != -1){
                                $("#cards").append(
                                "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart like'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                              else{
                               $("#cards").append(
                               "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart notlike'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                          }

                     }else{
                         for(i=0;i<tn.tns.length; i++){
                            $("#cards").append(
                           "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                           +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                           +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                           +"</a>"
                           +"<div class='card-footer'>"
                           +"<li class='fa fa-fw fa-heart notlike'>"
                           +"</li>"
                           +"</div>"
                           +"</div>"
                            );

                         }
                       } 
                 }

                   $("#cards").empty();
                   insertCard();
                }else{
                 $("#cards").text('New techniques coming soon.');
                }
              }  
           });

        }
         
    
    

       // Design Phase
       $("#select1 a").click(function() {
          $(this).toggleClass("selected").siblings().removeClass("selected");
          if($(this).hasClass("selected")) {
            if($("#selectA").length>0){
                 $("#filter-textA").text($(this).text());
   
              }else
              {
                $("#filter").append(
                  "<span class='filter-attr badge badge-pill badge-secondary' id='selectA'>"
                  +"Design Phase: "
                  +"<span id='filter-textA'>"
                  +$(this).text()
                  +"</span>"
                  + " "
                  +"<a class='tnpar btn btn-secondary btn-sm' id='filter-closeA'>"
                  +"<span aria-hidden='true'>"
                  +"&times;"
                  +"</span>"
                  +"</a>"
                  +"</span>"
                  );
              }
          }else{
              $("#selectA").remove();
          }
        });
         // filter-closeA
            $("#filter").on("click","#filter-closeA",function(){
              $("#selectA").remove();
              $("#select1 a").removeClass("selected");
              refreshcards();
             });


        //Time Dependency
        $("#select2 a").click(function() {
          $(this).toggleClass("selected").siblings().removeClass("selected");
          if($(this).hasClass("selected")) {
            if($("#selectB").length>0){
                 $("#filter-textB").text($(this).text());
              }else
              {
                $("#filter").append(
                   "<span class='filter-attr badge badge-pill badge-secondary' id='selectB'>"
                  +"Time Dependency: "
                  +"<span id='filter-textB'>"
                  +$(this).text()
                  +"</span>"
                  +" "
                  +"<a class='tnpar btn btn-secondary btn-sm' id='filter-closeB'>"
                  +"<span aria-hidden='true'>"
                  +"&times;"
                  +"</span>"
                  +"</a>"
                  +"</span>"
                  );
              }
           }else{
              $("#selectB").remove();
           }
       }); 
          // filter-closeB
            $("#filter").on("click","#filter-closeB",function(){
              $("#selectB").remove();
              $("#select2 a").removeClass("selected");
              refreshcards();
             });

            //Duration
         $("#select3 a").click(function() {
          $(this).toggleClass("selected").siblings().removeClass("selected");
          if($(this).hasClass("selected")) {
            if($("#selectC").length>0){
                 $("#filter-textC").text($(this).text());
              }else
              {
                $("#filter").append(
                  "<span class='filter-attr badge badge-pill badge-secondary' id='selectC'>"
                  +"Duration: "
                  +"<span id='filter-textC'>"
                  +$(this).text()
                  +"</span>"
                  +" "
                  +"<a class='tnpar btn btn-secondary btn-sm' id='filter-closeC'>"
                  +"<span aria-hidden='true'>"
                  +"&times;"
                  +"</span>"
                  +"</a>"
                  +"</span>"
                  );
              }
            }else{
              $("#selectC").remove();
           }
          }); 
           // filter-closeA
            $("#filter").on("click","#filter-closeC",function(){
              $("#selectC").remove();
              $("#select3 a").removeClass("selected");
              refreshcards();
             });
  
            //User Participation
         $("#select4 a").click(function() {
          $(this).toggleClass("selected").siblings().removeClass("selected");
          if($(this).hasClass("selected")) {
            if($("#selectD").length>0){
                 $("#filter-textD").text($(this).text());
               }else
               {
                $("#filter").append(
                  "<span class='filter-attr badge badge-pill badge-secondary' id='selectD'>"
                  +"User Participation: "
                  +"<span id='filter-textD'>"
                  +$(this).text()
                  +"</span>"
                  +" "
                  +"<a class='tnpar btn btn-secondary btn-sm' id='filter-closeD'>"
                  +"<span aria-hidden='true'>"
                  +"&times;"
                  +"</span>"
                  +"</a>"
                  +"</span>"
                  );
               }
            }else{
              $("#selectD").remove();
            }
          });
          // filter-closeA
            $("#filter").on("click","#filter-closeD",function(){
              $("#selectD").remove();
              $("#select4 a").removeClass("selected");
              refreshcards();
             });
            //Evaluation Types
         $("#select5 a").click(function() {
          $(this).toggleClass("selected").siblings().removeClass("selected");
          if($(this).hasClass("selected")) {
            if($("#selectE").length>0){
                 $("#filter-textE").text($(this).text());
               }else
               {
                $("#filter").append(
                   "<span class='filter-attr badge badge-pill badge-secondary' id='selectE'>"
                  +"Evaluation Types: "
                  +"<span id='filter-textE'>"
                  +$(this).text()
                  +"</span>"
                  +" "
                  +"<a class='tnpar btn btn-secondary btn-sm' id='filter-closeE'>"
                  +"<span aria-hidden='true'>"
                  +"&times;"
                  +"</span>"
                  +"</a>"
                  +"</span>"
                  );
               }
             }else{
              $("#selectE").remove();
             }
         });
         // filter-closeA
            $("#filter").on("click","#filter-closeE",function(){
              $("#selectE").remove();
              $("#select5 a").removeClass("selected");
              refreshcards();
             });
   

           // refresh after selecte in filter

           $(".tnpar").click(function (){

             var dp=$("#filter-textA").text();
             var td=$("#filter-textB").text();
             var d=$("#filter-textC").text();
             var up=$("#filter-textD").text();
             var et=$("#filter-textE").text();
              
              $.ajax({
            url: "/techniques/search",
            type: "get",
            dataType:"json",
            data: {
                tn_dp:dp,
                tn_td:td,
                tn_d:d,
                tn_up:up,
                tn_et:et
            },
            success: function(tn){  
                console.log(tn);
              if(tn.tns.length>0){
                function insertCard(){
                  if(tn.user_like_tn!=null){
                          var user_tn=[];
                         for(i=0;i<tn.user_like_tn.length;i++){
                          user_tn.push(tn.user_like_tn[i].tn_id);
                          }
                          console.log(user_tn);
                          for(i=0;i<tn.tns.length;i++){
                            if(user_tn.indexOf(tn.tns[i].tn_id) != -1){
                                $("#cards").append(
                                "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart like'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                              else{
                               $("#cards").append(
                               "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                               +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                               +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                               +"</a>"
                               +"<div class='card-footer'>"
                               +"<li class='fa fa-fw fa-heart notlike'>"
                               +"</li>"
                               +"</div>"
                               +"</div>"
                                );

                            }
                          }

                     }else{
                         for(i=0;i<tn.tns.length; i++){
                            $("#cards").append(
                           "<div class='tn-card card' id="+tn.tns[i].tn_id+">"
                           +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                           +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                           +"</a>"
                           +"<div class='card-footer'>"
                           +"<li class='fa fa-fw fa-heart notlike'>"
                           +"</li>"
                           +"</div>"
                           +"</div>"
                            );

                         }
                       } 
                 }

                   $("#cards").empty();
                    insertCard();
                }else{
                 $("#cards").text('New techniques coming soon.');
                }
              }  
           });

        });   

        
     


    // document-ready
    });



// $(".tnpar").on("click", function(){
//     if ($(this).hasClass("active")){
//         $(this).removeClass("active");
//         var target=$(this).attr("target");
//         webUI.delParama(target);

//     }else{
//         $(this).addClass("active");
//         var target=$(this).attr("target");
//         var value=$(this).attr("value");
//         webUI.addParama(target, value);
//     }
// })