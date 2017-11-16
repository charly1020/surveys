//code to start up our app

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const User = mongoose.model('users');

const app = express();

//midleware #1
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//midleware #2
app.use( passport.initialize());

//midleware #3
app.use( passport.session());

require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
