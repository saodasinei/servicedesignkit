const express=require('express');


module.exports=function(){
	var router=express.Router();



	router.get('/', (req,res)=>{

		res.render('home.html');		
	});


    router.get('/imprint',(req,res)=>{

    	res.render('imprint.html');

    });
     router.get('/privacy',(req,res)=>{

    	res.render('privacy.html');

    });










	  router.get('/index', (req,res)=>{
        
        res.render('index.html');
    });


    











	return router;


};