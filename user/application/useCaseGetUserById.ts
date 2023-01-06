import { UserRepository } from "../domain/user.repository";

export class UseCaseGetUserById {
	constructor(private readonly userRepository: UserRepository) {}

	public execute = async (uuid:string) => {
		return await this.userRepository.findById(uuid)
	} 
}