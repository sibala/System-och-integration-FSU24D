import { Request, Response } from "express";
import { db } from "../config/db";
import { logError } from "../utilities/logger";
import { IOrderItem } from "../models/IOrderItem";
import { ResultSetHeader } from "mysql2";

export const updateOrderItem = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const { quantity }: IOrderItem = req.body;
  
  try {
    const sql = `
      UPDATE order_items
      SET 
        quantity = ?
      WHERE id = ?
    `;
    const params = [quantity, id];
    const [result] = await db.query<ResultSetHeader>(sql, params)

    result.affectedRows === 0
      ? res.status(404).json({message: 'OrderItem not found'})
      : res.json({message: 'OrderItem updated'});
  } catch(error) {
    res.status(500).json({error: logError(error)})
  }
}

export const deleteOrderItem = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  
  try {
    const sql = "DELETE FROM order_items WHERE id = ?";
    const [result] = await db.query<ResultSetHeader>(sql, [id]);
    
    result.affectedRows === 0
      ? res.status(404).json({message: 'OrderItem not found'})
      : res.json({message: 'OrderItem deleted'});
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}