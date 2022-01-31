import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'client' })
export class Client {
  @PrimaryColumn()
  id_client: number

  @Column({ type: 'varchar', length: 150 })
  name: string

  @Column({ type: 'varchar', length: 150 })
  email: string

  @Column({ type: 'string', length: 20 })
  phone: string

  @Column({ type: 'varchar', length: 150 })
  street: string

  @Column({ type: 'varchar', length: 10 })
  number: string

  @Column({ type: 'varchar', length: 150 })
  district: string

  @Column({ type: 'varchar', length: 150 })
  city: string

  @Column({ type: 'varchar', length: 2 })
  state: string
}
