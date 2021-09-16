const express = require('express')

const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
const subscribersRouter = require('./routes/subscribers.ts')
app.use('/subscribers', subscribersRouter)

mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/rahul')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(`mongoose.connect ${error}`);
  });

//   const subscribersRouter = require('./routes/subscribers')
//   app.use('/subscribers', subscribersRouter)

// handle MongoDB connection errors
mongoose.connection.on('error', (error) => {
  console.log(`mongoose.connection ${error}`);
});

app.listen(3001, () =>
    console.log("Server started")
)