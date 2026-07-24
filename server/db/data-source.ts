import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Order } from './entities/Order'
import { OrderItem } from './entities/OrderItem'
import { CreateOrderTables1721584201000 } from './migrations/1721584201000-CreateOrderTables'

export const AppDataSource = new DataSource({
   type: 'better-sqlite3',
   database: './server/db/portfolio.db',
   synchronize: false,
   logging: process.env.NODE_ENV !== 'production',
   entities: [Order, OrderItem],
   migrations: [CreateOrderTables1721584201000],
})
