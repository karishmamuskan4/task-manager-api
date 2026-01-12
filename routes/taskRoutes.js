import express from 'express'
const router = express.Router()
import {getAllTasks,getTaskById,createTask,updateTask,deleteTask} from '../controllers/taskController.js'

router.get('/',getAllTasks)
router.get('/:id',getTaskById)
router.post('/',createTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

export default router
