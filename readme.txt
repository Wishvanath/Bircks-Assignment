please clone this project 
---------------------------------
url : https://github.com/Wishvanath/bircks_assignment.git
----------------------------------


set updatabase in you postgres
-----------------------------------
export is I have given as brick_demo.sql








############################
go to the backend folder 
############################

// do npm install

// create .env file in root folder

// store these variable
PORT = 8000
JWT_SECRET = "abcdef"


// go to the connection.js file and rename the database file name which you have exported.


! Done now just type the npm start and see the console message .
 
You will get the serve is running and database is conneted message.



###########################################
go to the client folder 

// do npm install

//create .env file in the root directory

//store these variable
REACT_APP_API_URL = http://localhost:8000/api


! done it successfully

// npm start

now navigate to the url "http://localhost:3000"



#################################################
this assignment has partialy completed

// logout code has written but not implemented
// login session has not handle
// search bar api have not implemented
// edit and dispatch api has not integrated
// some but like after ordering need to clear the input box
// layout has not disign responsive

// this can be done successfully but need time and effort if any clearification I can simply the logic and implement too.



################################################
BUGINESS LOGIC MAY BE CHANGE
-------------------------------

// without logged in any user may not be order the bricks
// so if it is there would be two routes one like private user and another will be admin user 
// private user can order the number of bricks-- but they need to login
// admin user can see the all ther orders and update and dispatched it.






