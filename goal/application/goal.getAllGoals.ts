import { GoalRepository } from "../domain/goal.repository";

export class UseCaseGetAllGoals {

	constructor(private readonly goalRepository: GoalRepository) { }

	public execute = async () => {
		return await this.goalRepository.getAllGoals()
	}
}