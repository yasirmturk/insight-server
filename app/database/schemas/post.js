'use strict';

const Mongoose  = require('mongoose');
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
	creator: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	content: { type: String, required: true },
	date: { type: Date, default: Date.now },
	mentions: {
		type: [{ type: Schema.Types.ObjectId, ref: 'user', required: true }]
	},
	tags: {
		type: [String]
	}
});

PostSchema.statics.mapIDs = ids => ids.map(id=>Mongoose.Types.ObjectId(id));

module.exports = Mongoose.model('post', PostSchema);
