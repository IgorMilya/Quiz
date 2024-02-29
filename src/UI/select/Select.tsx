import { FC, MouseEvent } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { AnswerTypes } from 'types'

interface SelectProps {
  onClick: (reply: string[]) => void,
  answer: string | AnswerTypes,
  isIcon: boolean
}

const Select: FC<SelectProps> = ({ answer, onClick, isIcon }) => {
  const { i18n } = useTranslation()
  const isIconClass = isIcon ? 'pt-[30px] pb-[30px] pl-[25px] pr-[25px] text-center' : ' w-full pt-[18px] pb-[18px] pl-[20px]'
  const isObject = typeof answer !== 'string'

  const changeLanguage = (lng: string) => {
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
    const text = e.currentTarget.textContent;
    text && changeLanguage(text)
    text && onClick([text])
  }

  return (
    <li onClick={handleStoreData}
        className={`cursor-pointer bg-secondary text-white  rounded-[16px] ${isIconClass}`}>

      {isObject && (
        <div className="w-[52px] h-[52px] mb-[10px]">
          <img src={`${answer.icon}`} alt="icon" />
        </div>
      )}

      <Trans i18nKey={!isObject ? answer : answer.text} />
    </li>
  )
}

export default Select