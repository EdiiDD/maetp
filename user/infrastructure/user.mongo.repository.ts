import UserModel from "../../auth/infrastructure/auth.schema";
import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";

export class MongoRepository implements UserRepository {

	async findById(uuid: String): Promise<UserEntity | null> {
		return await UserModel.findOne({ uuid })
	}
}