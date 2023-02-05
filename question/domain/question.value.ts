import { GetGameEntity } from "./question.entity";

export class GetGameValue implements GetGameEntity {
	language: string;
	gameType: number

	constructor({ language, gameType }:
		{ language: string, gameType: number }) {
		this.language = language
		this.gameType = gameType
	}
}

export class GetGameMoongoseValue implements GetGameEntity {
	language: string;
	numberQuestions: number

	constructor({ language, numberQuestions }:
		{ language: string, numberQuestions: number }) {
		this.language = language
		this.numberQuestions = numberQuestions
	}
}