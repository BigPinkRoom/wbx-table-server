const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const apiTableRoute = require('./routes/api-table');
const errorHandler = require('./middleware/error');
const keys = require('./keys');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(helmet());

app.use('/api/table', apiTableRoute);
app.use(errorHandler);

async function start() {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT);
  } catch (error) {
    console.error(error);
  }
}

start();
