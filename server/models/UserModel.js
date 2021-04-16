const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    required: true
  }
})

module.exports = model('Users', UserSchema)