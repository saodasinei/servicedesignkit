const express=require('express');
const mysql=require('mysql');
const common=require('../libs/common');

const db=mysql.createPool({host:'localhost', user:'root',
 password:'', database:'servicedesign'});

module.exports=function(){
	var router=express.Router();
   



 router.get('/loginpage', (req, res)=>{

          res.render('admin_login.html');   

     });

 router.post('/login', (req,res)=>{
           // console.log(req.body);
           var email=req.body.email;
           var password=common.md5(req.body.password+common.MD5_SUFFIX);
           db.query(`SELECT * FROM admin WHERE email='${email}'`,
            (err,data)=>{
              if(err){
                res.json({res_msg:'Connection fail.'});
              }else{
                if(data.length==0){
                 res.json({res_msg:'Email or password not valid.'});
   
                }else{
                  // password = common.md5(password+common.MD5_SUFFIX);
                  if(data[0].password==password){
                             req.session.user=data[0].name;
                             // console.log(req.session.user);
                             res.json({res_code:0,res_msg:'Log in successfully.'});

                  }else{
                    res.json({res_code:1,res_msg:'Email or password not valid.'});
                  }
                }
              }
            });
       });


  router.get('/logout', (req,res)=>{

       req.session.destroy(function(err){
             if(err){
               res.json({res_code:2,res_msg:'Fail to logout.'});
             }else{
              
              res.clearCookie('user_login');
              res.redirect('/admin/loginpage');
             }

             
     });

  });


  
  // dashbord loading
  router.get('/dashbord', (req, res, next)=>{


       if(req.session.user!="admin"){

            res.redirect('/admin/loginpage')


       }else{

           db.query('SELECT count(*) as tn_num FROM tn_info',(err, data)=>{
             if(err){

                  res.status(500).send("Something wrong in database!").end();

             }else{

                  tn_num=data;
                  next();

               }

            });

         }
        
    });

   router.get('/dashbord', (req, res,next)=>{

        db.query('SELECT count(*) as stn_num FROM s_tn',(err, data)=>{
             if(err){

                  res.status(500).send("Something wrong in database!").end();

             }else{

                  stn_num=data;
                  next();

             }
         });

      
    });

    router.get('/dashbord', (req, res)=>{

         db.query('SELECT count(*) as user_num FROM user_info',(err, data)=>{
             if(err){

                  res.status(500).send("Something wrong in database!").end();

             }else{

                  user_num=data;
                  console.log(tn_num,user_num,stn_num);
                  res.render('admin_dashbord.ejs',{user_num:user_num,tn_num:tn_num, stn_num:stn_num}); 

             }
         });

    
             
    });
 



     // user manage

     router.get('/usermanage', (req, res)=>{


          if(req.session.user!="admin"){

               res.redirect('loginpage');


           }else{
                db.query('SELECT * FROM user_info', (err,data)=>{
            
             if(err){
                 res.status(500).send("Something wrong in database!").end();
             }else{

                 user_info= data;
             }
               
               res.render('admin_userManage.ejs',{user_info:user_info});    

         });
           }
        
        
             
    });

       // delete user
   
     router.get('/deleteuser', (req,res,next)=>{


             if(req.session.user!="admin"){

                   res.redirect('loginpage');


                }else{
                   req.query.user_id;
                   console.log(req.query.user_id);
               db.query(`DELETE FROM user_info WHERE id='${req.query.user_id}'`, (err,data)=>{
                if(err){
                    res.status(500).send("Fail to delete user!").end();
                }else{
                    
                    next();
                   

                }
             });
            }     
     });
    // delete like list
     router.get('/deleteuser', (req,res,next)=>{


               db.query(`DELETE FROM user_like_tn WHERE user_id='${req.query.user_id}'`, (err,data)=>{
                if(err){
                    res.status(500).send("Fail to delete user-like-list").end();
                }else{

                     next();

                }
             });
        
     });
     // delete advisor history
      router.get('/deleteuser', (req,res)=>{


               db.query(`DELETE FROM user_advisor_history WHERE user_id='${req.query.user_id}'`, (err,data)=>{
                if(err){
                    res.status(500).send("Fail to delete user-advisor-history!").end();
                }else{

                     res.json({res_code:1,res_msg:"User is deleted!"});

                }
             });
        
     });


      // suggessted techniques
      router.get('/newtechniques', (req, res)=>{

          if(req.session.user!="admin"){

                res.redirect('loginpage');


       }else{
           db.query('SELECT * FROM s_tn', (err,data)=>{
            
             if(err){
                 res.status(500).send("Something wrong in database!").end();
             }else{

                 stn_info= data;
             }
               
               res.render('admin_newTechniques.ejs',{stn_info:stn_info});    

         });
       }
        
        
             
    });


       // update information of new technique
       
       router.get('/newupdate', (req,res)=>{
           if(req.session.user!="admin"){
                 res.redirect('loginpage');



          }else{
               
                // console.log(req.query);
          
                db.query(`UPDATE s_tn SET tn_name='${req.query.tn_name}', tn_dc='${req.query.tn_dc}', tn_is='${req.query.tn_is}', tn_rf='${req.query.tn_rf}', tn_dp='${req.query.tn_dp}',  tn_td='${req.query.tn_td}', tn_d='${req.query.tn_d}', tn_up='${req.query.tn_up}', tn_et='${req.query.tn_et}', tn_tag0='${req.query.tn_tag0}', tn_tag1='${req.query.tn_tag1}', tn_tag2='${req.query.tn_tag2}', tn_tag3='${req.query.tn_tag3}', tn_tag4='${req.query.tn_tag4}'  WHERE tn_id='${req.query.tn_id}' `, (err,result)=>{
                    
                    if(err){

                       // console.log(err);

                       res.json({res_msg:"Something wrong when update!"});

                    }else{

                       res.json({res_msg:"Update succcessfully!"});

                    }

                });    
            }

       });


       

        // delete new techniques
       router.get('/newdelete', (req,res)=>{

           if(req.session.user!="admin"){
                res.redirect('loginpage');


       }else{

            db.query(`DELETE FROM s_tn where tn_id='${req.query.id}'`, (err, result)=>{
               if(err){

                   res.status(500).send("Something wrong in database!").end();

               }else{
                   
                   res.send({res_msg:"Delete successfully!"});

               }


          });

        } 

      });


       

       // add to technique library
      
      // router.post('/addtolibrary', (req,res, next)=>{

      //       if(!req.session.user){

      //          res.redirect('loginpage');

      //       }else{

      //         console.log(req.body);
              

      //         var tn_info =[
      //          [req.body.tn_name,req.body.tn_dc,req.body.tn_is,req.body.tn_rf,req.body.tn_dp,
      //          req.body.tn_td,req.body.tn_d,req.body.tn_up,req.body.tn_et
      //           ]
      //         ];
      //        console.log(tn_info);
      //        var sql= "INSERT INTO `tn_info` (`tn_name`,`tn_dc`,`tn_is`,`tn_rf`,`tn_dp`,`tn_td`,`tn_d`,`tn_up`,`tn_et`) VALUES ?";
      //         db.query(sql, [tn_info], (err,result)=>{
      //                if(err){
      //                     console.log(err);
      //                     res.send("Something wrong when insert into in_info!");
      //                   }else{
      //                    next();
      //                   }
      //                 });

      //         }

      // });


      // router.post('/addtolibrary', (req,res)=>{

      //          var tags=[];
      //         if(req.body.tn_tag0){
      //            tags.push(req.body.tn_tag0)
      //         }
      //         if(req.body.tn_tag1){
      //            tags.push(req.body.tn_tag1)
      //         }
      //         if(req.body.tn_tag2){
      //            tags.push(req.body.tn_tag2)
      //         }
      //         if(req.body.tn_tag3){
      //            tags.push(req.body.tn_tag3)
      //         }
      //         if(req.body.tn_tag4){
      //            tags.push(req.body.tn_tag4)
      //         }
      //         if(tags.length>0){

      //           db.query('SELECT * FROM tn_info',(err,data)=>{
      //              if(err){
      //               console.log(err);
      //              }else{
      //                tn_id=data.length+1;

      //                console.log(tn_id);
      //                console.log(tags);

      //                 for (i=0,i<tags.length; i++){

      //                    db.query(`INSERT INTO tn_tags valuses('${tn_id}','${tags[i]}')`, (err,result)=>{
                             
      //                        if(err){
      //                             res.send({"Something wrong when insert tags!"})
      //                        }else{
                                
      //                            console.log(tags[i]+"Insert");
                                
      //                        }
      //                    });
      //                     res.send("Add technique to library successfully!");
      //                 }
                     
      //              }
      //           });
      //         }else{

      //             res.send("Add technique to library successfully!");

      //         }

      // });
       
       

      

      // techniqeu library
       router.get('/techniquelibrary', (req, res)=>{


           if(req.session.user!="admin"){
                res.redirect('loginpage');



       }else{

           db.query('SELECT * FROM tn_info', (err,data)=>{
            
             if(err){
                 res.status(500).send("Something wrong in database!").end();
             }else{

                 tn_info= data;
                 for(i=0;i<tn_info.length;i++){
                    
                    tn_info[i].tn_is=tn_info[i].tn_is.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                    tn_info[i].tn_rf=tn_info[i].tn_rf.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                 }
             }
               
               res.render('admin_techniqueLibrary.ejs',{tn_info:tn_info});    

         });

       }
             
    });


       // timo log

        router.get('/timolog', (req,res)=>{

           if(req.session.user!="admin"){

               res.redirect('loginpage');


           }else{
            db.query('SELECT * FROM timo_log', (err,data)=>{

                if(err){

                   res.status(500).send("Something wrong in database!").end();

                }else{

                   log_info=data;

                }

                res.render('admin_timolog.ejs',{log_info:log_info});

             });
           }
        });












	return router;
};