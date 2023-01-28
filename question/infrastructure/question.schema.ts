import { Schema, model } from "mongoose"
import { QuestionEntity } from "../domain/question.entity";

const QuestionSchema = new Schema<QuestionEntity>(
	{
		questions: {
			language: {
				type: String,

			},
			title: {
				type: String
			}
		},
		answers: {
			type: [],
			language: {
				type: String
			},
			title: {
				type: String
			},
			isCorrect: {
				type: Boolean
			}
		}
	}
)

const QuestionModel = model("questions", QuestionSchema)
export default QuestionModel