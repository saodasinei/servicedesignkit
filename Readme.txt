The web application "Technique Advisor" is a product of Simin He in his Master Thesis.This application is developed to help digital service designers to select appropriate techniques for thieir design project. The application includes two different ways to search technqiues: a classification platforma and a conversation agent.

Because some personal habits of coding may confused the future developer.
This file annotate the configuration of running environment and the file structure. 
The information below could be very important if you are going to extend this application.



Environment Configuration:

Server
node.js v8.11.2
 -dependent packge
  express express-static body-parser multer cookie-parser expression-session consolidate ejs
  mysql express-route


Web(CSS framework)
Bootstrap  v4.0


Database
Mysql v5.7





File Structure
app
 |
 |---libs           // self-defined modules
 |---node_modules   // node system modules
 |---public
       |
       |---css
            |
            |---admin
                  |---font-awesome   //  font and icons
                  |--admin.css       //  self-defined css of adminpage
                  |--sb-admin.css    //  template css
            |---techniques
                  |--techniques.css  //  css of classification page
                  |--tnshow.css      //  css of detailed technique information 
            |--home.css      // home page
            |--nav.css       // navigation 
            |--robot.css     // fullscreen of timo
            |--srobot.css    // smallscreen of timo
            |--user.css      // individual page

       |---js
            |--admin.js      // admin manipulation
            |--home.js       // 
            |--jquery.easing.js 
            |--jquery-cookie.js 
            |--robot.js      // conversation control of fullscreen timo
            |--sb-admin.js   // adminpage action
            |--srobot.js     // conversation control of smallscreen timo
            |--techniques.js // classificaiton of techniques
            |--tnshow.js     // detailed technique information
            |--user.js       // user manipulation (login, sinup, add to likelist,delete...) 


       |---icons   //icons
       |---images  //technique cards
       |---upload  //image of suggested techniques

 |---route  // backend logic code (data selection and filtering)
       |
       |--adminRouter.js    //  user action control
       |--robotRouter.js    //  timo action control
       |--tnRouter.js       //  technique classifcation control
       |--userRouter.js     //  user action control
       |--webRouter.js      //  web request control
 |---views

       |
       |--home.html
       |--techniqeus.html
       |--tnshow.ejs
       |--robot.ejs
       |--user.html
       |--imprint.html
       |--admin_dashbord.html
       |--admin_userManage.ejs
       |--admin_newTechniqeus.ejs
       |--admin_techniqueLibrary.ejs
       |--admin_timolog.ejs
       |--admin_login.html

 |--server.js //  entrance of the application

