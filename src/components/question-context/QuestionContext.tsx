import { FC, useState } from 'react'
import { QuestionsTypes, StoreTypes } from 'types'
import { Trans, useTranslation } from 'react-i18next'
import { Select, Checkbox, Button, BubbleSelect } from 'UI'
import { AnswerActionWrapper } from './answer-action-wrappe'
import { AnswersWrapper } from './answers-wrapper'

interface QuestionContextProps {
  handleNext: () => void,
  questions: QuestionsTypes[],
  index: string | undefined
}

const QuestionContext: FC<QuestionContextProps> = ({ handleNext, questions, index }) => {
  const { t } = useTranslation()
  const [bubbleSelected, setBubbleSelected] = useState<string[]>([])
  const [multipleSelected, setMultipleSelected] = useState<string[]>([])

  const currentQuiz = Number(index) - 1
  const quiz = questions[currentQuiz]
  const isIcon = quiz.answers.every(answer => typeof answer !== 'string')

  const handleSelectTopic = (topic: string) => {
    if (bubbleSelected.includes(topic)) {
      setBubbleSelected(bubbleSelected.filter(selectedTopic => selectedTopic !== topic))
    } else {
      setBubbleSelected([...bubbleSelected, topic])
    }
  }
  const handleMultipleSelected = (topic: string) => {
    if (multipleSelected.includes(topic)) {
      setMultipleSelected(multipleSelected.filter(selectedTopic => selectedTopic !== topic))
    } else {
      setMultipleSelected([...multipleSelected, topic])
    }
  }

  const handleStoreData = (reply: string[]) => {
    const store = localStorage.getItem('users_replies')
    const parseData: StoreTypes[] = store ? JSON.parse(store) : []
    const toStringReply = reply.join(', ')
    const isObjectSelect = isIcon && quiz.type === 'single-select'

    const deletedExistedData = parseData.filter(({ title }) => title !== t(quiz.title))

    const preparedData = {
      order: Number(index),
      title: t(quiz.title),
      type: isObjectSelect ? `${quiz.type}-image` : quiz.type,
      answer: toStringReply,
    }

    window.localStorage.setItem('users_replies', JSON.stringify([...deletedExistedData, preparedData]))

    handleNext()
  }

  return (
    <div className="mt-[45px] h-[calc(100%_-_97px)]">
      <h1 className="font-bold text-[25px] leading-[34px] text-white mb-[16px] text-center">
        <Trans i18nKey={quiz.title}>What is your preferred language? </Trans>
      </h1>

      <p className="text-[17px] leading-[24px] text-[#C4C8CC] mb-[24px] text-center">
        <Trans i18nKey={quiz?.subtitle}>Choose language</Trans>
      </p>

      {quiz.type === 'single-select' && (
        <AnswersWrapper isIcon={isIcon}>
          {quiz.answers.map((answer, index) =>
            <Select key={index} onClick={handleStoreData} answer={answer} isIcon={isIcon} />)};
        </AnswersWrapper>
      )}

      {quiz.type === 'multiple-select' && (
        <AnswerActionWrapper>
          <AnswersWrapper isIcon={isIcon}>
            {quiz.answers.map((answer, index) =>
              <Checkbox key={index} answer={answer} handleSelectTopic={handleMultipleSelected} />)}
          </AnswersWrapper>
          <Button variant="contained" onClick={() => handleStoreData(multipleSelected)}>Next</Button>
        </AnswerActionWrapper>
      )}

      {quiz.type === 'bubble' && (
        <AnswerActionWrapper>
          <AnswersWrapper isIcon={isIcon}>
            {quiz.answers.map((answer, index) =>
              <BubbleSelect
                key={index}
                answer={answer}
                onSelect={handleSelectTopic}
                selectedCount={bubbleSelected.length}
              />)}
          </AnswersWrapper>
          <Button variant="contained" onClick={() => handleStoreData(bubbleSelected)}
                  disabled={!bubbleSelected.length}>Next</Button>
        </AnswerActionWrapper>
      )}

    </div>
  )
}


export default QuestionContext