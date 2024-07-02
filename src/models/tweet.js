const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required: true,
        max: [250 , 'Max character limit reached']
    },
    hashtags : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag'
    }]
} , {timestamps:true});

const Tweet = mongoose.model('Tweet' , tweetSchema);
module.exports = Tweet;