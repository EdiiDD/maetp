export interface SearchEntity {
	language: string
}

export class SearchBaseValue implements SearchEntity {

	language: string;

	constructor({ language }:
		{ language: string, }) {
		this.language = language
	}
}

export class SearchWithIdValue implements SearchEntity {
	id: string
	language: string;

	constructor({ id, language, }:
		{
			id: string,
			language: string
		}) {
		this.id = id
		this.language = language
	}
}