import { AuthRepository } from "../domain/auth.repository";
import { LoginValue } from "../domain/auth.value";

export class UseCaseLoginUser {

	constructor(private readonly authRepository: AuthRepository) { }

	public execute = async (user: LoginValue) => {
		return await this.authRepository.loginUser(user)
	}
}