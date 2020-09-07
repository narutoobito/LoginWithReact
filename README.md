**LOGINGINREACT**

When the project gets deployed the link will show up here.

This project is a safe login authentication webapp. Security is fulfilled by serverside using hashing the password and logging the signed up users in. The logged in user can see all user and their password. Database contains some default users.

**Running**

For running this project to your computer, first clone this repository and then cd to it then **run** `npm install` in your shell.
and then `cd frontend` then again `npm install`

**NOTE--You need two shells open , one for react and one for express**

for running express server, run `node server.js` which will start your server at localhost://5000

For running react-app in your browser, open another shell and `cd frontend` and then `npm start`it will run react at localhost://3000

If you get any error related to mongoose or mongodb then it should have occurred because your .env does not have MONGODB_URI .

Uri is in the .env environment variables which hasn't reached your computer , for getting the same result as my pc you can ask me to privately provide you the Uri.
Then you have to add that Uri in the server.js files Uri variable.

**ABOUT PROJECT** 
Important frameworks and libraries used --
Backend--Express bcrypt mongoose 
Database--Mongodb
Frontend--React Redux React-Redux Redux-Thunk 
Material-ui

This is a simple login project with authentication in serverside and used bcrypt to hash the password.
It hashes the password and uses it to log the user in . Loggedin user can see all username and passwords 
(being able to see other people's password is a security issue ,that's why this app has hashed password and real password just needs to be removed from the database
And the app will become safe for loggin , because of this minor change ).
Adding, updating, and removing users is implemented in backend , frontend lacks those features, currently.

(But you can still add, remove or update users by using fetch requests. You can use postman for this)
(Adding user- route '/add'; method POST; body: username, password
Removing user- route '/remove/:id' method DELETE;
Update user - route '/update/:is method PUT
)


Features that can be implemented easily if more time was there
• adding , removing , updating implementation from frontend
• jwt's token based security
• better styling
• 404 screen
