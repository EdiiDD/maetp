import { v4 as uuid } from "uuid"
import { GoalEntity } from "./goal.entity";

export class GoalValue implements GoalEntity {
	uuid: string
	name: string
	description: string


	constructor({ name, description }: {
		name: string,
		description: string
	}) {
		this.uuid = uuid()
		this.name = name
		this.description = description
	}
}


export class GoalDTO {
	goal_id: string
	name: string
	description: string

	constructor({ uuid, name, description }: {
		uuid: string
		name: string,
		description: string
	}) {
		this.goal_id = uuid
		this.name = name
		this.description = description
	}
}