import { FC } from 'react'
import { QuestionsTypes } from 'types'
import { Trans } from 'react-i18next'
import { Select, Checkbox, Button } from 'UI'
import { SelectWrapper } from './select-wrapper'
import { CheckboxWrapper } from './checkbox-wrapper'

interface QuestionContextProps {
  handleNext: () => void,
  questions: QuestionsTypes[],
  index: string | undefined
}

const QuestionContext: FC<QuestionContextProps> = ({ handleNext, questions, index }) => {
  const currentQuiz = Number(index) - 1
  const quiz = questions[currentQuiz]
  const isIcon = quiz.answers.every(answer => typeof answer !== 'string')

  return (
    <div className="mt-[45px] h-[calc(100%_-_97px)]">
      <h1 className="font-bold text-[25px] leading-[34px] text-white mb-[16px] text-center">
        <Trans i18nKey={quiz.title}>What is your preferred language? </Trans>
      </h1>
      <p className="text-[17px] leading-[24px] text-[#C4C8CC] mb-[24px] text-center">
        <Trans i18nKey={quiz?.subtitle}>Choose language</Trans>
      </p>

      {quiz.type === 'single' && (
        <SelectWrapper isIcon={isIcon}>
          {quiz.answers.map((answer, index) =>
            <Select key={index} onClick={handleNext} answer={answer} isIcon={isIcon} />)};
        </SelectWrapper>
      )}
      {quiz.type === 'multiple' && (
        <div className="flex flex-col justify-between h-[calc(100%_-_151px)]">
          <CheckboxWrapper>
            {quiz.answers.map((answer, index) =>
              <Checkbox key={index} answer={answer as string} />)}
          </CheckboxWrapper>
          <Button variant="contained" onClick={handleNext}>Next</Button>
        </div>
      )}

    </div>
  )
}

export default QuestionContext