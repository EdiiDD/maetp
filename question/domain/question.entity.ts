export interface QuestionEntity {
	questions: QuestionItemEntity
	answers: AnswerItemEntity[]
}

export interface QuestionItemEntity {
	language: string
	title: string
}

export interface AnswerItemEntity {
	language: string
	title: string
	isCorrect: boolean
}

export interface GetGameEntity {
	language: string
}