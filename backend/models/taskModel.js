const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This field is mandatory']
    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task