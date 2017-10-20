## STEPS TO SETUP A BASIC EXPRESS APP
1. Create project folder: Run `mkdir prayer-app && cd prayer-app`
2. Initialize npm and `package.json`: Run `npm init` *I changed the start-up file from `index.js` to `app.js`. This is optional*.
3. Install express and mongoose and save dependencies to `package.json`: Run `npm install express mongoose --save`
4. Create the start-up file: Run `touch app.js`
5. Create the basic directories: Run `mkdir models routes`
6. Create the files inside `models`: Run `cd models && touch prayer.js index.js`
7. Create the files inside `routes`: Run `cd routes && touch prayers.js`
8. Setup basic route and get server up"
```
// UTILITIES
const port = 8080;
var express = require('express'),
    app = express()

// ROUTES
app.get('/',(req,res)=>{
  res.send('HELLO FROM ROOT ROUTE');
});
// SERVER
app.listen(port, ()=>{
  console.log('APP IS RUNNING ON PORT: ' + port);
})

```
9. READY TO CODE!

## MODELS
- WORKOUT
- EXERCISE
  + title: String
  + level: String
  + category: String
  + tags[]
  + favorited: false
  + addedToWorkout: false
  + createdDate: Date.now
- USER
  + name
  + email
  + workouts[]
  + favorites[]
