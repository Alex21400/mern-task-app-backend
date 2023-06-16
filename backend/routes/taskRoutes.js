const express = require('express')
const { createTask, getTasks, getSingleTask, deleteTask, updateTask } = require('../controllers/taskController')

const router = express.Router()

// Create a task
router.post('/', createTask)

// Get all tasks
router.get('/', getTasks)

// Get a single task
router.get('/:id', getSingleTask)

// Delete a task
router.delete('/:id', deleteTask)

// Update a task
router.put('/:id', updateTask)

module.exports = router