import { Schema, model } from "mongoose"
import { GoalValue } from "../domain/goal.value"

const UserSchema = new Schema<GoalValue>(
	{
		uuid: {
			type: String,
			unique: true
		},
		name: {
			type: String
		},
		description: {
			type: String,
			unique: true
		}
	},
	{
		timestamps: true
	}
)

const GoalModel = model("goals", UserSchema)
export default GoalModel
