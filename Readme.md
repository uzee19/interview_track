# Interview Tracker
This project was done under guidance of coding club of IIT Guwahati. Server side programming was done on nodejs. In this we basically made a web app where one has to register on the server by giving their details, after which they can practice problems under different tags related to CP. They can also read intern experience of various students and can upload the their own experience also if they want. We have also deployed this web app using heroku. <br><br>
<b>Deployed version </b> - https://your-prep-partner.herokuapp.com/

## Dependencies used

   * [Mongoose](https://mongoosejs.com/docs/)
   * [EJS](https://ejs.co/)
   * [Express](http://expressjs.com/)
   * [Passport](http://www.passportjs.org/docs/)
   * [Admin-bro](https://adminbro.com/section-modules.html)
   * [Multer](https://www.npmjs.com/package/multer)
## Usage

In order to run the website locally on your computer , follow the steps given below:

* Clone this github repo.
* Open the terminal and change the directory to the downloaded folder then run the command 

```sh
 npm install
```

* The above command will install all the required packages and dependencies required for the project 
* The final step is to run the following command

```sh
 npm start
# Or run with Nodemon
 npm run dev

 ```
 `Visit http://localhost:5000`


 
 Before that open "config/keys.js" and add your MongoDB URI :<br>
 `module.exports = {
    MongoURI : 'mongodb+srv://<user>:password@cluster08451.am7f4.mongodb.net/<name of database>?retryWrites=true&w=majority'
}`

## Welcome page
![1](https://user-images.githubusercontent.com/62893472/108601451-a724f980-73c2-11eb-9440-28a86f22d005.png)


## Signin/Signup page
*You have to first register on this site to access all the resources.*
![2](https://user-images.githubusercontent.com/62893472/108601510-ece1c200-73c2-11eb-8c80-5de535a448f2.png)


## User Panel(Programming-Practice)
*You can practice questions related to all the topics mentioned. 
You can also contribute by adding questions that you think would be helpful for others.*
![3](https://user-images.githubusercontent.com/62893472/108601516-f23f0c80-73c2-11eb-9492-b408083417ca.png)


## Companies
*You can share your experience regarding your interview in one of these companies*
![4](https://user-images.githubusercontent.com/62893472/108601519-f79c5700-73c2-11eb-8415-451f8091d114.png)


## Admin auth
![5](https://user-images.githubusercontent.com/62893472/108601527-fff49200-73c2-11eb-92a4-2145034e4c46.png)


## Admin panel
*We have used admin-bro library for making an iteractive admin panel. Main purpose of the admin is to aprrove the questions and experiences added by the users. He can also control various other site services.* 
![6](https://user-images.githubusercontent.com/62893472/108601532-0420af80-73c3-11eb-995d-73f157a6400a.png)


## Interview experience
*This is how your shared experience will look like on website. You can add your experience also.*
![7](https://user-images.githubusercontent.com/62893472/108601536-07b43680-73c3-11eb-81d5-ede59e1a56ee.png)

![8](https://user-images.githubusercontent.com/62893472/108601541-0be05400-73c3-11eb-8757-d522580c2831.png)


 
 > This web app was built by me and my team :
   * [Pranshu Dahiya](https://github.com/PDahiya123)
   * [Mesharya M Choudhary](https://github.com/mesharyachoudhary/)
   * [Ujjwal Ranjan](https://github.com/uzee19/)
   * [Akshat Arun](https://github.com/akshatarun)
