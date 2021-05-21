import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { JoinColumn } from "typeorm/browser";
import { v4 as uuidv4 } from "uuid";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  daily_rate: number;
  @Column()
  available: boolean;
  @Column()
  license_plate: string;
  @Column()
  fine_amount: number;
  @Column()
  brand: string;
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
    }
  }
}

export { Car };
