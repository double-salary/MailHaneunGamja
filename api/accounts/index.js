
const mongooseDB = require('../shared/mongoose-db');

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

async function getOrCreateUser(context) {

    const userId = context.bindingData.userId;

    const query = { userId: userId };
    const update = { userId: userId };
    const options = {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
    }

    context.res.body = await mongooseDB.User.findOneAndUpdate(query, update, options);
}

async function updateUser(context) {

    const id = context.bindingData.userId;

    const query = {userId: id};
    const update = context.req.body;
    const options = {
        new: true,
        setDefaultsOnInsert: true
    }
    
    const updatedUser = await mongooseDB.User.findOneAndUpdate(query, update, options);

    context.res.body = updatedUser;

}