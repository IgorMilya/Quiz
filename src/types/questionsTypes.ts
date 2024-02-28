import { AnswerTypes } from './answerTypes'

export type QuestionsTypes = {
  type: "single" | "multiple" | "bubble"
  title: string,
  answers: string[] | AnswerTypes[],
  subtitle?: string,
}