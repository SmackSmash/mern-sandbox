const mongoose = require('mongoose');
const config = require('config');

module.exports = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), { useNewUrlParser: true });
    console.log('Connected to DB');
  } catch (error) {
    console.error(error.messsage);
    process.exit(1);
  }
};
