import { GetGameEntity } from "../domain/question.entity";
import { QuestionsRepository } from "../domain/question.repository";
import { GetGameMoongoseValue, GetGameValue } from "../domain/question.value";

export class UseCaseGetQuestions {

	constructor(private readonly questionsRepository: QuestionsRepository) { }

	public execute = async (getGame: GetGameEntity) => {
		let numQuestions = 10
		const getGameValue = getGame as GetGameValue
		switch (getGameValue.gameType) {
			case 1:
				numQuestions = 10
				break;
			case 2:
				numQuestions = 20
				break;
			case 3:
				numQuestions = 20
				break;
			default:
				numQuestions = 10
				break;
		}
		return await this.questionsRepository.getQuestions(new GetGameMoongoseValue({
			language: getGameValue.language,
			numberQuestions: numQuestions
		}))
	}
}