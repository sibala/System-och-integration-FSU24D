import { Request, Response } from "express";
import { db } from "../config/db";
import { IOrderItem } from "../models/IOrderItem";
import { IOrder } from "../models/IOrder";
import { logError } from "../utilities/logger";
import { ResultSetHeader } from "mysql2";

export const getOrders = async (_: any, res: Response) => {
  try {
    const sql = "SELECT * FROM orders";
    const [rows] = await db.query<IOrder[]>(sql)
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}

export const getOrderById = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  
  try {
    const sql = `
      SELECT * FROM orders 
      LEFT JOIN customers ON orders.customer_id = customers.id
      LEFT JOIN order_items ON orders.id = order_items.order_id
      WHERE orders.id = ?
    `;
    const [rows] = await db.query<IOrder[]>(sql, [id])

    rows && rows.length > 0
      ? res.json(formatOrderDetails(id, rows))
      : res.status(404).json({message: 'Order not found'})
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}

const formatOrderDetails = (orderId, rows) => ({
  id: orderId,
  customer_id: rows[0].customer_id,
  total_price: rows[0].total_price,
  payment_status: rows[0].payment_status,
  payment_id: rows[0].payment_id,
  order_status: rows[0].order_status,
  order_items: rows.map(item => ({
    id: item.id,
    product_id: item.product_id,
    product_name: item.product_name,
    quantity: item.quantity,
    unit_price: item.unit_price
  }))
});

export const createOrder = async (req: Request, res: Response) => {
  const { customer_id, total_price, payment_status, payment_id, order_status }: IOrder = req.body;
  
  try {
    const sql = `
      INSERT INTO orders (customer_id, total_price, payment_status, payment_id, order_status)
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [customer_id, total_price, payment_status, payment_id, order_status]
    const [result] = await db.query<ResultSetHeader>(sql, params)
    if (result.insertId) {
      const order_id: number = result.insertId;
      const orderItems = req.body.order_items;
      for (const orderItem of orderItems) {
        const data = {...orderItem, order_id}
        await createOrderItem(data)
      };
    }

    res.status(201).json({message: 'Product created'})
  } catch(error: unknown) {
    res.status(500).json({error: logError(error)})
  }
}

const createOrderItem = async (data: IOrderItem) => {
  const {order_id, product_id, product_name, quantity, unit_price} = data;
  try {
    const sql = `
      INSERT INTO order_items (
        order_id, 
        product_id, 
        product_name, 
        quantity, 
        unit_price 
      ) VALUES (?, ?, ?, ?, ?)
    `;
    const params = [order_id, product_id, product_name, quantity, unit_price]
    await db.query<ResultSetHeader>(sql, params)
  } catch(error) {
    throw new Error;
  }
}

export const updateOrder = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const { customer_id, total_price, payment_status, payment_id, order_status }: IOrder = req.body;
  
  try {
    const sql = `
      UPDATE orders 
      SET customer_id = ?, total_price = ?, payment_status = ?, payment_id = ?,order_status = ?
      WHERE id = ?
    `;
    const params = [customer_id, total_price, payment_status, payment_id, order_status, id];
    const [result] = await db.query<ResultSetHeader>(sql, params)

    result.affectedRows === 0
      ? res.status(404).json({message: 'Order not found'})
      : res.json({message: 'Order updated'});
  } catch(error) {
    res.status(500).json({error: logError(error)})
  }
}

export const deleteOrder = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  
  try {
    const sql = "DELETE FROM orders WHERE id = ?";
    const [result] = await db.query<ResultSetHeader>(sql, [id]);
    
    result.affectedRows === 0
      ? res.status(404).json({message: 'Order not found'})
      : res.json({message: 'Order deleted'});
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
}