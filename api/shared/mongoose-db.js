// Load mongoose
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// Connect to the database
mongoose.connect(
    process.env.DATABASE_CONNECTION_STRING, // Retrieve connection string
    { // boiler plate values
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
)
.then(() => {
    console.log('Connected to DB');
  })
  .catch(error => {
    console.error('Connection to DB Failed');
    console.error(error.message);
    process.exit(-1);
  });

// Create the schema or structure of our object in Mongoose
const userSchema = new mongoose.Schema({
    seq :{ type: Number, default: 0},
    userId: String,
    name: { type: String, default: ""},
    major: { type: String, default: ""},
    studentId: { type: String, default: ""},
    bookmarks: { type: [String], default: []}
});


// Create a model using our schema
// This model will be used to access the database
const User = mongoose.model('User', userSchema);

module.exports = {
    mongoose: mongoose, 
    autoIncrement: autoIncrement,
    userSchema: userSchema,
    User: User
}

autoIncrement.initialize(mongoose.connection); // This is important. You can remove initialization in different file
userSchema.plugin(autoIncrement.plugin, {
  model: 'user',
  field: 'seq',
  startAt: 1,
  incrementBy: 1
});