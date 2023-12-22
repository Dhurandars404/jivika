const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://durandal:durandal@letsc0de.yirct.mongodb.net/rozgaar",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
);
