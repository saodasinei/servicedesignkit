

// chatframe of timo scroll to bottom auto

function scrollTobottom(){
   var clientHeight = $("#f-content").height();
                var offsetHeight = $("#scontent").get(0).scrollHeight;
                if (offsetHeight > clientHeight) {
                    $("#f-content").scrollTop(offsetHeight - clientHeight+100);
                }
            }


function loading(){
                    $("#scontent").append(
                       "<li class='srobot loading'>"
                       +"<div>"
                       +"<span class='srobot-content'>"
                       + "<div class='spinner'>"
                       +"<div class='bounce1'></div>"
                       +"<div class='bounce2'></div>"
                       +"<div class='bounce3'></div>"
                       +"</div>"
                       +"</span>"
                       +"</div>"
                       +"</li>"
                         );

}

// function userloading(){
//                     $("#scontent").append(
//                        "<li class='suser userloading'>"
//                        +"<div>"
//                        +"<span class='srobot-content'>"
//                        + "<div class='suser-spinner'>"
//                        +"<div class='bounce1'></div>"
//                        +"<div class='bounce2'></div>"
//                        +"<div class='bounce3'></div>"
//                        +"</div>"
//                        +"</span>"
//                        +"</div>"
//                        +"</li>"
//                          );

// }





$(document).ready(function(){

      // timo mouseon
      $("#robot").mouseenter(function(){

           $("#ask").css("display","block");
      });

      $("#robot").mouseleave(function(){
           $("#ask").css("display","none");
      });

       $("#f-close").click(function(){

            $("#frame").css("display","none");

       });
       
        var tn_dp;
        var tn_d;
        var tn_up;
        var project_name;
        var project_tn;
        var if_help;
        var feedback;
        var user_say1;

        $("#asktimo").click(function(){
              if($("#frame").css("display")=="none"){
                  $("#frame").css("display","block");
                     $("#scontent").empty();
                     loading();
                      setTimeout(function(){
                          $(".loading").hide();
                          $("#scontent").append(
                            "<li class='srobot'>"
                            +"<img src='../icons/Timo.jpg' class='profile'>"
                            +"<div>"
                            +"<span class='srobot-content'>"
                            +"Hello, I'm Timo, a digital service design expert. What can I do for you?"         
                            +"</span>"                    
                            +"</div>"
                            +"</li>"
                            );
                      },1000);

              }else{
                  $("#frame").css("display","none");
                  $("#scontent").empty();
                  tn_dp="";
                  tn_d="";
                  tn_up=""
                  project_name="";
                  project_tn="";
                  if_help="";
                  feedback="";
                  user_say1="";
              }

           });
              

         // introduce and guidance to technique search
              $("#user-text1").keyup(function(event){
                        

                        if(event.keyCode=="13"){
                              
                              $("#user-text-ok1").click();

                        }

              });
              
              
              $("#user-text-ok1").click(function (){
                       
                       var user_text=$("#user-text1").val();
                       user_say1=user_text;
                       $("#scontent").append(
                        "<li class='suser'>"
                      +"<img src='../icons/user.jpg' class='profile'>"
                      +"<span class='suser-content'>"
                      + user_text
                      +"</span>"
                      +"</li>"
                        );
                       scrollTobottom();
                       $("#user-text1").val("");
                       user_text=user_text.toLowerCase();
                       var topic_timo=["hi","hello","who are you?", "who are you", "what can you do?","what can you do","what is your name?","what is your name","name","who","you"];
                       var topic_kit=["kit","karlsruhe institute of technology"];
                       var topic_iism=["iism","issd"];
                       var topic_project=["what's this", "what is this","web","platform"];
                       var topic_sd=["service","services", "technique","techniques","design","service design", "design technique", "design techniques", "digital service design technqiues", "dsd","i wang some techniques","i need some techniques","i need technique"];
                       
                       if(topic_kit.indexOf(user_text)>-1){
                              loading();
                              scrollTobottom();
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Karlsruhe Institute of Technology(German:Karlsruher Institut für Technologie) is a public research university and one of the largest research and educational institutions in Germany.</br>"
                              +"<a href='https://en.wikipedia.org/wiki/Karlsruhe_Institute_of_Technology'>Wiki</a></br>"
                              +"<a href='http://www.kit.edu/'>Home Page</a>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);


                       }
                       else if(topic_iism.indexOf(user_text)>-1){
                              loading();
                              scrollTobottom();
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Institute of Information Systems and Marketing "
                              +"<a href='https://www.iism.kit.edu/'>(IISM)</a></br>"
                              +"Research Group Information Systems and Service Design"
                              +"<a href='http://issd.iism.kit.edu/'>(ISSD)</a>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              



                       }

                       else if(topic_project.indexOf(user_text)>-1){
                               loading();
                           scrollTobottom();
                          setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"This web platform is a production of Simin He in his master thesis. The design techniques are organized based on a taxonomy. We offer you a filter to search techniques. Of course, if you have some problems, you can also ask me, I can help you to find some design techniques."
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              

                       }

                       else if(topic_timo.indexOf(user_text)>-1)
                       {

                           loading();
                           scrollTobottom();
                          setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Hello! My name is Timo. I'm an expert in the field of digital service design. I can help you find some design techniques. Please choose one option below to start."
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary st-kw'>"
                              +" Search with keywords."
                              +"</button></br>"
                              +"or</br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"</div>"         
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              

                           }else if(topic_sd.indexOf(user_text)>-1){

                               loading();
                               scrollTobottom();
                          setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Do you have any problem in finding a design technique? I’ll be happy to help you."
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary' id='needt-yes'>"
                              +"Yes"
                              +"</button>"
                              +"/"
                              +"<button class='btn btn-outline-secondary' id='needt-no'>"
                              +"No"
                              +"</button>"
                              +"</div>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();

                              },1000);
                              
                         }else{
                             loading();
                             scrollTobottom();
                             setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"If you need some design techniques, you can choose the following options." 
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary st-kw'>"
                              +" Search with keywords."
                              +"</button></br>"
                              +"or</br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"</div>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              
                         }
                          
             });



             $("#scontent").on("click","#needt-yes",function(){

                            $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + "yes"
                              +"</span>"
                              +"</li>"
                                 );
                          
                              loading();
                              scrollTobottom();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"I offer you some ways to find design techniques, choose one you like." 
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary st-kw'>"
                              +" Search with keywords."
                              +"</button></br>"
                              +"or</br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"</div>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              

             });


             $("#scontent").on("click", "#needt-no",function(){
                           $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + "no"
                              +"</span>"
                              +"</li>"
                                 );
                              loading();
                              scrollTobottom();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Ok. I’m always here. If you have any questions on service design techniques, you can ask me. Here is what I can do for you. " 
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary st-kw'>"
                              +" Search with keywords."
                              +"</button></br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"<button class='btn btn-outline-secondary st-ct'>"
                              +" Contact me"
                              +"</button>"
                              +"</div>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);

             });



             // search with key word
             
             $("#scontent").on("click", ".st-kw", function(){
                              $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + "Search with keyword."
                              +"</span>"
                              +"</li>"
                                 );
                              loading();
                              scrollTobottom();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Please give a keyword below."
                              +"<div class='suserinput'>"
                              +"<input type='text' id='keyword' name='keyword' placeholder='Keyword'>"
                              +"<a class='btn btn-outline-secondary keyword-ok s-ok'>OK</a>"
                              +"</div>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);


             });

             $("#scontent").on("keyup","#keyword",function(event){

                 if(event.keyCode=="13"){

                  
                      $(".keyword-ok").click();

                 }

             });

             $("#scontent").on("click", ".keyword-ok", function(){
                              var keyword=$("[name='keyword']").val();
                              var value=$("[name='keyword']").val().toLowerCase();
                              $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + keyword
                              +"</span>"
                              +"</li>"
                                 );
                              loading();
                              scrollTobottom();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                             
                              console.log(value);
                              $(".suserinput").remove();
                              $.ajax({
                                url: "/techniques/tnsearch",
                                type: "get",
                                dataType:"json",
                                data: {
                      
                                value: value
                     
                                },
                          success: function(tn){
                              console.log(tn);
                             

                            if(value.length>0 && tn.tns.length>0){
                                 
                               setTimeout(function(){
                               $(".loading").hide();
                               $("scontent").append(
                                     
                                );

                              for (i=0; i<tn.tns.length; i++){
                           
                                  $("#scontent").append(
                                    "<li class='srobot'>"
                                     +"<img src='../icons/Timo.jpg' class='profile'>"
                                     +"<div>"
                                     +"<span class='srobot-content'>"
                                     +"<div class='stn-card card' id="+tn.tns[i].tn_id+">"
                                     +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                                     +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                                     +"</a>"
                                     +"</div>"
                                     +"</span>"
                                     +"</div>"
                                     +"</li>"
                                       );
                                      scrollTobottom();
                                     
                                  }
                                 },1000);

                            
                             
                            }else{
                             setTimeout(function(){
                              $(".loading").hide();
                              
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"I didn't find related techniques, please type another keyword."
                              +"<div class='suserinput'>"
                              +"<input type='text keyword' id='keyword' name='keyword' placeholder='Keyword'>"
                              +"<a class='btn btn-outline-secondary keyword-ok s-ok'>OK</a>"
                              +"</div>"   
                              +"</div>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);


                            } 
                          // success function
                          }
                      // ajax
                      });

                    });





              // recommend 

             $("#scontent").on("click",".st-rc", function(){
                               $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + "I want to let you recommend."
                              +"</span>"
                              +"</li>"
                                 );
                     
                          loading();
                          scrollTobottom();
                          $(".timo-function").hide();
                          $(".robot-status").removeClass("srobot-waiting");
                          $(".robot-status").addClass("srobot");
                          setTimeout(function(){
                             $(".loading").hide();


                              if(!$.cookie('user_login')){
                                   $("#scontent").append(
                                  "<li class='srobot'>"
                                  +"<img src='../icons/Timo.jpg' class='profile'>"
                                  +"<span class='robot-content'>"
                                  +"Warm Prompt: If you want to save the recommended design techniques for your project, please log in firstly."
                                  +"</span>"
                                  +"</li>"
                                );
                             }

                           
                            
                             $("#scontent").append( 
                                "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<span class='robot-content'>"
                               +"Ok. In the following, I’ll ask you some multiple-choice questions to guide you in finding design techniques for your project.</br>"
                               +"Do you have a name for your project? "
                               +"<div class='timo-function'>"
                               +"<button class='btn btn-outline-secondary' id='project-name-yes'>"
                               +"Yes"
                               +"</button>"
                               +"/"
                               +"<button class='btn btn-outline-secondary' id='project-name-no'>"
                               +"No"
                               +"</button>"
                               +"</div>"          
                               +"</span>"
                               +"</li>"
                              );
                              scrollTobottom();

                     },1000);

                    
        
              });
              
                // ask project name
                $("#scontent").on("click","#project-name-yes", function(){ 

                              $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + "yes"
                              +"</span>"
                              +"</li>"
                                 );
                      
                           loading();
                           scrollTobottom();
                           $(".timo-function").hide();
                           $(".robot-status").removeClass("srobot-waiting");
                           $(".robot-status").addClass("srobot");

                          setTimeout(function(){
                             $(".loading").hide();        
                             $("#scontent").append( 
                                "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<span class='robot-content'>Please type the name of your project.</br>"
                               +"<div class='suserinput'>"
                               +"<input type='text' id='project-name' placeholder='Name of the Project'>"
                               +"<a class='btn btn-outline-secondary s-ok' id='project-name-ok'>OK</a>"
                               +"</div>"     
                               +"</span>"
                               +"</li>"
                             );

                             scrollTobottom();
                          },1000);

     

                });
                
                // no project name  ask design phase
                 $("#scontent").on("click","#project-name-no", function(){

                               $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + "no"
                              +"</span>"
                              +"</li>"
                                 );
                      
                           loading();
                           scrollTobottom();
                           $("#project-name").remove();
                           $(".timo-function").hide();
                           $(".robot-status").removeClass("srobot-waiting");
                           $(".robot-status").addClass("srobot");
                           setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append( 
                                "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<span class='robot-content'>Could you please let me know which one of the following phases can describe your project stage most appropriately? "
                               +"<div class='suserinput'>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='11' value='Planning'>"
                               +"<label class='form-check-label' for='exampleRadios1'>"
                               +"I just started my project."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='12' value='Low-Fidelity Prototyping'>"
                               +"<label class='form-check-label' for='exampleRadios2'>"
                               +"I’m sketching some prototype ideas."    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='13' value='High-Fidelity Prototyping'>"
                               +"<label class='form-check-label' for='exampleRadios3'>"
                               +"I’m working on detailed design."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='14' value='Release'>"
                               +"<label class='form-check-label' for='exampleRadios3'>"
                               +"I’m going to release the project."
                               +"</label>"
                               +"</div>"
                               +"<a class='btn btn-outline-secondary dp-ok s-ok'>Ok</a>"
                               +"</div>" 
                               +"</span>"
                               +"</li>"
                              );
                               scrollTobottom();
 
                          },1000);

     

                });
                 // with project name ask design phase
                 // 
                $("#scontent").on("keyup","#project-name",function(event){

                 if(event.keyCode=="13"){


                      $("#project-name-ok").click();

                    }

                 });

                $("#scontent").on("click","#project-name-ok", function(){
                      
                           project_name=$("#project-name").val();
                           $("#project-name").remove();
                           $(".suserinput").hide();
                           $(".robot-status").removeClass("srobot-waiting");
                           $(".robot-status").addClass("srobot");
                           console.log(project_name);
                            $("#scontent").append(
                            "<li class='suser'>"
                            +"<img src='../icons/user.jpg' class='profile'>"
                            +"<span class='suser-content'>"
                            + project_name
                            +"</span>"
                            +"</li>"
                             );
                            loading();
                             scrollTobottom();
                           setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append( 
                                "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<span class='robot-content'>Could you let me know which one of the following phases can describe your project stage most appropriately? "
                               +"<div class='suserinput'>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='11' value='Planning'>"
                               +"<label class='form-check-label' for='exampleRadios1'>"
                               +"I just started my project."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='12' value='Low-Fidelity Prototyping'>"
                               +"<label class='form-check-label' for='exampleRadios2'>"
                               +"I’m sketching some prototype ideas."    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='13' value='High-Fidelity Prototyping'>"
                               +"<label class='form-check-label' for='exampleRadios3'>"
                               +"I’m working on detailed design."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='dp' id='14' value='Release'>"
                               +"<label class='form-check-label' for='exampleRadios3'>"
                               +"I’m going to release the project."
                               +"</label>"
                               +"</div>"
                               +"<a class='btn btn-outline-secondary dp-ok s-ok'>Ok</a>"
                               +"</div>"   
                               +"</span>"
                               +"</li>"
                             );
                              scrollTobottom();
 
                          },1000);

     

                });
               


             // ask duration
             $("#scontent").on("click",".dp-ok",function(){
                           tn_dp= $('input:radio[name="dp"]:checked').val();
                           console.log(tn_dp);
                           if(!tn_dp){
                             alert("Please choose one option!")
                             
                           }else{

                             switch(tn_dp){
                               case "Planning":
                                   rsay_dp="You have just started your project. In this design phase, do you want to use the techniques in a short time duration or long time duration? "
                                   usay_dp="I just started my project.";
                                   break;
                               case "Low-Fidelity Prototyping":
                                   rsay_dp="You are prototyping your project. So do you want to use the techniques in a short time duration or long time duration?"
                                   usay_dp="I’m sketching some prototype ideas.";
                                   break;
                               case "High-Fidelity Prototyping":
                                   rsay_dp="You want to improve your project, right? Do you want to use the techniques in a short time duration or long time duration?"
                                   usay_dp="I’m working on detailed design."
                                   break;
                               case "Release":
                                   rsay_dp="Wow, you will release your project! Very good! Now, I want to know your time requirment. How long do you wish the implement duration of techniques."
                                   usay_dp="I’m going to release the project.";
                                   break;
                             }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                       
                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_dp
                               +"</span>"
                               +"</li>"
                             );
                             
                             loading();

                             scrollTobottom();

                          setTimeout(function(){
                          $(".loading").hide();
                          $("#scontent").append(
                            "<li class='srobot-waiting robot-status'>"
                            +"<img src='../icons/Timo.jpg' class='profile'>"
                            +"<div>"
                            +"<span class='srobot-content'>"
                            + rsay_dp
                            +"<div class='suserinput'>"
                            +"<div class='form-check'>"
                            +"<input class='form-check-input' type='radio' name='d' id='exampleRadios1' value='Short-Term Study'>"
                            +"<label class='form-check-label' for='exampleRadios1'>"
                            +"A few days "
                            +"</label>"
                            +"</div>"
                            +"<div class='form-check'>"
                            +"<input class='form-check-input' type='radio' name='d' id='exampleRadios2' value='Long-Term Study'>"
                            +"<label class='form-check-label' for='exampleRadios2'>"
                            +"More than a week "    
                            +"</label>"
                            +"</div>"
                            +"<div class='form-check'>"
                            +"<input class='form-check-input' type='radio' name='d' id='exampleRadios3' value='not'>"
                            +"<label class='form-check-label' for='exampleRadios3'>"
                            +"Time does not matter that much"
                            +"</label>"
                            +"</div>"
                            +"<a class='btn btn-outline-secondary s-ok' id='d-ok'>Ok</a>"
                            +"</span>"                    
                            +"</div>"
                            +"</li>"
                            );
                          scrollTobottom();
                      },1000);             
  

                 }
              });


             // ask user participation
              $("#scontent").on("click","#d-ok",function(){
                       tn_d=$('input:radio[name="d"]:checked').val();
                       console.log(tn_d);
                            if(!tn_d){
                             alert("Please choose one option!")
                             
                           }else{

                            switch(tn_d){
                               case "Short-Term Study":
                                   rsay_d="Do you have access to real users? If yes, do you want them to participate in the design activities?";
                                   usay_d="A few dayss";
                                   break;
                               case "Long-Term Study":
                                   rsay_d="Do you have access to real users? If yes, do you want them to participate in the design activities?"
                                   usay_d="More than a week";
                                   break;
                               case "not":
                                   rsay_d="Do you have access to real users? If yes, do you want them to participate in the design activities?"
                                   usay_d="Time doesn't matter";
                                   tn_d="";
                                   break;
                             }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                       
                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_d
                               +"</span>"
                               +"</li>"
                             );
                             

                             loading();
                             scrollTobottom();
                              setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append(
                               "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<div>"
                               +"<span class='srobot-content'>"
                               + rsay_d
                               +"<div class='suserinput'>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='up' id='exampleRadios1' value='User Attendance'>"
                               +"<label class='form-check-label' for='exampleRadios1'>"
                               +"Yes, potential users will participate in the design process. "
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<input class='form-check-input' type='radio' name='up' id='exampleRadios2' value='User Absence'>"
                               +"<label class='form-check-label' for='exampleRadios2'>"
                               +"No, users will not participate in the design process."    
                               +"</label>"
                               +"</div>"
                               +"<a class='btn btn-outline-secondary s-ok' id='up-ok'>Ok</a>"                   
                               +"</div>"
                               +"</span>"                    
                               +"</div>"
                               +"</li>"
                              );
                            scrollTobottom();
                         },1000);            

                       }

              });



              
              // present result
              $("#scontent").on("click","#up-ok",function(){

                       tn_up=$('input:radio[name="up"]:checked').val();
                       console.log(tn_up);
                         if(!tn_up){
                                alert("Please choose one option!")
                             
                           }else{

                            switch(tn_up){
                               case "User Attendance":
                                   rsay_up="I will select design techniques according to these characteristics.";
                                   usay_up="Potential users will will be involved in the design process.";
                                   break;
                               case "User Absence":
                                   rsay_up="I will select design techniques according to these characteristics."
                                   usay_up="No users participate in the design process.";
                                   break;
                              }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");

                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_up
                               +"</span>"
                               +"</li>"
                             );
                             
                             loading();
                             scrollTobottom();
                          setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append(
                               "<li class='srobot robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<div>"
                               +"<span class='srobot-content'>"
                               +"Thanks a lot for your answers.</br>"
                               +"Your project name is:"
                               +"<p class='user-r'>"+project_name+"</p>"
                               +"The characteristics you have chosen are:</br>"
                               +"Design Phase:"
                               +"<p class='user-r'>"+tn_dp+"<p>"
                               +"Duration:"
                               +"<p class='user-r'>"+tn_d+"</p>"
                               +"User Participation:"
                               +"<p class='user-r'>"+tn_up+"</p>"
                               + rsay_up
                               +"</span>"                    
                               +"</div>"
                               +"</li>"
                              );
                              scrollTobottom();
                
                             $.ajax({

                                url: "/techniques/search",
                                type: "get",
                                dataType:"json",
                                data: {
                                   tn_dp:tn_dp,
                                   tn_d:tn_d,
                                   tn_up:tn_up
                                 },
                                 

                              success:function(tn){

                                console.log(tn);
                              

                                if(tn.tns.length >= 1){

                                 for (i=0; i<tn.tns.length; i++){
                            
                                   $("#scontent").append(
                                    "<li class='srobot'>"
                                     +"<img src='../icons/Timo.jpg' class='profile'>"
                                     +"<div>"
                                     +"<span class='srobot-content'>"
                                     +"<div class='stn-card card' id="+tn.tns[i].tn_id+">"
                                     +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                                     +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                                     +"</a>"
                                     +"</div>"
                                     +"</span>"
                                     +"</div>"
                                     +"</li>"
                                       );
                                        project_tn=project_tn+"/"+tn.tns[i].tn_name;
                                      }
                                       $("#scontent").append(
                                         "<li class='srobot-waiting robot-status'>"
                                        +"<img src='../icons/Timo.jpg' class='profile'>"
                                        +"<div>"
                                        +"<span class='srobot-content'>"
                                        +"Do you want to store this search history?</br>"
                                        +"<div class='timo-function'>"
                                        +"<button class='btn btn-outline-secondary history-yes'>"
                                        +"Yes"
                                        +"</button>"
                                        +"/"
                                        +"<button class='btn btn-outline-secondary history-no'>"
                                        +"No"
                                        +"</button>"
                                        +"</div>"           
                                        +"</span>"                    
                                        +"</div>"
                                        +"</li>"
                                        );
                                         

                                   }else{

                                      $.ajax({
                                       url: "/techniques/timosearch",
                                       type: "get",
                                       dataType:"json",
                                       data: {
                                             tn_dp:tn_dp,
                                             tn_d:tn_d,
                                             tn_up:tn_up
                                          },
                                 

                                      success:function(tn){
                                        console.log(tn);
                                        
                                         $("#scontent").append(
                                        "<li class='srobot robot-status'>"
                                        +"<img src='../icons/Timo.jpg' class='profile'>"
                                        +"<div>"
                                        +"<span class='srobot-content'>"
                                        +"The required techniques are not found in technique library. The following are some related techniques that may be helpful.</br>"
                                        +"</span>"                    
                                        +"</div>"
                                        +"</li>"
                                        );


                                         for(i=0; i<4; i++){
                                           $("#scontent").append(
                                            "<li class='srobot'>"
                                           +"<img src='../icons/Timo.jpg' class='profile'>"
                                           +"<div>"
                                           +"<span class='srobot-content'>"
                                           +"<div class='stn-card card' id="+tn.tns[i].tn_id+">"
                                           +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                                           +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_id+".jpg' alt='Card image cap'>"
                                           +"</a>"
                                           +"</div>"
                                           +"</span>"
                                           +"</div>"
                                           +"</li>"
                                             );   
                                              project_tn=project_tn+"/"+tn.tns[i].tn_name;                            
                                           }

                                         
                                         $("#scontent").append(
                                         "<li class='srobot-waiting robot-status'>"
                                        +"<img src='../icons/Timo.jpg' class='profile'>"
                                        +"<div>"
                                        +"<span class='srobot-content'>"
                                        +"Do you want to store this search history?</br>"
                                        +"<div class='timo-function'>"
                                        +"<button class='btn btn-outline-secondary history-yes'>"
                                        +"Yes"
                                        +"</button>"
                                        +"/"
                                        +"<button class='btn btn-outline-secondary history-no'>"
                                        +"No"
                                        +"</button>"
                                        +"</div>"          
                                        +"</span>"                    
                                        +"</div>"
                                        +"</li>"
                                        );

                                          // success
                                         }
                                         // ajax  
                                       });
                                   }
                                // success
                                 }
                             // ajax
                             });

                         },1000);   
                                           

                     // else
                      }

                    // up-ok click function
                  });
                    
                    $("#scontent").on("click",".history-yes",function(){

                        if($.cookie('user_login')){

                              loading();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                                 
                                  $.ajax({
                                     url: "/robot/storehistory",
                                     type: "get",
                                     dataType:"json",
                                     data: {
                                             tn_dp:tn_dp,
                                             tn_d:tn_d,
                                             tn_up:tn_up,
                                             project_name:project_name,
                             

                                          },
                                       success:function(result){
                                           console.log(result);

                                           switch (result.res_code){
                                             case 1:
                                               $(".loading").hide();
                                              
                                               $("#scontent").append(
                                                 "<li class='srobot robot-status'>"
                                               +"<img src='../icons/Timo.jpg' class='profile'>"
                                               +"<div>"
                                               +"<span class='srobot-content'>"
                                               + result.res_msg         
                                               +"</span>"                    
                                               +"</div>"
                                               +"</li>"
                                             );


                                               break;


                                           case 2:
                                               $(".loading").hide();
                                               $("#scontent").append(
                                                "<li class='srobot robot-status'>"
                                               +"<img src='../icons/Timo.jpg' class='profile'>"
                                               +"<div>"
                                               +"<span class='srobot-content'>"
                                               +result.res_msg     
                                               +"</span>"                    
                                               +"</div>"
                                               +"</li>"
                                               );

                                                break;
                                            }


                                           $("#scontent").append(
                                           "<li class='srobot-waiting robot-status'>"
                                           +"<img src='../icons/Timo.jpg' class='profile'>"
                                           +"<div>"
                                           +"<span class='srobot-content'>"
                                           +"Are those recommended design techniques helpful to you?" 
                                           +"<div class='timo-function'>"
                                           +"<button class='btn btn-outline-secondary if_help-yes'>"
                                           +"Yes"
                                           +"</button>"
                                           +"/"
                                           +"<button class='btn btn-outline-secondary if_help-no'>"
                                           +"No"
                                           +"</button></br>"
                                           +"</div>" 
                                           +"</span>"                    
                                           +"</div>"
                                           +"</li>"
                                           );
                                           scrollTobottom();

                                           
                                      // success
                                      }

                                  });
                               

                              

                              },1000);
                              
                             
                        }else{
                               
                               alert("This function is aviliable only after login.")
                      
                          }



                    });

                    $("#scontent").on("click",".history-no",function(){

                           $(".timo-function").hide();
                           $(".robot-status").removeClass("srobot-waiting");
                           $(".robot-status").addClass("srobot");
                           loading();
                           scrollTobottom();


                           setTimeout(function(){
                             $(".loading").hide();
                             
                             $("#scontent").append(
                                   "<li class='srobot-waiting robot-status'>"
                                  +"<img src='../icons/Timo.jpg' class='profile'>"
                                  +"<div>"
                                  +"<span class='srobot-content'>"
                                  +"Are those recommended design techniques helpful to you?" 
                                  +"<div class='timo-function'>"
                                  +"<button class='btn btn-outline-secondary if_help-yes'>"
                                  +"Yes"
                                  +"</button>"
                                  +"/"
                                  +"<button class='btn btn-outline-secondary if_help-no'>"
                                  +"No"
                                  +"</button>"
                                  +"</div>"
                                  +"</span>"                    
                                  +"</div>"
                                  +"</li>"
                                  );



                              scrollTobottom();

                           },1000);
                          
                    });




                     $("#scontent").on("click",".if_help-yes",function(){
  

                             if_help="yes"
                             $(".timo-function").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                             loading();
                             scrollTobottom();
                            
                             setTimeout(function(){
                             $(".loading").hide();
                             
                             $("#scontent").append(
                                   "<li class='srobot-waiting robot-status'>"
                                  +"<img src='../icons/Timo.jpg' class='profile'>"
                                  +"<div>"
                                  +"<span class='srobot-content'>"
                                  +"Do you have any suggestions for me?"
                                  +"<textarea class='feedback'></textarea></br>" 
                                  +"<button class='btn btn-outline-secondary feedback-ok'>"
                                  +"OK"
                                  +"</button>"
                                  +"</span>"                    
                                  +"</div>"
                                  +"</li>"
                                  );



                              scrollTobottom();

                           },1000);

                           
                           




                     });


                      $("#scontent").on("click",".if_help-no",function(){
                             
                              if_help="no";
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              loading();
                              scrollTobottom();

                              setTimeout(function(){
                              $(".loading").hide();
                             
                              $("#scontent").append(
                                   "<li class='srobot-waiting robot-status'>"
                                  +"<img src='../icons/Timo.jpg' class='profile'>"
                                  +"<div>"
                                  +"<span class='srobot-content'>"
                                  +"Do you have any suggestions for me?"
                                  +"<textarea class='feedback'></textarea></br>" 
                                  +"<button class='btn btn-outline-secondary feedback-ok'>"
                                  +"OK"
                                  +"</button>"
                                  +"</span>"                    
                                  +"</div>"
                                  +"</li>"
                                  );



                              scrollTobottom();

                           },1000);





                     });
  







                     $("#scontent").on("click",".feedback-ok",function(){

                              feedback=$(".feedback").val();
                              $.ajax({

                                   url: "/robot/log",
                                     type: "get",
                                     dataType:"json",
                                     data: {
                                             
                                             tn_dp:tn_dp,
                                             tn_d:tn_d,
                                             tn_up:tn_up,
                                             project_name:project_name,
                                             project_tn:project_tn,
                                             user_say1:user_say1,
                                             if_help:if_help,
                                             feedback:feedback
                             

                                          },
                                       success:function(result){

                                            console.log(result);
                        
                                            tn_dp="";
                                            tn_d="";
                                            tn_up="";
                                            project_name="";
                                            project_tn="";
                                            if_help="";
                                            feedback="";
                                            user_say1="";



                                       }



                              });

                              $(".feedback").remove();
                              $(".feedback-ok").remove();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");



                        
                             loading();
                             scrollTobottom();
                           setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append(
                             "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<div>"
                               +"<span class='srobot-content'>"
                               +"Thank you very much! You can try some other functions or contact me if you have some feedbacks.</br>"
                               +"<div class='timo-function'>"
                               +"<button class='btn btn-outline-secondary st-kw'>"
                               +" Search with keywords."
                               +"</button></br>"
                               +"<button class='btn btn-outline-secondary st-rc'>"
                               +" Let me recommend."
                               +"</button>"
                               // +"<button class='btn btn-outline-secondary st-ct'>"
                               // +" Contact me"
                               // +"</button>"
                               +"</div>"      
                               +"</span>"                    
                               +"</div>"
                               +"</li>"
                              );

                                scrollTobottom();

                           },1000);



                     });







         










         // document ready function
});