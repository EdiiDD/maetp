import { ErrorEntity } from "../../share/domain/error.value";
import { GoalEntity } from "./goal.entity";


export interface GoalRepository {

	getAllGoals(): Promise<GoalEntity[] | ErrorEntity>

	getGoalById(uuid: String): Promise<GoalEntity[] | ErrorEntity>
}