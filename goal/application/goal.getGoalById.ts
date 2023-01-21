import { GoalRepository } from "../domain/goal.repository";

export class UseCaseGetAllGoals {

	constructor(private readonly goalRepository: GoalRepository) { }

	public execute = async (uuid: string) => {
		return await this.goalRepository.getGoalById(uuid)
	}
}