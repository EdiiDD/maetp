export interface ErrorEntity {
	message: string
}

export class DuplicateItemError implements ErrorEntity {
	message: string;

	constructor(){
		this.message = "ERROR_DUPLICATE_ITEM"
	}
}

export class UknowError implements ErrorEntity {
	message: string;

	constructor(){
		this.message = "ERROR_UKNOW"
	}
}

export module ErrorUtils {
	export function instanceOfErrorEntity(object: any): object is ErrorEntity {
		return "message" in object
	}
}

