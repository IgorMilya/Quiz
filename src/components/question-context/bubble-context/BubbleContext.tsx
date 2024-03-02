import { FC, useState } from 'react'
import { BubbleSelect } from 'UI'
import { USER_REPLIES } from 'utils'
import { QuestionsTypes } from 'types'
import { AnswerWrapper } from '../answer-wrapper'
import { useTranslation } from 'react-i18next'
import { useLocalStoreHook } from '../../../hook'

interface BubbleContextProps {
  isIcon: boolean,
  quiz: QuestionsTypes,
  onClick: (reply: string[]) => void,
}

const BubbleContext: FC<BubbleContextProps> = ({ quiz, isIcon, onClick }) => {
  const [bubbleSelected, setBubbleSelected] = useState<string[]>([])
  const { t } = useTranslation()
  const { parseData } = useLocalStoreHook(USER_REPLIES)

  const filteredData = parseData.filter(({ order }) => order === 3)
  const filteredAnswers = quiz.answers.filter((answer) => {
    return typeof answer !== 'string' ? t(answer.type!) === filteredData[0].answer : answer
  })

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

      {filteredAnswers.map((answer, index) =>
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