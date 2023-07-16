import mongoose from 'mongoose';

const badmintonSchema = new mongoose.Schema({
	title: String,
	date: Date,
	winner: String,
	set1: Array,
	set2: Array,
	set3: Array,
	gender: String,
	sports: String,
});
//collection -> class
const PostUser = mongoose.model('badminton', badmintonSchema);

export default PostUser;
