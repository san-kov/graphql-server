import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  favoriteColor: string;
}
