// const mongoose = require('mongoose');

// module.exports = mongoose.connect('mongodb://127.0.0.1:27017/users', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// }).then(() => {
//   console.log('Database connected');
// }).catch((error) => {
//   console.log('Error connecting to database:', error);
// });

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;


