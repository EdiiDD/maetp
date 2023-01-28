import { QuestionsRepository } from "../domain/question.repository";

export class UseCaseGetQuestions {

	constructor(private readonly questionsRepository: QuestionsRepository) { }

	public execute = async () => {
		return await this.questionsRepository.getQuestions()
	}
}