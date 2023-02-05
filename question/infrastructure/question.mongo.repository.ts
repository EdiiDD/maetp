import { ErrorEntity, UknowError } from "../../share/domain/error.value";
import { GetGameEntity, QuestionEntity } from "../domain/question.entity";
import { QuestionsRepository } from "../domain/question.repository";
import { GetGameMoongoseValue } from "../domain/question.value";
import QuestionModel from "./question.schema";

export class MongoRepository implements QuestionsRepository {

	async getQuestions(getGame: GetGameEntity): Promise<QuestionEntity[] | ErrorEntity> {
		try {
			const getGameMoongoseValue = getGame as GetGameMoongoseValue
			const questions = await QuestionModel.aggregate<QuestionEntity>([
				{
					"$match": {
						"questions": {
							"$elemMatch": {
								"language": `${getGameMoongoseValue.language}`
							}
						},
						"answers": {
							"$elemMatch": {
								"language": `${getGameMoongoseValue.language}`

							}
						}
					}
				},
				{
					"$project": {
						"questions": {
							"$arrayElemAt": [
								{
									"$filter": {
										"input": "$questions",
										"as": "question",
										"cond": {
											"$eq": [
												"$$question.language",
												`${getGameMoongoseValue.language}`
											]
										}
									}
								},
								0
							]
						},
						"answers": {
							"$filter": {
								"input": "$answers",
								"as": "answer",
								"cond": {
									"$eq": [
										"$$answer.language",
										`${getGameMoongoseValue.language}`
									]
								}
							}
						}
					}
				},
				{
					"$sample": {
						"size": getGameMoongoseValue.numberQuestions
					}
				}
			])

			return questions
		} catch (error) {
			return new UknowError()
		}
	}
}