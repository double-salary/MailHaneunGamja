console.log("INDEX.JS APPROACHED")

// Load mongoose
const mongoose = require('mongoose');

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
    name: { type: String, default: "name"},
    major: { type: String, default: "major"},
    studentId: { type: String, default: "studendID"},
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

    const id = context.bindingData.userId;

    // Read the method and determine the requested action
    switch (req.method) {
        // If get, return all tasks
        case 'GET':
            console.log("GET")
            await getOrCreateUser(context);
            break;
            
            // context.res.body = {
            //     name: "name",
            //     userId: "userId",
            //     major: "major",
            //     studentId: "studentId",
            //     bookmarks: []
            // }
            break;


        case 'POST': 
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

    const id = context.bindingData.id;

    const query = { userId: id };
    const update = { userId: id };
    const options = {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
    }

    const user = await User.findOneAndUpdate(query, update, options);

    context.res.body = await new User();
}