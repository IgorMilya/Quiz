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
  const isIconClass = isIcon ? 'py-[30px] px-[25px] text-center mr-[12px] last:mr-0' : ' w-full py-[18px] pl-[20px] mb-[12px] last:mb-0'
  const isObject = typeof answer !== 'string'

  const changeLanguage = (lng: string) => {
    let english = 'English Englisch Inglés Anglais'
    let france = 'French Français Francés Französisch'
    let germany = "German Allemand Alemán Deutsch";
    let spain = "Spanish Espagnol Español Spanisch";

    if (english.includes(lng)) {
      i18n.changeLanguage('en')
    } else if (france.includes(lng)) {
      i18n.changeLanguage('fr')
    } else if (germany.includes(lng)) {
      i18n.changeLanguage('de')
    } else if (spain.includes(lng)) {
      i18n.changeLanguage('es')
    }
  }


  const handleStoreData = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    const text = e.currentTarget.textContent
    text && changeLanguage(text)
    text && onClick([text])
  }

  return (
    <li onClick={handleStoreData}
        className={`cursor-pointer bg-secondary text-white  rounded-[16px]  ${isIconClass}`}>

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