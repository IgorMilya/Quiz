import { FC, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { AnswerTypes } from 'types'
import { Icon } from 'assets'
import Input from '../input/Input'

interface CheckboxProps {
  answer: string | AnswerTypes,
  onSelect: (answer: string) => void;
}

const Checkbox: FC<CheckboxProps> = ({ answer, onSelect }) => {
  const { t } = useTranslation()
  const [isChecked, setIsChecked] = useState(false)
  const isActiveMarkClass = isChecked ? 'bg-primary-pinkDark' : 'bg-[#6D4376]'
  const isActiveLabelClass = isChecked ? 'bg-primary-pinkDark bg-opacity-20 border-primary-pinkDark ' : 'bg-secondary border-secondary'
  const isNotObject = typeof answer === 'string'

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    isNotObject && onSelect(t(answer))
  }

  return (
    <label
      className={`border-2 cursor-pointer rounded-[16px] text-white flex items-center justify-between w-full py-[17px] px-[20px] ${isActiveLabelClass}`}>
      {isNotObject && <Trans i18nKey={answer} />}
      <input
        type="checkbox"
        className="appearance-none"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`w-6 h-6 flex items-center justify-center border border-primary-pinkDark rounded-[8px] transition-colors duration-300 ${isActiveMarkClass}`}>
        {isChecked && <img src={`${Icon.CheckboxMark}`} alt="CheckboxMark" />}
      </div>
    </label>
  )
}

export default Checkbox