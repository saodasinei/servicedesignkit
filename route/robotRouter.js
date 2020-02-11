const express=require('express');
const mysql=require('mysql');

const db=mysql.createPool({host:'localhost', user:'root',
password:'',database:'servicedesign'});


module.exports=function(){
	var router=express.Router();

	router.get('/', (req,res)=>{
		res.render('robot.ejs');
	});

	router.get('/storehistory', function(req, res) {
            
            console.log(req.query);
           if(!req.query.project_name){
                   req.query.project_name="undefined";
           }
           if(!req.query.tn_d){
                   req.query.tn_d="undefined";
           }

            var project_info=[
            [req.session.user, req.query.project_name,req.query.tn_dp, req.query.tn_d,
            req.query.tn_up]
            ];
              console.log(project_info);
              var sql= "INSERT INTO `user_advisor_history` (`user_id`,`project_name`,`project_dp`,`project_d`,`project_up`) VALUES ?";
              db.query(sql, [project_info], (err,result)=>{
                     if(err){

                          res.json({res_code:1,res_msg:'Something wrong when insert history.'});
                        }else{

                         res.json({res_code:2,res_msg:'Your search history is recored successfully! You can click \"My Techniques\" and find the history under \"Advisor History\".'});
                          }
                      });

        });


  router.get('/log', function(req,res){

         if(!req.query.project_name){
              req.query.project_name="undefined";
         }
         if(!req.query.user_say1){
              req.query.user_say1="undefined";
         }
         if(!req.query.feedback){
              req.query.feedback="no-feedback";
         }

         var log_info=[

            [req.query.user_say1, req.query.tn_dp, req.query.tn_d, req.query.tn_up, req.query.project_name, req.query.project_tn, req.query.if_help, req.query.feedback]

         ];
         // console.log(log_info);
         var sql= "INSERT INTO `timo_log` (`user_say`,`project_dp`,`project_d`,`project_up`,`project_name`, `project_tn`, `if_help`, `feedback`) VALUES ?";
              db.query(sql, [log_info], (err,result)=>{
                     if(err){

                          res.json({res_msg:'Something wrong when insert log.'});
                        }else{

                         res.json({res_msg:'Log is created successfully.'});
                          }
                      });

          




  });
 









	return router;
};