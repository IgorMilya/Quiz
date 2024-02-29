import { FC, useState } from 'react'
import { BubbleSelect } from 'UI'
import { QuestionsTypes } from 'types'
import { AnswerWrapper } from '../answer-wrapper'

interface BubbleContextProps {
  isIcon: boolean,
  quiz: QuestionsTypes,
  onClick: (reply: string[]) => void,
}

const BubbleContext: FC<BubbleContextProps> = ({ quiz, isIcon, onClick }) => {
  const [bubbleSelected, setBubbleSelected] = useState<string[]>([])

  const handleSelectTopic = (topic: string) => {
    if (bubbleSelected.includes(topic)) {
      setBubbleSelected(bubbleSelected.filter(selectedTopic => selectedTopic !== topic))
    } else {
      setBubbleSelected([...bubbleSelected, topic])
    }
  }

  const handleOnClick = () => onClick(bubbleSelected)


  return (
    <AnswerWrapper isIcon={isIcon} onClick={handleOnClick} disabled={!bubbleSelected.length}>
      {quiz.answers.map((answer, index) =>
        <BubbleSelect
          key={index}
          answer={answer}
          onSelect={handleSelectTopic}
          selectedCount={bubbleSelected.length}
        />)}
    </AnswerWrapper>
  )
}

export default BubbleContext