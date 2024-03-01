import { FC, useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'


const LoaderPage: FC = () => {
  const [progress, setProgress] = useState<number>(0)
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1)
      } else {
        clearInterval(interval)
        navigate(ROUTES.EMAIL)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [progress])

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-64 h-64 relative rounded-full">
        <svg viewBox="0 0 252 252" className="absolute w-full h-full">
          <circle cx="126" cy="126" r="114" fill="none" stroke="#FFF" strokeWidth="12" strokeLinecap="round" />
          <circle
            cx="126"
            cy="126"
            r="114"
            fill="none"
            stroke="#E4229C"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="714.6"
            strokeDashoffset={(714.6 * (100 - progress)) / 100}
            transform="rotate(-90 126 126)"
          />
        </svg>
        <p
          className="text-white text-[52px] font-extrabold h-full flex justify-center items-center">
          {`${progress}%`}
        </p>
      </div>
      <p className="text-white font-semibold text-[17px] leading-[25px] text-center mt-[40px]"><Trans
        i18nKey={'loaderText'} /></p>
    </div>
  )
}
export default LoaderPage
