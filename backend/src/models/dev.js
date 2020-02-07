const mongoose = require('mongoose');
const devschema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String]
})

module.exports = mongoose.model('dev', devschema);