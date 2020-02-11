const express=require('express');
const mysql=require('mysql');

const db=mysql.createPool({host:'localhost', user:'root',
 password:'',database:'servicedesign'});

module.exports=function(){
	var router=express.Router();
   

  router.get('/', (req, res)=>{

        res.render('techniques.html');      
    });


   // search by classification of experts
   router.get('/search', (req, res, next)=>{

        db.query('SELECT * FROM tn_info', (err, data)=>{
                if(err){
                        log(err);
                        res.status(500).send('Something wrong in database（tn_info）!').end();
                }
                else{
                     tns=data;
                     next();
                      
                }         
         });
     });
  router.get('/search', (req ,res, next)=>{
          if(req.session.user){
             db.query(`SELECT * FROM user_like_tn where user_id='${req.session.user}'`, (err,data)=>{
                  if(err){
                     res.status(500).send('Something wrong in database(user_like_tn)!').end();
                  }else{
                     user_like_tn=data;
                     tns=tns;
                     next();

                  }
             });

          }else{
                user_like_tn=null;
                tns=tns;
                next();
          }

});
 
router.get('/search', (req, res)=>{ 
                if(req.query["tn_dp"]){
                     tn1=tns.filter(
                     function(tn){
                        return  tn["tn_dp"]===req.query["tn_dp"];
                    });
                 }else{
                    tn1=tns;
                 }

                 if(req.query["tn_td"]){
                      tn2=tn1.filter(
                      function(tn){
                        return  tn["tn_td"]===req.query["tn_td"];
                   });
                }else{
                    tn2=tn1;
                }
                if(req.query["tn_d"]){
                      tn3=tn2.filter(
                      function(tn){
                        return  tn["tn_d"]===req.query["tn_d"];
                   });
                }else{
                     tn3=tn2;
                }
                if(req.query["tn_up"]){
                      tn4=tn3.filter(
                      function(tn){
                        return  tn["tn_up"]===req.query["tn_up"];
                   });
                }else{
                    tn4=tn3;
                }
                if(req.query["tn_et"]){
                      tn5=tn4.filter(
                      function(tn){
                        return  tn["tn_et"]===req.query["tn_et"];
                   });
                }else{
                    tn5=tn4;
                }
                if(user_like_tn!=null){
                  res.send({tns:tn5,user_like_tn:user_like_tn})
                }else{

                  res.send({tns:tn5,user_like_tn:user_like_tn});
                
                }

 
        });


 // search by input of text
router.get('/tnsearch', (req,res,next)=>{
           if(req.session.user){
              db.query(`SELECT * FROM user_like_tn where user_id='${req.session.user}'`, (err,data)=>{
                  if(err){
                     res.status(500).send('Something wrong in database!').end();
                  }else{
                     user_like_tn=data;
                     next();

                  }
             });

          }else{
                user_like_tn=null;
                next();
          }
       

   });

router.get('/tnsearch', (req,res)=>{
            
            // console.log(req.query);
            db.query(`SELECT * FROM tn_info WHERE tn_name like concat('%','${req.query.value}','%')`, (err, data)=>{
                if(err){
                        res.status(500).send('Something wrong in database!').end();
                }
                else{   

                        tns=data;
  
                        res.send({tns:tns,user_like_tn:user_like_tn});

                             
                }
              });         
});


 // search by tags
 router.get('/tag',(req,res,next)=>{

             if(req.session.user){
              db.query(`SELECT * FROM user_like_tn where  user_id='${req.session.user}'`, (err,data)=>{
                  if(err){
                     res.status(500).send('Something wrong in database!').end();
                  }else{
                     user_like_tn=data;
                     next();

                  }
             });

          }else{
                user_like_tn=null;
                next();
          }

 });

 router.get('/tag',(req,res)=>{
        // console.log(req.query.tag_number);
        db.query("SELECT * FROM tn_tags_search", (err, data)=>{
               
              if(err){
                     res.status(500).send('Something wrong in database!').end();
              }else{
                     tns=data;
                    function down(a,b){
                          return (a[req.query.tag_number]<b[req.query.tag_number]) ? 1:-1
                    }
                    tns.sort(down);
                    tns=tns.filter(
                      function(tn){
                        return  tn[req.query.tag_number]>5;
                   });

                   
                   res.send({tns:tns,tag_number:req.query.tag_number,user_like_tn:user_like_tn});

              }


        });


 });
 
 // show the details of one technique



 // get tags of the technique
router.get('/details', (req,res,next)=>{
      if(req.query.tn_id){
          var id=req.query.tn_id;
          var sql='SELECT * FROM tn_tags WHERE tn_id=?';
          db.query(sql, id, (err,data)=>{
             if(err){
               res.status(500).send("Something wrong in database!").end();
             }else{
               tn_tags=data;
               next();
             }

          });



      }
});

//get technique set except the selected technique

router.get('/details',(req,res,next)=>{
   if(req.query.tn_id){
      var id=req.query.tn_id;
      var sql='SELECT * FROM tn_info WHERE tn_id<>?'
      db.query(sql, id, (err,data)=>{
           if(err){
               res.status(500).send("Something wrong in database!").end()
           }else{
               tns=data;
               // console.log(tns);
               next();
          }
     });
    }else{
       res.status(404).send('Can not find required page.').end();

    }
});

 // get user like information
router.get('/details',(req,res,next)=>{
   if(req.session.user){
      db.query(`SELECT * FROM user_like_tn WHERE user_id='${req.session.user}' AND tn_id='${req.query.tn_id}'`, (err,data)=>{
           if(err){
               res.status(500).send("Something wrong in database!").end()
           }else{
               tn_like=data;
               next();
               // console.log("tn_like:",tn_like);
          }
     });
    }else{
            tn_like=[];
            next();

    }
});
 

router.get('/details', (req, res)=>{
          if(req.query.tn_id){
                var id=req.query.tn_id;
                var sql='SELECT * FROM tn_info WHERE tn_id=?';
                db.query(sql, id,
                 (err, data)=>{
                        if(err){
                                res.status(500).send('Something wrong in data.').end();
                        }else{
                             if(data.length==0){
                                res.status(404).send('Can not find required page.').end();
                             }else{
                                
                                var tnDate=data[0];
                                tnDate.tn_is=tnDate.tn_is.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                                tnDate.tn_rf=tnDate.tn_rf.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                                var rating=[];
                                var score=0;
                                 for(i=0; i<tns.length; i++){
                                    if (tns[i].tn_dp==tnDate.tn_dp){
                                          score+=1;
                                    }
                                    if (tns[i].tn_d===tnDate.tn_d){
                                           score+=1;
                                    }
                                    if (tns[i].tn_td===tnDate.tn_td){
                                          score+=1;
                                    } 
                                    if (tns[i].tn_up===tnDate.tn_up){
                                          score+=1;
                                    }
                                    if (tns[i].tn_et===tnDate.tn_et){
                                          score+=1;
                                    }
                                     cr = score/5;
                                     rating.push({tn_id:tns[i].tn_id,cr:cr});
                                     score=0;
                                 }
                                 // console.log(rating);
                                 function down(x,y){
                                   return (x.cr < y.cr) ? 1:-1
                                 }
                                 rating.sort(down);
                                 // console.log(rating);
                                 tn_f=rating.filter(
                                 function(tn){
                                     return  tn["cr"]>=0.6;
                                 });
                                 tn_c=rating.filter(
                                  function(tn){
                                     return tn["cr"]>=0.2 && tn["cr"]<0.6;

                                 });
                                 // console.log("comparable:",tn_f,"complementary:",tn_c);
                                 // console.log(tn_tags);
                                 res.render('tnshow.ejs', {
                                 tn_data:tnDate, tn_like:tn_like, tn_f:tn_f,tn_c:tn_c,tn_tags:tn_tags
                               });
                             }
                        }
                 });
          }else{
             res.status(404).send('Can not find required page.').end();
          }
        
});


 router.get('/timosearch',(req,res)=>{

           var tn_dp=req.query.tn_dp;
           var tn_d=req.query.tn_d;
           var tn_up=req.query.tn_up;
            db.query('SELECT * FROM tn_info', (err,data)=>{
                   
                   if(err){
                            res.status(500).send("Soment thing wrong!").end();
                   }else{

                         tns=data;
                         var rating=[];
                         var score=0;
                         for(i=0; i<tns.length; i++){
                                  if (tns[i].tn_dp===tn_dp){
                                          score+=1;
                                    }
                                    if (tns[i].tn_d===tn_d){
                                           score+=1;
                                    }
                                    if (tns[i].tn_up===tn_up){
                                          score+=1;
                                    } 
                                    cr = score/5;
                                    rating.push({tn_id:tns[i].tn_id,tn_name:tns[i].tn_name,cr:cr});
                                    score=0;                                  
                                 }
                                function down(x,y){
                                    return (x.cr < y.cr) ? 1:-1
                                    }
                                    rating.sort(down);     
                               // console.log(rating);
                               res.send({tns:rating});

                   }
            });          
 

 });







	return router;
};