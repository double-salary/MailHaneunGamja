console.log("INDEX.JS APPROACHED")

// Load mongoose
const mongoose = require('mongoose');

// Connect to the database

console.log(process.env.DATABASE_CONNECTION_STRING)

mongoose.connect(
    process.env.CONNECTION_STRING, // Retrieve connection string
    { // boiler plate values
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Create the schema or structure of our object in Mongoose
const userDataSchema = new mongoose.Schema({

    userId: String,
    department: String, 
    studentId: String,
    bookmarks: [String] // ["courses/exception/1"]
    
});

// Create a model using our schema
// This model will be used to access the database
const userDataModel = mongoose.model('userData', userDataSchema);

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
            // await getProfile(context);
            // const tasks = await TaskModel.find();
            // return all tasks
            
            context.res.body = { tasks: `tasks hehe`, 
        id: `${id}` };
            break;
        // // If post, create new task
        // case 'POST':
        //     await createProfile(context);
        //     break;
        // // If put, update task
        // case 'PUT':
        //     await updateProfile(context);
        //     break;
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