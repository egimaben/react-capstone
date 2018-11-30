const mongoose = require('mongoose')
const { Schema } = mongoose;

const instructionsSchema = new Schema({
    tag: String,
    label: String,
    nuggets: [{
        text: String,
        code: String
    }]
});

module.exports = mongoose.model('instructions', instructionsSchema);