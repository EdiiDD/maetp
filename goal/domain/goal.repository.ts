import { ErrorEntity } from "../../share/domain/error.value";
import { SearchEntity } from "../../share/domain/search.value";
import { GoalEntity } from "./goal.entity";


export interface GoalRepository {

	getAllGoals(search: SearchEntity): Promise<GoalEntity[] | ErrorEntity>

	getGoalById(search: SearchEntity): Promise<GoalEntity[] | ErrorEntity>
}