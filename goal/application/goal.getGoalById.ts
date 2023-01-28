import { SearchEntity, SearchWithIdValue } from "../../share/domain/search.value";
import { GoalRepository } from "../domain/goal.repository";

export class UseCaseGetGoalById {

	constructor(private readonly goalRepository: GoalRepository) { }

	public execute = async (search: SearchEntity) => {
		return await this.goalRepository.getGoalById(search)
	}
}