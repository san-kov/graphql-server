import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import Profile from "./Profile";
import Photo from "./Photo";
import Group from "./Group";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: String;

  @OneToOne(() => Profile, { nullable: true })
  @JoinColumn({ name: "profile_id" })
  profile: Profile;

  @OneToMany(() => Photo, photo => photo.user)
  photos: Photo[];

  @ManyToMany(() => Group)
  @JoinTable()
  groups: Group[];
}
