import { ErrorEntity } from "../../share/domain/error.value";
import { QuestionEntity } from "./game.entity";

export interface QuestionsRepository {

	getQuestions(): Promise<QuestionEntity | ErrorEntity>
}