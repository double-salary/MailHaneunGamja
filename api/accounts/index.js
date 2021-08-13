console.log("INDEX.JS APPROACHED")

// Load mongoose
const mongoose = require('mongoose');
const { updateUserAction } = require('../../svelte-app/src/store');

// Connect to the database

console.log(process.env.DATABASE_CONNECTION_STRING)

mongoose.connect(
    process.env.DATABASE_CONNECTION_STRING, // Retrieve connection string
    { // boiler plate values
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

// Create the schema or structure of our object in Mongoose
const userSchema = new mongoose.Schema({

    userId: String,
    name: { type: String, default: null},
    major: { type: String, default: null},
    studentId: { type: String, default: null},
    bookmarks: { type: [String], default: []}
    
});

// Create a model using our schema
// This model will be used to access the database
const User = mongoose.model('user', userSchema);

// Export our function
module.exports = async function (context, req) {
    // setup our default content type (we always return JSON)
    context.res = {
        header: {
            "Content-Type": "application/json"
        }
    }

    

    // Read the method and determine the requested action
    switch (req.method) {
        // If get, return all tasks
        case 'GET':
            await getOrCreateUser(context);
            break;

        case 'POST': 
            await updateUser(context);
            break;
    }
};

// Return all tasks
async function getProfile(context) {
    // load all tasks from database
    // const tasks = await userDataModel.find({ userId: auth.getUserInfo(). });
    // return all tasks
    console.log("getProfile")
    console.log(auth.getUserInfo())
    context.res.body = { tasks: tasks };
}

// Create new task
async function createTask(context) {
    // Read the uploaded task
    const body = context.req.body;
    // Save to database
    const task = await TaskModel.create(body);
    // Set the HTTP status to created
    context.res.status = 201;
    // return new object
    context.res.body = task;
}

// Update an existing function
async function updateTask(context) {
    // Grab the id from the URL (stored in bindingData)
    const id = context.bindingData.id;
    // Get the task from the body
    const task = context.req.body;
    // Update the item in the database
    const result = await TaskModel.updateOne({ _id: id }, task);
    // Check to ensure an item was modified
    if (result.nModified === 1) {
        // Updated an item, status 204 (empty update)
        context.res.status = 204;
    } else {
        // Item not found, status 404
        context.res.status = 404;
    }
}

async function getOrCreateUser(context) {

    const userId = context.bindingData.userId;

    const query = { userId: userId };
    const update = { userId: userId };
    const options = {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
    }

    context.res.body = await User.findOneAndUpdate(query, update, options);
}

async function updateUser(context) {

    const id = context.bindingData.userId;

    const query = {userId: id};
    const update = context.req.body;
    const options = {
        new: true,
        setDefaultsOnInsert: true
    }
    
    const updatedUser = await User.findOneAndUpdate(query, update, options);

    context.res.body = updatedUser;

}