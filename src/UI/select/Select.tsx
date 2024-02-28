import { FC, MouseEvent } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { AnswerTypes } from 'types'

interface SelectProps {
  onClick: () => void,
  answer: string | AnswerTypes,
  isIcon: boolean
}

const Select: FC<SelectProps> = ({ answer, onClick, isIcon }) => {
  const { i18n } = useTranslation()
  const changeLanguage = (lng: string | null) => {
    if (lng === 'English') {
      i18n.changeLanguage('en')
    } else if (lng === 'French') {
      i18n.changeLanguage('fr')
    } else if (lng === 'German') {
      i18n.changeLanguage('de')
    } else if (lng === 'Spanish') {
      i18n.changeLanguage('es')
    }
  }

  const handleStoreData = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    changeLanguage(e.currentTarget.textContent)
    onClick()
  }
  const isIconClass = isIcon ? 'pt-[30px] pb-[30px] pl-[25px] pr-[25px] text-center' : ' w-full pt-[18px] pb-[18px] pl-[20px]'

  return (
    <li onClick={handleStoreData}
        className={`bg-secondary text-white  rounded-[16px] ${isIconClass}`}>

      {typeof answer !== 'string' && (
        <div className="w-[52px] h-[52px] mb-[10px]">
          <img src={`${answer.icon}`} alt="icon" />
        </div>
      )}

      <Trans i18nKey={typeof answer === 'string' ? answer : answer.text} />
    </li>
  )
}

export default Select