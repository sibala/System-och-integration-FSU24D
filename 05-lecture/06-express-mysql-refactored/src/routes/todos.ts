import express from "express";
import { 
  createTodo, 
  deleteTodo, 
  getTodoById, 
  getTodos, 
  updateTodo } from "../controller/todoController";
const router = express.Router()

router.get('/', getTodos)
router.get('/:id', getTodoById)
router.post('/', createTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router