const express=require('express');
const mysql=require('mysql');
const multer=require('multer');
const common=require('../libs/common.js');



const db=mysql.createPool({host:'localhost', user:'root',
 password:'',database:'servicedesign'});

module.exports=function(){
	var router=express.Router();


    router.get('/', (req,res,next)=>{ 
             if(!req.session.user){
             	res.redirect('/');
             }else{
               db.query(`SELECT * FROM user_like_tn WHERE user_id='${req.session.user}'`, (err,data)=>{
                      if(err){
                           res.status(500).send("Somenthing wrong in searching form user_like_tn!");
                      }else{

                           user_like_tn=data;
                           next();

                      }
               }); 
              
		       }
	     });
    router.get('/', (req,res,next)=>{
               
               db.query(`SELECT name FROM user_info WHERE id='${req.session.user}'`, (err,data)=>{
                      if(err){
                           res.status(500).send("Somenthing wrong in searching form user_like_tn!");
                      }else{

                           user_name=data;
                           // console.log(user_name);
                           next();
                         }
                    });
          
    });
    router.get('/', (req,res,next)=>{
           
           db.query(`SELECT * FROM user_advisor_history WHERE user_id='${req.session.user}'`, (err,data)=>{
                   if(err){
                      res.status(500).send("Something wrong in searching form user_advisor_history!");
                     }else{

                       user_history=data;
                       next();
                       
                   // else
                   }
              // db.query user_advisor history
           });
    });

  router.get('/', (req,res)=>{

                // console.log(user_history);
                var project_tn=[];
                 db.query('SELECT * FROM tn_info', (err, data)=>{
                  
                   if(err){
                             res.status(500).send('Something wrong in database!').end();
                        }
                       else{
                            tns=data;
                            for (i=0; i < user_history.length; i++){
                                tn1=data;
                                if(user_history[i].project_d){
                                   tn2=tn1.filter(
                                         function(tn){
                                            return  tn["tn_d"]===user_history[i].project_d;
                                        });
                                    }else{
                                           tn2=tn1;
                                        }
                                     // console.log(tn1);

                                  tn3=tn2.filter(
                                      function(tn){
                                           return  tn["tn_dp"]===user_history[i].project_dp;
                                      });
                               
    
                                       // console.log(tn2);

                                    tn4=tn3.filter(
                                        function(tn){
                                             return  tn["tn_up"]===user_history[i].project_up;

                                        });
                                    
                                       // console.log(tn3);
                                       if(tn4.length>=1){
    
                                        project_tn.push({tn4})
                                        // console.log(project_tn);
                                       
                                         }else{
                                                     var rating=[];
                                                     var score=0;
                                                     for(j=0; j<tns.length; j++){
                                                     if (tns[j].tn_dp===user_history[i].project_dp){
                                                       score+=1;
                                                      }
                                                     if (tns[j].tn_d===user_history[i].project_d){
                                                        score+=1;
                                                     }
                                                      if (tns[j].tn_up===user_history[i].project_up){
                                                         score+=1;
                                                      } 
                                                         cr = score/5;
                                                         rating.push({tn_id:tns[j].tn_id,cr:cr});
                                                         score=0;                                  
                                                      }
                                                        function down(x,y){
                                                         return (x.cr < y.cr) ? 1:-1
                                                       }
                                                       rating.sort(down);     
                                                       // console.log(rating);
                                                       tn4=rating.slice(0,4);
                                                       // console.log(tn4)  
                                                       project_tn.push({tn4});

                                                }
                                       // for
                                   }
                                    // console.log(project_tn);
                                    res.render("user.ejs",{user_name:user_name,user_like_tn:user_like_tn,user_history:user_history,project_tn:project_tn});


                            }
    
                        });

                  
  });

   
   // add a techniqeu to like list
 router.get('/addlike', (req,res)=>{
         
         user_id=req.session.user;
         tn_id=req.query.tn_id;
         console.log("addlike",user_id,tn_id);
         var values=[
             [user_id,tn_id]
         ];
         var sql="INSERT INTO `user_like_tn` (`user_id`,`tn_id`) VALUES ?";
         db.query(sql, [values], (err, result)=>{
             if(err){
               res.json({res_code:21,res_msg:'Something wrong in database!'});
             }else{
               res.json({res_code:22,res_msg:'Add like successfully'});
             }

         });


         

});
 
 // remove a technique from like list
router.get('/removelike', (req,res)=>{
         
         user_id=req.session.user;
         tn_id=req.query.tn_id;
         console.log("removelike",user_id,tn_id);
         db.query(`DELETE FROM user_like_tn WHERE user_id='${user_id}' AND tn_id='${tn_id}'`, (err,result)=>{
            if(err){
                res.json({res_code:21,res_msg:'Something wrong in database!'});
            }else{
                res.json({res_code:23,res_msg:'Delete successfully!'});
            } 
         });


         

});


   
    // dletet search history

   router.get('/historydelete',(req,res)=>{

       if(!req.session.user){

          res.json({res_msg:"Warning!You can't do this before log in!"});

       }else{

       
        console.log(req.query.project_id);
        db.query(`DELETE FROM user_advisor_history where project_id='${req.query.project_id}'`, (err,data)=>{
           if(err){
              res.json({res_code:12,res_msg:"Something wrong in database!"});
            }else{

              res.json({res_code:13,res_msg:"History delete successfully!"});

           }

        });
      }

         
   });







	router.post('/login', (req,res)=>{

           var email=req.body.email;
           var password=common.md5(req.body.password+common.MD5_SUFFIX);
           db.query(`SELECT * FROM user_info WHERE email='${email}'`,
           	(err,data)=>{
           		if(err){
           			res.json({res_code:1,res_msg:'Connection fail.'});
           		}else{
           			if(data.length==0){
           			 res.json({res_code:2,res_msg:'Email or password not valid.'});
   
           			}else{
           				// password = common.md5(password+common.MD5_SUFFIX);
           				if(data[0].password==password){
                             req.session.user=data[0].id;
                             res.json({res_code:3,res_msg:'Log in successfully.'});
           				}else{
           					res.json({res_code:2,res_msg:'Email or password not valid.'});
           				}
           			}
           		}

           	});

		 
	});
	  

	router.post('/signup', (req,res)=>{
	    	// console.log(req.body);
        var username=req.body.username;
        var email=req.body.email;
        var password=req.body.password;
        var passwordconfirm=req.body.passwordconfirm;
        db.query(`SELECT * FROM user_info WHERE email='${email}'`,
           	(err,data)=>{
           		if(err){
           			console.log(err);
           			res.json({res_code:4,res_msg:'Connection fail.'});
           		}else{
           			if(username==""){
                       res.json({res_code:5,res_msg:'Please input username.'});
           			}else{

                         if(data.length>0){
           				  res.json({res_code:6,res_msg:'This email is already used.'});
           			      }
           			     else{
           			     	 if(email==""){
                                res.json({res_code:7,res_msg:'Please input email.'});
           			     	 }else{
           			     	   if(password.length<4){
           			             res.json({res_code:8,res_msg:'Passwords should not be shorter than 4.'});
 
           				       }else{
           				          if(password!=passwordconfirm){
           				           res.json({res_code:9,res_msg:'Please input the same password.'});
           				           }else{
                                  
                                  password = common.md5(password+common.MD5_SUFFIX);
                                  var values=[
                                        [username,email,password]
                                  ];
                                  // console.log(values);
                                  var sql= "INSERT INTO `user_info` (`name`,`email`,`password`) VALUES ?";
                                  db.query(sql, [values], (err,result)=>{
                                       if(err){
                                       	console.log(err);
                                       }else{
                                       	 res.json({res_code:10,res_msg:'Register successfully!'});
                                       }
                                  });
                                  
           				             }
           				          }
           			        	}
           			      }
           	   		}
           			
           		 }
		      });
		
	 });

	router.get('/logout', (req,res)=>{

		req.session.destroy(function(err){
             if(err){
               res.json({res_code:11,res_msg:'Fail to logout.'});
             }else{
             	
             	res.clearCookie('user_login');
              res.redirect('/');
             }

             
		 });
		
		
	});


   // suggest new techniques
   var uploadFolder='./public/upload';
   var storage=multer.diskStorage({
       
      destination: function (req,file,cb){
          cb(null, uploadFolder);
      },
      filename:function(req,file,cb){
          cb(null, file.originalname);
      }

   });
   var upload = multer({storage:storage});
    

   router.post('/suggestTechnique', upload.single('file'), (req,res)=>{



          // console.log(req.body);
          // console.log(req.file);
          var s_tn_info =[
          [req.session.user,req.body.tn_name,req.body.tn_dc,req.body.tn_is,req.body.tn_rf,req.body.tn_dp,
          req.body.tn_td,req.body.tn_d,req.body.tn_up,req.body.tn_et,req.body.tn_tag0,req.body.tn_tag1,
          req.body.tn_tag2,req.body.tn_tag3,req.body.tn_tag4]
          ];
          // console.log(s_tn_info);
          var sql= "INSERT INTO `s_tn` (`user_id`,`tn_name`,`tn_dc`,`tn_is`,`tn_rf`,`tn_dp`,`tn_td`,`tn_d`,`tn_up`,`tn_et`,`tn_tag0`,`tn_tag1`,`tn_tag2`,`tn_tag3`,`tn_tag4`) VALUES ?";
              db.query(sql, [s_tn_info], (err,result)=>{
                     if(err){
                          console.log(err);
                          res.send("Something wrong in database!");
                        }else{
                          res.send("Technique submit successfully!");
                        }
                      });

   });


   router.get('/stormboard', (req,res)=>{
               
               res.render('stormboard.ejs');

   });




	return router;
};