import { ErrorEntity } from "../../share/domain/error.value";
import { GetGameEntity, QuestionEntity } from "./question.entity";

export interface QuestionsRepository {

	getQuestions(getGame: GetGameEntity): Promise<QuestionEntity[] | ErrorEntity>
}