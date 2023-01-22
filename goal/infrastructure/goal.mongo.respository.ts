import { Types } from "mongoose";
import { ErrorEntity, UknowError } from "../../share/domain/error.value";
import { SearchBaseValue, SearchEntity, SearchWithIdValue } from "../../share/domain/search.value";
import { GoalEntity } from "../domain/goal.entity";
import { GoalRepository } from "../domain/goal.repository";
import GoalModel from "./goal.schema";


export class MongoRepository implements GoalRepository {

	async getAllGoals(search: SearchBaseValue): Promise<GoalEntity[] | ErrorEntity> {
		try {
			const goals = await GoalModel.aggregate(
				([
					{
						"$match": {
							"goal": {
								"$elemMatch": {
									"language": `${search.language}`
								}
							}
						}
					},
					{
						"$project": {
							"goal": {
								"$arrayElemAt": [
									{
										"$filter": {
											"input": "$goal",
											"as": "goal",
											"cond": {
												"$eq": [
													"$$goal.language",
													`${search.language}`
												]
											}
										}
									},
									0
								]
							}
						}
					}
				])
			)

			return goals
		} catch (error) {
			return new UknowError()
		}
	}

	async getGoalById(search: SearchWithIdValue): Promise<GoalEntity[] | ErrorEntity> {
		try {
			const goal = await GoalModel.aggregate(
				([
					{
						"$match": {
							"_id": new Types.ObjectId(`${search.id}`)
						}
					},
					{
						"$project": {
							"goal": {
								"$arrayElemAt": [
									{
										"$filter": {
											"input": "$goal",
											"as": "goal",
											"cond": {
												"$eq": [
													"$$goal.language",
													`${search.language}`
												]
											}
										}
									},
									0
								]
							}
						}
					}
				])
			)
			console.log(goal)
			return goal
		} catch (error) {
			return new UknowError()
		}
	}
}