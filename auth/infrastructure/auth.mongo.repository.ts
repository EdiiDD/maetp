import UserModel from "../../user/infrastructure/user.schema";

import { UserEntity } from "../../user/domain/user.entity";
import { LoginEntity } from "../domain/auth.entity";
import { AuthRepository } from "../domain/auth.repository";

import { DuplicateItemError, ErrorEntity, UknowError } from "../../share/domain/error.value";
import { UserValue } from "../../user/domain/user.value";

export class MongoRepository implements AuthRepository {

	async registerUser(user: UserEntity): Promise<UserValue | ErrorEntity> {
		try {
			const userInsert = await UserModel.create(user)
			return userInsert
		} catch (e: any) {
			if (e.code === 11000) {
				return new DuplicateItemError()
			}
			return new UknowError()
		}
	}

	async loginUser(user: LoginEntity): Promise<UserValue | null> {
		console.log("Aqui")
		console.log(user)
		const user1 = await UserModel.findOne({ email: user.email })
		return user1
	}
}