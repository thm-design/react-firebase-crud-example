# Create a React.js application

Install Create React App:

 * `npm i -g create-react-app` (only need to do this once per computer)

 Create a React applcation:
  * `create-react-app yourappname`
  * `cd yourappname` (move into the new app directory)
  * `npm i` (install dependencies)
  * `npm start` (start the app in development mode, will run in http://localhost:3000)

 Build a production version of the react app
 * `npm run build`

# Install and deploy to Firebase

1) Login to https://firebase.google.com/ and go to the console (upper right hand corner of web page) and create a new app.
#### Go to you computer's terminal and run the following commands:


2) `npm i --save firebase && npm i -g firebase-tools` (Only need to do this once per computer)
3) `firebase login` (follow login instructions)
4) `firebase init`
	* Press spacebar to choose 'Database' and 'Hosting' then press enter
	![](http://g.recordit.co/d1mjatTgOo.gif)
	* Choose a Firebase project (choose the one you have created already)
	* Q: What file should be used for Database Rules? > press enter key
	* Q: What do you want to use as your public directory? > `build`
	* Q: Configure as a single-page app > `y`

5) Create a file in your react app called `fire.js` in the `src` folder.
6) Paste the following into that file:
```javascript
	/* COPY THE DATA FROM YOUR FIREBASE APP DASHBOARD (see image below) */
    import firebase from 'firebase'
    var config = {
      apiKey: "unreadablestuff",
      authDomain: "your-domain-name.firebaseapp.com",
      databaseURL: "https://your-domain-name.firebaseio.com",
      storageBucket: "your-domain-name.appspot.com",
      messagingSenderId: "123123123123"
    };
    var fire = firebase.initializeApp(config);
    export default fire;
```

* You can find your app data in you firebase app dashboard:
![firebase dasboard](http://g.recordit.co/BT3bumdVms.gif)

7) Go to your Firebase project dashboard, click on: `Database > Rules` and set 'read' and 'write' to `true`
![](http://g.recordit.co/HK06pHx5gb.gif)
