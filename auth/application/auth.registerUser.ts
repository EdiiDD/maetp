import { UserEntity } from "../../user/domain/user.entity";
import { AuthRepository } from "../domain/auth.repository";

export class UseCaseRegisterUser {

	constructor(private readonly authRepository: AuthRepository){}

	public execute = async (user: UserEntity) => {
		return await this.authRepository.registerUser(user)
	}
}