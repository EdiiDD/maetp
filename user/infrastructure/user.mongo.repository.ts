import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";
import UserModel from "./user.schema";

export class MongoRepository implements UserRepository {
	
	async findById(uuid: String): Promise<UserEntity | null> {
		return await UserModel.findOne({uuid})
	}
}