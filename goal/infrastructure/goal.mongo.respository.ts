import { Types } from "mongoose";
import { ErrorEntity, UknowError } from "../../share/domain/error.value";
import { SearchBaseValue, SearchEntity, SearchWithIdValue } from "../../share/domain/search.value";
import { GoalEntity } from "../domain/goal.entity";
import { GoalRepository } from "../domain/goal.repository";
import GoalModel from "./goal.schema";


export class MongoRepository implements GoalRepository {

	async getAllGoals(search: SearchBaseValue): Promise<GoalEntity[] | ErrorEntity> {
		try {
			const goals = await GoalModel.aggregate<GoalEntity>(
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
					},
					{
						$project: {
							"language": "$goal.language",
							"langutitleage": "$goal.title",
							"description": "$goal.description",
							"_id": 1
						}
					}
				])
			)
			return goals
		} catch (error) {
			return new UknowError()
		}
	}

	async getGoalById(search: SearchWithIdValue): Promise<GoalEntity | ErrorEntity> {
		try {
			const goal = await GoalModel.aggregate<GoalEntity>(
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
					},
					{
						$project: {
							"language": "$goal.language",
							"langutitleage": "$goal.title",
							"description": "$goal.description",
							"_id": 1
						}
					}
				])
			)

			if (goal.length > 0) {
				return goal[0]
			} else {
				throw new UknowError()
			}

		} catch (error) {
			return new UknowError()
		}
	}
}