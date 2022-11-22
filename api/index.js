const express = require('express');

const app = express();

const port = 5000;

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const cors = require('cors');

const userRoute = require('./routes/user');

const authRoute = require('./routes/auth');

const productRoute = require('./routes/product');

const cartRoute = require('./routes/cart');

const orderRoute = require('./routes/order');

const boxRoute=require('./routes/box');

const stripeRoute = require('./routes/stripe');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Db connection successful'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.use('/api/products', productRoute);

app.use('/api/cart', cartRoute);

app.use('/api/orders', orderRoute);

app.use('/api/box',boxRoute);


//app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || port, () => {
  console.log(`Backend server is running on port: ${port}`);
});
