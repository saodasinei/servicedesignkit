const express=require('express');
const express_static=require('express-static');
const bodyParser=require('body-parser');
const multer=require('multer');
const multerObj=multer({dest:'./public/upload'});
const cookieParser=require('cookie-parser');
const session=require('express-session');
const consolidate=require('consolidate');
const mysql=require('mysql');
const expressRoute=require('express-route');



const db=mysql.createPool({host:'localhost', user:'root',
 password:'009682', database:'servicedesign'});


var server=express();

server.listen(3000);


//data request
server.use(bodyParser.urlencoded({extended:false}));

// server.use(multerObj.any());


//cookie session
server.use(cookieParser());
server.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'servicedesign',
    name:'user_login',
    cookie:{
        httpOnly: false,
        maxAge: 20*60*1000
    }
}));
// (
//     function(){
//         var keys=[];
//         for(var i=0; i<100000; i++){
//             keys[i]='a_'+Math.random();
//         }
//         server.use(cookieSession({
//             name: 'session',
//             keys: keys,
//             maxAge: 20*60*1000  //20min

//         }));
//     });



//template
server.set('view engine', 'html');
server.set('views', './views');
server.engine('html', consolidate.ejs);





//route
server.use('/robot', require('./route/robotRouter.js')());
server.use('/techniques', require('./route/tnRouter.js')());
server.use('/admin', require('./route/adminRouter.js')());
server.use('/user', require('./route/userRouter.js')());       
server.use('/', require('./route/webRouter.js')());





server.use(express.static('./public'));




