import { UserEntity } from "./user.entity";

export interface UserRepository {
	findById(uuid: string): Promise<UserEntity | null>
	//registerUser(user: UserEntity): Promise<UserEntity | null>
	//loginUser(user: UserEntity): Promise<UserEntity | null>
}