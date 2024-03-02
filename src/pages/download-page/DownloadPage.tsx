import { FC } from 'react'
import { Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button } from 'UI'
import { ROUTES } from 'routes'
import { StoreTypes } from 'types'
import { Icon } from 'assets'
import { useLocalStoreHook } from '../../hook'
import { USER_DATA, USER_REPLIES } from 'utils/const'


const DownloadPage: FC = () => {

  const navigate = useNavigate()
  const handleRetakeQuiz = () => {
    localStorage.clear()
    navigate(ROUTES.START_QUIZ)
  }

  const handleDownloadAnswers = () => {
    const { parseData: userData } = useLocalStoreHook(USER_DATA)
    const { parseData: userReplies } = useLocalStoreHook(USER_REPLIES)

    const allUserData = [...userData, ...userReplies].sort((a, b) => a.order - b.order)

    const headers = Object.keys(allUserData[0])
    const mainContent = allUserData.map(item => Object.values(item).toString())

    const csvFormat = [headers, ...mainContent].join('\n')

    const blob = new Blob([csvFormat], { type: 'application/csv' })

    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.href = url
      link.download = 'test.csv'
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="flex flex-col items-center relative h-full">
      <h1 className="font-cursive text-[#ECECFB] text-[36px] leading-[43.65px] mt-[101px]">
        <Trans i18nKey="finalPage.title" />
      </h1>
      <p className="text-[#ECECFB] leading-[25px] text-[17px] font-semibold mb-[62px]">
        <Trans i18nKey="finalPage.subtitle" />
      </p>
      <div>
        <img src={Icon.Checkmark} alt="Checkmark" />
      </div>

      <div className="absolute w-full bottom-[20px] flex flex-col items-center">
        <Button variant="text" onClick={handleDownloadAnswers}>
          <div className="flex mb-[30px] items-center">
            <img src={Icon.Download} alt="Download" />
            <span className="text-[#ECECFB] font-semibold text-[17px] ml-[5px]">
              <Trans i18nKey="finalPage.downloadingText" />
            </span>
          </div>
        </Button>

        <Button variant="contained" onClick={handleRetakeQuiz}>
          <Trans i18nKey="finalPage.buttonText" />
        </Button>
      </div>

    </div>
  )
}

export default DownloadPage