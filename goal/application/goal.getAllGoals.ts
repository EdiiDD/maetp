import { SearchEntity } from "../../share/domain/search.value";
import { GoalRepository } from "../domain/goal.repository";

export class UseCaseGetAllGoals {

	constructor(private readonly goalRepository: GoalRepository) { }

	public execute = async (search: SearchEntity) => {
		return await this.goalRepository.getAllGoals(search)
	}
}