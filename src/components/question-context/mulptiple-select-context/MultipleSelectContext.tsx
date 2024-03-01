import { FC, useState } from 'react'
import { Checkbox } from 'UI'
import { QuestionsTypes } from 'types'
import { AnswerWrapper } from '../answer-wrapper'

interface MultipleSelectContextProps {
  isIcon: boolean,
  quiz: QuestionsTypes,
  onClick: (reply: string[]) => void,
}

const MultipleSelectContext: FC<MultipleSelectContextProps> = ({ isIcon, quiz, onClick }) => {
  const [multipleSelected, setMultipleSelected] = useState<string[]>([])
  const handleMultipleSelected = (topic: string) => {
    if (multipleSelected.includes(topic)) {
      setMultipleSelected(multipleSelected.filter(selectedTopic => selectedTopic !== topic))
    } else {
      setMultipleSelected([...multipleSelected, topic])
    }
  }

  const handleOnClick = () => onClick(multipleSelected)


  return (
    <AnswerWrapper isIcon={isIcon} onClick={handleOnClick} disabled={!multipleSelected.length}>
      {quiz.answers.map((answer, index) =>
        <Checkbox key={index} answer={answer} onSelect={handleMultipleSelected} />)}
    </AnswerWrapper>
  )
}

export default MultipleSelectContext