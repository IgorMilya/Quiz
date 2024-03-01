import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Select } from 'UI'
import { storedData, USER_REPLIES } from 'utils'
import { QuestionsTypes } from 'types'
import { MultipleSelectContext } from './mulptiple-select-context'
import { BubbleContext } from './bubble-context'

interface QuestionContextProps {
  handleNext: () => void,
  questions: QuestionsTypes[],
  index?: string
}

const QuestionContext: FC<QuestionContextProps> = ({ handleNext, questions, index }) => {
  const { t } = useTranslation()
  const currentQuiz = Number(index) - 1
  const quiz = questions[currentQuiz]
  const isIcon = quiz.answers.every(answer => typeof answer !== 'string')

  const handleStoreData = (reply: string[]) => {
    const isObjectSelect = isIcon && quiz.type === 'single-select'
    const order = Number(index)
    const title = t(quiz.title)
    const type = isObjectSelect ? `${quiz.type}-image` : quiz.type
    const answer = reply.join(', ')
    storedData({ storeItem: USER_REPLIES, title, answer, order, type })
    handleNext()
  }

  return (
    <div className="mt-[45px] h-[calc(100%_-_97px)]">
      <h1
        className={`font-bold text-[25px] leading-[34px] text-white ${quiz?.subtitle ? 'mb-[16px]' : 'mb-[25px]'} text-center`}>
        <Trans i18nKey={quiz.title}>What is your preferred language? </Trans>
      </h1>

      {quiz?.subtitle && <p className="text-[17px] leading-[24px] text-[#C4C8CC] mb-[24px] text-center">
        <Trans i18nKey={quiz.subtitle}>Choose language</Trans>
      </p>}

      {quiz.type === 'single-select' && (
        <ul className={`flex justify-center ${isIcon ? 'flex-wrap' : 'flex-col'}`}>
          {quiz.answers.map((answer, index) =>
            <Select key={index} onClick={handleStoreData} answer={answer} isIcon={isIcon} />)};
        </ul>
      )}

      {quiz.type === 'multiple-select' &&
        <MultipleSelectContext isIcon={isIcon} quiz={quiz} onClick={handleStoreData} />}

      {quiz.type === 'bubble' && <BubbleContext isIcon={isIcon} quiz={quiz} onClick={handleStoreData} />}

    </div>
  )
}


export default QuestionContext