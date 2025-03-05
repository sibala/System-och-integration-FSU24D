import { Request, Response } from "express";
import { db } from "../config/db";
import { ITodo } from "../models/ITodo";
import { logError } from "../utils/logUtils";
import { ResultSetHeader } from "mysql2";

export const getTodos = async (req: Request, res: Response) => {
  // type ParamsType = {filter?: string}
  // console.log(req.query)
  // const {filter}: ParamsType = req.query;

  try {
    const sql = "SELECT * FROM todos"
    const [rows] = await db.query<ITodo[]>(sql)
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}

export const getTodoById = async (req: Request, res: Response) => {
  const {id} = req.params

  try {
    const sql = `SELECT * FROM todos WHERE id = ?`
    const [rows] = await db.query<ITodo[]>(sql, [id])
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}

export const createTodo = async (req: Request, res: Response) => {
  const {content} = req.body;
  if (content === undefined) {
    res.status(400).json({message: 'Required fields missing', required_fields: ['content']})
    return;
  }

  try {
    const sql = `
      INSERT INTO todos (content)
      VALUES (?)
    `
    await db.query<ResultSetHeader>(sql, [content])
    res.status(201).json({message: 'Todo created'})
  } catch(error: unknown) {
    res.status(500).json({error: logError(error)})
  }
}

export const updateTodo = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {content, done} = req.body;
  if (content === undefined || done === undefined) {
    res.status(400).json({message: 'Required fields missing', required_fields: ['content', 'done']})
    return;
  }

  try {
    const sql = `
      UPDATE todos
      SET content = ?, done = ?
      WHERE id = ?
    `
    const [result] = await db.query<ResultSetHeader>(sql, [content, done, id])
    if (result.affectedRows === 0) {
      res.status(404).json({message: 'Todo not found'})
      return
    }
    res.json({message: 'Todo updated'});
  } catch(error) {
    res.status(500).json({error: logError(error)})
  }
}

export const deleteTodo = async (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const sql = `
      DELETE FROM todos
      WHERE id = ?
    `
    const [result] = await db.query<ResultSetHeader>(sql, [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({message: 'Todo not found'})
      return
    }
    res.json({message: 'Todo deleted'});
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}