import { ErrorEntity } from "../../share/domain/error.value";
import { QuestionEntity } from "./question.entity";

export interface QuestionsRepository {

	getQuestions(): Promise<QuestionEntity[] | ErrorEntity>
}