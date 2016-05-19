var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
// we define a property for this model object
// then what type it is, in this case, the
// completed property will has to be a Boolean
completed: Boolean,
// we can add validations too
// just use an object literal here instead
// just be sure to have a type property on that object
// to tell mongoose what type this property will be
text: {
type: String, // will be a string
required: true
} });

// no matter what we pass in as a name for the model,
// mongoose will lowercase it and pluralize it for the collection.
// so below the name for the model is 'Todo', mongoose will
// convert that to 'todos' in the databse.
// TodoModel is the model we'll use in node to CRUD so
// it makes sense to export this;
var TodoModel = mongoose.model('Todo',TodoSchema);
module.export = TodoModel;
