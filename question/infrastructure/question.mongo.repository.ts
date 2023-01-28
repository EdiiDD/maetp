import { ErrorEntity, UknowError } from "../../share/domain/error.value";
import { QuestionEntity } from "../domain/question.entity";
import { QuestionsRepository } from "../domain/question.repository";
import QuestionModel from "./question.schema";

export class MongoRepository implements QuestionsRepository {

	async getQuestions(): Promise<QuestionEntity[] | ErrorEntity> {
		try {
			const questions = await QuestionModel.aggregate<QuestionEntity>([
				{
					"$match": {
						"questions": {
							"$elemMatch": {
								"language": "es"
							}
						},
						"answers": {
							"$elemMatch": {
								"language": "es"
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
												"es"
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
										"es"
									]
								}
							}
						}
					}
				},
				{
					"$sample": {
						"size": 10
					}
				}
			])

			return questions
		} catch (error) {
			return new UknowError()
		}
	}
}