import { v4 as uuid } from "uuid"
import { GoalEntity } from "./goal.entity";

export class GoalValue implements GoalEntity {
	_id: string
	language: string;
	title: string
	description: string


	constructor({ name, language, description }: {
		name: string,
		language: string
		description: string
	}) {
		this._id = uuid()
		this.title = name
		this.language = language
		this.description = description
	}
}