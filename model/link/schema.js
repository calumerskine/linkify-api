const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const linkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});


module.exports =  linkSchema;
