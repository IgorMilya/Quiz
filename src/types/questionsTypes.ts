import { AnswerTypes } from './answerTypes'

export type QuestionsTypes = {
  type: "single-select" | "multiple-select" | "bubble"
  title: string,
  answers: string[] | AnswerTypes[],
  subtitle?: string,
}