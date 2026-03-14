'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // Reference to the use who created the comment
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    comment_text: {type: String, trim: true, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("comment", commentSchema);