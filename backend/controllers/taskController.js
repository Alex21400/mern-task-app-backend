const Task = require("../models/taskModel");

// Create a single task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// Get single task
const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)

        if(!task) {
            return res.status(404).json(`No task with ID of: ${id} found`)
        }

        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if(!deletedTask) {
            return res.status(404).json(`Cannot delete. No task with ID of: ${id} found`)
        }

        res.status(200).send('Task deleted successfully!')
    } catch(error) {
        res.status(500).send(error.message)
    }
}

// Update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(
            { _id: id}, 
            req.body, {
            new: true,
            runValidators: true
            }    
        )

        if(!task) {
            res.status(404).json(`Cannot update. No task with ID of: ${id} found`)
        }

        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createTask,
    getTasks,
    getSingleTask,
    deleteTask,
    updateTask
}