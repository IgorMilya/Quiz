import { FC, useState } from 'react'
import { AnswerTypes } from 'types'
import { Trans, useTranslation } from 'react-i18next'

interface BubbleSelectProps {
  answer: AnswerTypes | string
  onSelect: (answer: string) => void;
  selectedCount: number;
}

const BubbleSelect: FC<BubbleSelectProps> = ({ answer, selectedCount, onSelect }) => {
  const { t } = useTranslation()
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const isObject = typeof answer !== 'string'
  const isActiveClass = isSelected && 'border-primary-pinkDark border-2'

  const handleCheckboxChange = () => {
    if (isSelected || selectedCount < 3) {
      setIsSelected(!isSelected)
      isObject && onSelect(t(answer.text))
    }
  }

  return (
    <>
      {isObject &&
        <li
          className={`text-center text-white font-semibold text-[13px] leading-4 flex flex-col items-center justify-center bg-secondary w-[88px] h-[88px] rounded-full sm:w-[120px] sm:h-[120px] 
        ${isActiveClass}`}
          onClick={handleCheckboxChange}
        >
          <div className="mb-[6px] sm:w-[35px] sm:h-[35px]">
            <img className="w-full h-full" src={`${answer.icon}`} alt="icon" />
          </div>
          <p className="w-full break-words text-[13px] font-semibold sm:text-[18px]"><Trans i18nKey={answer.text} /></p>
        </li>
      }
    </>
  )
}

export default BubbleSelect