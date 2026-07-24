import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   ManyToOne,
   JoinColumn,
} from 'typeorm'
import { Order } from './Order'

export type LicenseType = 'frontend' | 'backend' | 'full'

@Entity('order_items')
export class OrderItem {
   @PrimaryGeneratedColumn()
   id!: number

   @Column({ type: 'text' })
   productId!: string

   @Column({ type: 'text' })
   productName!: string

   @Column({ type: 'text' })
   license!: LicenseType

   @Column({ type: 'real' })
   price!: number

   @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
   @JoinColumn({ name: 'orderId' })
   order!: Order

   @Column({ type: 'text' })
   orderId!: string
}
