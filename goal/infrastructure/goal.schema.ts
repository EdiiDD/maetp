import { Schema, model } from "mongoose"
import { GoalEntity } from "../domain/goal.entity"

const GoalSchema = new Schema<GoalEntity>(
	{
		language: {
			type: String
		},
		title: {
			type: String
		},
		description: {
			type: String
		}
	},
	{
		timestamps: true
	}
)

const GoalModel = model("goals", GoalSchema)
export default GoalModel
