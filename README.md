# Anti-Social

Social Media App made using Node-js and MongoDB is a full-fledged app allowing users to post blogs, Interacting with
their friends and many more. Web application with authentication and session management using MongoDB and Passport.js.

Prerequisites
Before running the application, make sure you have the following installed:

1. Node.js
2. MongoDB

### Setup

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the required dependencies by running the following command:

* npm install

### How to Run

1. Make sure your MongoDB server is running.

2. Start the Express server by running the following command:


* npm start
  
3. The application will be available at http://localhost:8888.

### Features
* Authentication using Passport.js (Local Strategy)
* Session management with Express-session and MongoDB
* SCSS support using node-sass-middleware
* Flash messages for notifications
* EJS templating engine with layouts
* Static file support

![project2](https://user-images.githubusercontent.com/79148315/187667563-b3abb428-b2f1-4eae-aaff-9a4cfdac1c2e.png)

![image](https://user-images.githubusercontent.com/79148315/187760337-876fd0f1-1116-432f-9a55-7466dcdb0cd7.png)
![image](https://user-images.githubusercontent.com/79148315/187760406-590f7503-7c79-4bc5-b915-701e22785ba9.png)
![image](https://user-images.githubusercontent.com/79148315/187760478-c14ae5c5-9ba8-45e8-834c-a161c0568564.png)
  
### Project Structure
The project is organized as follows:

* config/: Contains configuration files.
* mongoose.js: Configures MongoDB connection.
* passport-local-strategy.js: Sets up the Passport Local Strategy for authentication.
* middleware.js: Contains custom middleware functions.
* routes/: Contains route files.
* index.js: Defines the routes for different views.
* static/: Contains static files such as styles (SCSS/CSS), images, etc.
* views/: Contains EJS views.
* app.js: Main application file where the Express app is configured and initialized.
* package.json: Contains information about the project and its dependencies.

### Available Routes
* /: Home page of the application.
* /user/sign-up: Sign up page.
* /user/sign-in: Sign in page.
* /user/profile: User profile page (requires authentication).
### Customize
Feel free to modify and extend this application as per your requirements. You can add more routes, implement additional features, or enhance the existing ones.

Credits
This application is based on the Express.js framework and utilizes various open-source libraries for authentication and session management.


