import { QuestionsRepository } from "../domain/game.repository";

export class UseCaseGetQuestions {

	constructor(private readonly questionsRepository: QuestionsRepository) { }
}