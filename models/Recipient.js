/**
 * Created by charly on 11/22/17.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose ;

const recipientSchema  = new Schema({
  email: String,
  responded: {
    type: Boolean,
    default: false
  }
});

module.exports = recipientSchema;