import {
   Entity,
   PrimaryColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
   OneToMany,
} from 'typeorm'
import { OrderItem } from './OrderItem'

export type PaymentMethod = 'transfer' | 'paystack' | 'crypto' | 'opera'
export type PaymentStatus = 'pending' | 'processing' | 'confirmed' | 'failed'

@Entity('orders')
export class Order {
   @PrimaryColumn({ type: 'text' })
   id!: string // e.g. ORD-1721234567890-ABC123

   @Column({ type: 'text' })
   customerEmail!: string

   @Column({ type: 'text' })
   paymentMethod!: PaymentMethod

   @Column({ type: 'real' })
   totalAmount!: number

   @Column({ type: 'text', default: 'NGN' })
   currency!: string

   @Column({ type: 'text', default: 'pending' })
   status!: PaymentStatus

   // Payment method-specific details stored as JSON
   @Column({ type: 'text', nullable: true })
   paymentDetails!: string | null // JSON string

   // Proof of payment file paths (JSON array of stored filenames)
   @Column({ type: 'text', nullable: true })
   proofFiles!: string | null // JSON string: string[]

   // For crypto/opera: blockchain tx hash or payment ref
   @Column({ type: 'text', nullable: true })
   transactionId!: string | null

   @Column({ type: 'text', nullable: true })
   userAgent!: string | null

   @Column({ type: 'text', nullable: true })
   timezone!: string | null

   @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
   items!: OrderItem[]

   @CreateDateColumn()
   createdAt!: Date

   @UpdateDateColumn()
   updatedAt!: Date
}
